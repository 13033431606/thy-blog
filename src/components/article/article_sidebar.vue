<template>
    <div class="article_sidebar">
        <div class="news">
            <li v-for="item in news" v-loading="loading">
                <div class="title" @click="link_to(item.news_url)">{{item.news_title}}</div>
                <div class="pic">
                    <img :src="item.news_img" class="need_cover" alt="汤昊赟个人博客">
                </div>
                <div class="content need_scroll_small">{{item.news_content}}</div>
                <div class="time">{{item.news_time}}</div>
            </li>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";
    const get_news= api.get_news;

    export default {
        name: "article_sidebar",
        data(){
            return {
                news:'',
                loading:true
            }
        },
        created(){
          this.get_news();
        },
        methods:{
            get_news(){
                this.$axios({
                    url:get_news,
                }).then(res => {
                    this.news=res.data.news;
                    this.loading=false;
                    console.log(res.data)
                })
            },
            link_to(url){
                window.open(url);
            }
        }
    }
</script>

<style scoped lang="scss">
    .article_sidebar{
        .news{
            width: 100%;
            padding-top: 5px;
            li{
                padding: 13px 8px;
                @include clear;
                border-bottom: 1px solid #f2f2f2;

                &:last-child{
                    border-bottom: none;
                }
                .title{
                    width: 100%;
                    @include elli;
                    @include font(14px,#333);
                    line-height: 30px;
                    height: 30px;
                    float: left;
                    font-weight: bold;
                    cursor: pointer;
                    @include transition(0.5s);
                    &:hover{
                        color: $color;
                    }
                }
                .pic{
                    float: left;
                    width: 140px;
                    height: 90px;
                }
                .content{
                    height: 72px;
                    width: calc(100% - 150px);
                    float: right;
                    @include font(14px,#666);
                    line-height: 24px;
                }
                .time{
                    float: right;
                    height: 18px;
                    line-height: 18px;
                    @include font(12px,#999);
                    text-align: right;
                }
            }
        }
    }
</style>