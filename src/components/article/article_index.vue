<template>
    <div class="article_index">
        <div class="tips_container">
            <article_search></article_search>
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
                    <article_list></article_list>
                </div>
                <div class="right">
                    <article_sidebar></article_sidebar>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";
    import article_list from "../article/article_list.vue";
    import article_sidebar from "../article/article_sidebar.vue";
    import article_search from "../article/article_search.vue";
    const article_count=api.article_count;
    const todo_count=api.todo_count;

    export default {
        name: "article_index",
        components:{
            article_sidebar,article_list,article_search
        },
        data(){
            return{
                total_count:"loading...",
                todo_count:"loading...",
            }
        },
        created(){
            this.$axios({
                url:article_count,
                method:"get"
            }).then((res)=>{
                this.total_count=res.data.data;
            });
            this.$axios({
                url:todo_count,
                method:"get"
            }).then((res)=>{
                this.todo_count=res.data.data;
            });
        },
        beforeDestroy(){
            this.$root.mask="mask_on";
        },
    }
</script>

<style scoped lang="scss">
    .article_index{
        width: 100%;
        height: auto;
        position: relative;
        z-index: 10;
    }
    .tips_container{
        width: 100%;
        background: #111;
        padding-top: 110px;
        padding-bottom: 30px;
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
        }
        .right{
            width: 33%;
            float: right;
            background: #fff;
            @include box-sizing();
            border: 1px solid #dcdcdc;
            height: auto;
        }
    }
</style>