const path=require("path");
const webpack=require("webpack");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports={
    //模式
    mode:"development",
    //入口文件
    entry:__dirname+"/src/main.js",
    output:{
        path:path.resolve(__dirname+"/public"),
        publicPath: "/public/",
        filename: "index.js"
    },
    devServer: {
        host:'localhost',
        port:'7080'
    },
    module: {
        rules: [

            //解析css
            {test:/\.css$/, loader:["style-loader","css-loader"]},
            //解析vue后缀文件
            {test:/\.vue$/, loader: "vue-loader"},
            //用巴babel解析js文件 排除模块安装目录的文件
            {test:/\.js$/, loader: "babel-loader",exclude: /node_modules/},
            //解析字体
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            //解析scss
            {
                test: /\.scss$/,
                use: [
                    { loader: 'vue-style-loader' },
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } },
                    { loader: 'sass-resources-loader',
                        options: {
                            sourceMap: true,
                            resources: './src/assets/css/base.scss'
                        }
                    }
                ]
            },
            //图片解析
            {
                test: /\.(jpg|jpeg|png|gif|svg|webp)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024 * 100, // 小于100kb --> url --> base64编码
                            // 这里如果只写一个文件名,那么图片将打包到  entry.output.path 路径下,也就是 dist/name.ext
                            // name: '[name].[ext]',// 大于100KB 把 url(xx) 替换成 ../images/[name].[ext]
                            // 如果,这里写的名字包含路径,那么也是相对于 entry.ouput.path 路径
                            // 同时这个名字将会作为生成的css中url中的图片地址.
                            name:"[name]-[hash:5].min.[ext]", // -> 存储路径是 dist/images/name.ext
                            publicPath: "static/img",
                            outputPath: "static/img"
                        }
                    },
                ]
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin(),
        //热更新插件
        new webpack.HotModuleReplacementPlugin()
    ],
    // 如果服务器遇到跨域问题，下面是配置代理，解决跨域
    // devServer: { //配置webpack-dev-server -> express服务器的选项
    //     host: 'localhost', // A
    //     port: 9999,
    //     //代理
    //     proxy: { //this.$ajax.get('/v2/xxxx')
    //         '/v2/*': { // 如果当前请求的url 是以/v2开头/xxxxxx,则默认请求127.0.1/v2/xxx
    //             changeOrigin: true, //changeOrigin就把当前本地express服务器由A变为向B请求并返回
    //             target: 'http://duyan.fooor.cn/word.php/', //B
    //         }
    //     }
    //
    // }
}