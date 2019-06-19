<template>
    <div class="search">
        <input type="text" @keyup.enter="get_search" v-model.trim="keywords" placeholder="搜索...">
        <li v-for="item in articles.data">
            <router-link tag="span" :to="{name:'article_info',params:{id:item.id}}">
                {{item.title}}
            </router-link>
        </li>
    </div>
</template>

<script>
    import api from "../api.vue";
    const article_search=api.article_search;//搜索api

    export default {
        name: "article_search",
        data(){
            return{
                keywords:"",
                articles:''
            }
        },
        methods:{
            get_search(){
                var that=this;
                this.$axios({
                    url:article_search,
                    method:"get",
                    params:{keywords:that.keywords}
                }).then(res => that.articles=res.data)
            }
        },
        watch:{
            keywords:function () {
                this.article
            }
        }
    }
</script>

<style scoped lang="scss">
    .search{
        width: 100%;
        @include input(14px,rgba(255,255,255,0.8));
        li{
            width: 80%;
            @include box-sizing();
            padding: 10px 15px;
            background: #333;
            margin-left: 10%;
            border-radius: 4px;
            margin-top: 10px;
            line-height: 20px;
            @include elli;
            @include font(14px,rgba(255,255,255,0.7));
            @include transition(0.5s);
            cursor: pointer;
            &:hover{
                 background: #555;
                 color: rgba(255,255,255,1);
             }
        }
        input{
            width: 80%;
            margin-left: 10%;
            height: 45px;
            background: #333;
            border:none;
            @include box-sizing();
            padding-left: 15px;
            border-radius: 4px;
            @include font(14px,#fff);
        }
    }
</style>