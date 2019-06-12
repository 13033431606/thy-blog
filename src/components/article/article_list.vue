<template>
    <div class="article_list">
        <div class="wrapper">
            <main>
                <div class="left">
                    <router-link tag="li" :key="item.id" :to="{name:'article_info',params:{id:item.id}}" v-for="(item,index) in articles">
                        <div class="pic" v-if="item.img1">
                            <img :src="uploads_url+'/'+item.img1" class="need_cover" alt="">
                            <div class="type" style="display: none">vue , css , javascript</div>
                        </div>
                        <div class="pic" v-else>
                            <img src="../../assets/img/banner2.jpg" class="need_cover" alt="">
                            <div class="type" style="display: none">vue , css , javascript</div>
                        </div>
                        <div class="article">
                            <div class="time">
                                <div class="type">Time</div>
                                <div class="line"></div>
                                <div class="date">{{item.time}}</div>
                            </div>
                            <div class="title">{{item.title}}</div>
                        </div>
                    </router-link>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";

    const get_article=api.get_category;

    const uploads_url=api.uploads_url;

    export default {
        name: "article_list",
        data(){
            return{
                articles:'',
                data:'',
                uploads_url:uploads_url,
            }
        },
        mounted(){
            this.get_article(0);
        },
        beforeDestroy(){
            this.$root.mask="mask_on";
        },
        methods:{
            get_article(id=0){
                this.$axios({
                    url:get_article,
                    params:{
                        id:id
                    },
                    method:"get"
                }).then((res)=>{
                    this.articles=res.data.data;
                    var that=this;
                    setTimeout(function () {
                        that.$root.mask="mask_off";
                    },that.$root.delay);
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .article_list{
        width: 100%;
        height: auto;
        padding-top: 100px;
        position: relative;
        z-index: 10;
    }
    .wrapper{
        position: relative;
        z-index: 10;
        width: 100%;
        @include clear;
        .left{
            width: 100%;
            float: left;
            @include box-sizing();
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            li{
                width: 24%;
                float: left;
                @include box-sizing();
                padding: 10px;
                background: rgba(0,0,0,0.3);
                border-radius: 3px;
                margin-bottom: 20px;
                cursor: pointer;
                @include transition(0.5s);
                &:hover{
                    background: rgba(0,0,0,0.5);
                    @include Y(-5px);
                    @include box-shadow(0 4px 12px 0 rgba(0,0,0,0.3));
                    .pic{
                        @include scale(0.95);
                        img{
                            @include scale(1.12);
                        }
                    }
                }
                .pic{
                    width: 100%;
                    height: 200px;
                    overflow: hidden;
                    position: relative;
                    .type{
                        position: absolute;
                        right: 0px;
                        top:0px;
                        @include font(14px,#fff);
                        background: $color;
                        padding: 2px 4px 2px 4px;
                        border-radius: 3px;
                    }
                    @include transition(0.5s);
                    img{
                        opacity: 0.9;
                        @include transition(0.5s);
                    }
                }
                .article{
                    width: 100%;
                    .time{
                        height: 34px;
                        @include font(14px,#fff);
                        line-height: 34px;
                        @include clear;
                        .type{
                            float: left;
                            font-weight: bold;
                            color: $color;
                            border-radius: 4px;
                        }
                        .line{
                            width: 1px;
                            height: 10px;
                            background: #fff;
                            margin-top: 12px;
                            float: left;
                            margin-left: 10px;
                            margin-right: 10px;
                        }
                        .date{
                            float: left;
                            font-weight: lighter;
                        }
                    }
                    .title{
                        @include font(17px,#fff);
                        height: 48px;
                        overflow: hidden;
                        line-height: 24px;
                    }
                }
            }
        }
        .right{
            width: 100%;
            float: left;
            height: 500px;

        }
    }
</style>