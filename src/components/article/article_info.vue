<template>
    <div class="article_info">
        <main>
            <div class="title">{{article.title}}</div>
            <div class="content info_content" v-html="article.content"></div>
        </main>
    </div>
</template>

<script>
    import api from "../api.vue";

    import hljs from 'highlight.js';
    import 'highlight.js/styles/railscasts.css'

    const highlightCode = () => {
        const preEl = document.querySelectorAll('pre')

        preEl.forEach((el) => {
            hljs.highlightBlock(el)
        })
    }

    const get_article=api.get_article;
    export default {
        name: "article_info",
        data(){
            return{
                article:'',
            }
        },
        mounted(){
            this.get_article_data(this.$route.params.id);

        },
        updated () {
            highlightCode()
        },
        watch: {
            '$route' (to, from) { //监听路由是否变化
                if(this.$route.params.id){
                    this.get_article_data(this.$route.params.id);
                }
            }
        },
        methods:{
            get_article_data(id){
                this.$axios({
                    url:get_article,
                    method:"get",
                    params:{id:id}
                }).then((res)=>{
                    this.article=res.data.data[0];
                })
            },
            test(){
                console.log(1)
            }
        }
    }
</script>
<style lang="scss">
    .info_content{
        .hljs{
            width: 100%;
            @include box-sizing();
            border-radius: 3px;
        }
        table{
            max-width: 100%;
            td,th{
                border: 1px solid #dedede;
            }
        }
    }
</style>
<style scoped lang="scss">
    .article_info_content{
        @include font(17px,rgba(255,255,255,0.9));
        letter-spacing: 0.5px;
        line-height: 28px;
    }
    .article_info{
        width: 100%;
        background: rgba(0,0,0,0.3);
        main{
            max-width:900px;
            position: relative;
            z-index: 5;
            background: rgba(255,255,255,0.9);
            border-radius: 3px;
            @include box-sizing();
            padding: 10px;
            .title{
                width: 100%;
                line-height: 26px;
                @include font(25px,#333);
                font-weight: bold;
                text-align: center;
                padding-top: 15px;
                padding-bottom: 15px;
            }
            .content{
                width: 100%;
                outline: none;
                @include box-sizing();
                padding: 10px;
                @include font(14px,#333);
                line-height: 26px;
            }
        }
    }
</style>