<template>
    <div class="index">
        <transition appear name="fade2" mode="out-in">
            <banner></banner>
        </transition>
        <div class="container">
            <main>
                <div class="left">
                    <div class="article">
                        <div class="img">
                            <img :src="img_url" alt="">
                        </div>
                        <div class="title">{{article_title}}</div>
                        <div class="author">{{article_author}}</div>
                        <div class="index_article_content need_scroll_small" v-html="article_content"></div>
                    </div>
                </div>
                <div class="right">
                    <li v-for="item in news">
                        <div class="title">{{item.news_title}}</div>
                        <div class="img">
                            <img :src="item.news_img" alt="">
                        </div>
                        <div class="content">
                            <div class="content">{{item.news_content}}</div>
                            <div class="time">{{item.news_time}}</div>
                        </div>
                    </li>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";
    import sidebar from "../public/sidebar.vue";
    import banner from "../index/banner.vue";


    const get_news=api.get_news;

    const get_poetry=api.get_poetry;

    export default {
        name: "home",
        components:{
            sidebar,banner
        },
        data(){
            return{
                article_title:"",
                article_author:"",
                article_content:"",
                img_url:"",
                wxs:"",
                yiju:"",
                news:"",
                news_load:true
            }
        },
        created(){
            this.get_news();
        },
        methods:{
            get_news(){
                this.$axios({
                    url:get_news,
                }).then((res)=>{
                    var news_data=res.data;
                    if(typeof(news_data) == "string"){
                        var str = news_data.replace(/\s*/g,"");
                        news_data=JSON.parse(str);
                    }
                    this.news=news_data.news;
                    this.article_title=news_data.article_title;
                    this.article_author=news_data.article_author;
                    this.article_content=news_data.article_content;
                    this.img_url=news_data.img_url;
                    this.wxs=news_data.wxs;
                    this.yiju=news_data.yiju;
                    this.news_load=false
                })
            }
        }
    }
</script>
<style lang="scss">
    .index_article_content{
        width: 100%;
        height: 300px;
        p{
            @include font(15px,rgba(255,255,255,0.8));
            line-height: 26px;
        }
    }
</style>
<style scoped lang="scss">
    .index{
        width: 100%;
        position: relative;
        z-index: 10;
    }
    .container{
        width: 100%;
        padding-top: 15px;
        position: relative;
        z-index: 1;
        .left{
            float: left;
            width: 40%;
            .article{
                width: 100%;
                .img{
                    width: 100%;
                    text-align: left;
                    img{
                        max-width: 100%;
                    }
                }
                .title{
                    width: 100%;
                    line-height: 36px;
                    @include font(21px,rgba(255,255,255,0.8));
                    font-weight: bold;
                    padding-top: 6px;
                }
                .author{
                    width: 100%;
                    line-height: 28px;
                    @include font(15px,rgba(255,255,255,0.8));
                    padding-bottom: 6px;
                }
            }
        }
        .right{
            width: 55%;
            float: right;
            background: rgba(0,0,0,0.5);
            @include box-sizing();
            padding: 10px;
            li{
                width: 100%;
                @include clear;
                margin-bottom: 24px;
                border-bottom: 1px solid rgba(255,255,255,0.3);
                padding-bottom: 24px;
                &:last-of-type{
                    margin-bottom: 0;
                    border-bottom: none;
                }
                .title{
                    width: 100%;
                    @include font(16px,rgba(255,255,255,0.9));
                    font-weight: bold;
                    line-height: 24px;
                    padding-bottom: 15px;
                }
                .img{
                    width: 140px;
                    float: left;
                    height: 90px;
                    img{
                        @include a;
                    }
                }
                .content{
                    width: calc(100% - 150px);
                    height: auto;
                    float: right;
                    .time{
                        width: 100%;
                        @include font(12px,rgba(255,255,255,0.8));
                        line-height: 22px;
                        text-align: right;
                    }
                    .content{
                        width: 100%;
                        line-height: 24px;
                        @include font(15px,rgba(255,255,255,0.8));
                        text-indent: 30px;
                    }
                }
            }
            
        }

    }
</style>