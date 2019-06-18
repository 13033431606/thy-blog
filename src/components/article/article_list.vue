<template>
    <div class="article_list">
        <div class="tips_container">
            <div class="search">
                <form>
                    <input type="text" @keyup.enter="article_search" v-model.trim="keywords" placeholder="搜索...">
                </form>
            </div>
        </div>
        <div class="container">
            <div class="top">
                <main>
                    <li>
                        <div class="title">总数</div>
                        <div class="count">{{total_count}}</div>
                    </li>
                    <li>
                        <div class="title">待办事项</div>
                        <div class="count">{{todo_count}}</div>
                    </li>
                </main>
            </div>
            <main>
                <div class="left">
                    <div class="category">
                        <el-select v-model="value" clearable placeholder="前端">
                            <el-option
                                    v-for="item in types"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                            </el-option>
                        </el-select>
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
                                @current-change="get_article()"
                                :current-page.sync="current_page"
                                :page-size="page_size"
                                layout="prev, pager, next, jumper"
                                :total="articles.count">
                        </el-pagination>
                    </div>
                </div>
                <div class="right">

                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";

    const get_article=api.get_category;
    const get_count=api.get_count;
    const article_search=api.article_search;
    const uploads_url=api.uploads_url;
    const get_type=api.get_type;


    export default {
        name: "article_list",
        data(){
            return{
                articles:'',//文章数据集
                uploads_url:uploads_url,//用来添加图片路径的前缀
                total_count:"loading...",
                todo_count:"loading...",
                keywords:'',//搜索关键词
                current_page:1,//当前页码
                page_size:6,//单页文章个数
                types:"",
                value:"",
            }
        },
        created(){
            this.get_article(0);
            this.get_type(15);
            this.$axios({
                url:get_count,
                params:{id:0},
                method:"get"
            }).then((res)=>{
                this.total_count=res.data.data;
            });
            this.$axios({
                url:get_count,
                params:{id:14},
                method:"get"
            }).then((res)=>{
                this.todo_count=res.data.data;
            });
        },
        beforeDestroy(){
            this.$root.mask="mask_on";
        },
        methods:{
            get_article(id=0,page=this.current_page,num=this.page_size){
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
                    var that=this;
                    setTimeout(function () {
                        that.$root.mask="mask_off";
                    },that.$root.delay);
                })
            },
            get_type(id){
                this.$axios({
                    url:get_type,
                    params:{
                        id:id,
                    },
                    method:"get"
                }).then((res)=>{
                    this.types=res.data;
                })
            },
            //搜索方法
            article_search(){
                var that=this;
                if(this.search!=''){
                    this.$axios({
                        url:article_search,
                        params:{keywords:that.keywords},
                        method:"get"
                    }).then((res)=>{
                        this.articles=res.data;
                    })
                }
            },
            //element组件相关
            current_page_change(val) {
                this.current_page=val;
                this.get_article();
            },
            change(val){
                console.log(val)
            }
        }
    }
</script>

<style scoped lang="scss">
    .article_list{
        width: 100%;
        height: auto;
        position: relative;
        z-index: 10;
    }
    .tips_container{
        width: 100%;
        background: #111;
        height: 185px;
        .search{
            width: 100%;
            height: 45px;
            padding-top: 110px;
            form{
                width: 80%;
                margin-left: 10%;
                height: 45px;
                @include input(14px,rgba(255,255,255,0.8));
                input{
                    @include a;
                    background: #333;
                    border:none;
                    @include box-sizing();
                    padding-left: 15px;
                    border-radius: 4px;
                    @include font(14px,#fff);

                }
            }
        }
    }
    .container{
        position: relative;
        background: #f2f2f2;
        padding-bottom: 50px;
        z-index: 10;
        width: 100%;
        @include clear;
        .top{
            width: 100%;
            padding: 20px 0;
            border-bottom: 1px solid #dcdcdc;
            margin-bottom: 15px;
            background: #fff;
            li{
                float: left;
                border-right: 1px solid #dcdcdc;
                padding-right: 30px;padding-left: 30px;
                &:first-child{
                    padding-left: 0;
                }
                .title{
                    @include font(15px,#333);
                    padding-bottom: 8px;
                    height: 16px;
                }
                .count{
                    @include font(40px,#666);
                    font-weight: bold;
                }
            }

        }
        .left{
            width: 65%;
            float: left;
            @include box-sizing();
            border: 1px solid #dcdcdc;
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

        .right{
            width: 33%;
            float: right;
            background: #fff;
            @include box-sizing();
            border: 1px solid #dcdcdc;
            height: 500px;
        }
    }
</style>