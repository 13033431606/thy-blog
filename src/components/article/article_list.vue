<template>
    <div class="article_list">
        <div class="category">
            <!--分类组件-->
            <el-cascader
                    placeholder="选择分类"
                    v-show="types"
                    v-model="value"
                    :options="types"
                    @change="select_change"
                    :props="default_params">
            </el-cascader>
        </div>
        <li v-for="item in articles.data">
            <div class="pic">
                <img :src="item.img1?uploads_url+'/'+item.img1:'../../src/assets/img/banner1.jpg'" :alt="item.title" class="need_cover">
            </div>
            <div class="word">
                <router-link tag="a" :to="{name:'article_info',params:{id:item.id}}">
                    <div class="title">{{item.title}}</div>
                </router-link>
                <div class="des">{{item.description}}</div>
                <div class="time">{{item.time}}</div>
            </div>
        </li>
        <div class="page">
            <el-pagination
                    background
                    @current-change="current_page_change()"
                    :current-page.sync="current_page"
                    :page-size="page_size"
                    layout="total, prev, pager, next, jumper"
                    :total="count">
            </el-pagination>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";
    const get_article=api.get_category;
    const get_typetree=api.get_typetree;
    const uploads_url=api.uploads_url;
    export default {
        name: "article_list",
        data(){
            return{
                articles:'',//文章数据集
                uploads_url:uploads_url,//用来添加图片路径的前缀
                //有几个值需本地存储,供页面刷新使用,当前页码,文章总数,当前分类id
                current_page:Number(localStorage.current_page)?Number(localStorage.current_page):1,//当前页码,用本地存储来保存页码/elementui分页验证了数据类型,所以得转换
                count:Number(localStorage.count)?Number(localStorage.count):0,//当前文章数量
                value:localStorage.value?localStorage.value.split(',').map(Number):'',//select选项框值
                //
                page_size:6,//单页文章个数
                uploads_url:uploads_url,
                types:[],//分类树
                default_params: {
                    label: 'name',
                    value: 'id',
                    children: 'children',
                    expandTrigger: 'hover',
                    checkStrictly: true
                }
            }
        },
        created(){
            this.get_article(localStorage.value?localStorage.value.split(','):0);
            this.get_typetree(13);
        },
        methods:{
            //获取文章列表
            get_article(id=0,page=this.current_page,num=this.page_size){
                if(typeof this.value == "object"){
                    id=this.value[this.value.length -1]
                }
                this.$axios({
                    url:get_article,
                    params:{
                        id:id,
                        page:page,
                        num:num
                    },
                    method:"get"
                }).then((res)=>{
                    this.articles=res.data;
                    this.count=res.data.count;
                    localStorage.count=res.data.count;
                    var that=this;
                    setTimeout(function () {
                        that.$root.mask="mask_off";
                    },that.$root.delay);
                })
            },
            //获取分类信息
            get_typetree(id){
                this.$axios({
                    url:get_typetree,
                    params:{
                        id:id,
                    },
                    method:"get"
                }).then((res)=>{
                    this.types=res.data;
                })
            },
            //element组件相关
            current_page_change() { //页码变化
                localStorage.current_page=this.current_page;
                this.get_article(this.value,this.current_page,this.page_size);
            },
            select_change(){//下拉变化
                localStorage.current_page=this.current_page=1;//下拉选择后重置页面页码
                localStorage.value=this.value;
                this.get_article(this.value,this.current_page,this.page_size)
            }
        },
        watch:{
            value(){
                console.log(this.value)
            }
        }
    }
</script>

<style scoped lang="scss">
    .article_list{
        width: 100%;
        height: auto;
        @include clear;
        .category{
            width: 100%;
            @include box-sizing();
            padding: 10px;
            background: #fff;
            border-bottom: 1px solid #dcdcdc;
        }
        li{
            width: 100%;
            @include box-sizing();
            padding: 20px 15px;
            border-bottom: 1px solid #f2f2f2;
            @include clear;
            @include transition(0.5s);
            background: #fff;
            &:hover{
                background: rgba(0,0,0,0.03);
            }
            &:last-of-type{
                border-bottom: none;
            }
            .pic{
                float: left;
                width: 50px;
                height: 50px;
            }
            .word{
                float: left;
                width: calc(100% - 65px);
                @include box-sizing();
                margin-left: 15px;
                .title{
                    width: 100%;
                    @include elli;
                    @include font(15px,#333);
                    line-height: 25px;
                    cursor: pointer;
                    @include transition(0.5s);
                    &:hover{
                        color: $color;
                    }
                }
                .des{
                    width: 100%;
                    @include elli;
                    height: 25px;
                    line-height: 25px;
                    @include font(15px,#8c8c8c);
                }
                .time{
                    width: 100%;
                    text-align: right;
                    @include font(12px,#8c8c8c);
                    padding-top: 5px;
                }
            }
        }
        .page{
            width: 100%;
            padding-top: 15px;
            padding-bottom: 15px;
            background: #fff;
            text-align: center;
        }
    }
</style>