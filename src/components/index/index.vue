<template>
    <div class="index">
        <banner></banner>
        <div class="main_page">
            <backround></backround>
            <div class="top">
                <main></main>
            </div>
            <div class="wrapper">
                <main>
                    <div class="left">
                        <router-link tag="li" :to="{name:'article_info',params:{id:item.id}}" v-for="(item,index) in articles">
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
                    <div class="right">
                        <transition name="fade" mode="out-in">
                            <router-view :key="this.$route.params.id"></router-view>
                        </transition>
                    </div>
                </main>
            </div>
        </div>

    </div>
</template>

<script>
    import api from "../api.vue";
    import backround from "../public/background.vue";
    import sidebar from "../public/sidebar.vue";
    import banner from "../index/banner.vue";
    const get_category= api.get_category;//分类获取api
    const uploads_url= api.uploads_url;//资源路径
    const get_type= api.get_type;//获取分类名称和id

    export default {
        name: "home",
        components:{
            backround,sidebar,banner
        },
        data(){
            return{
                articles:'',
                types:'',
                data:'',
                uploads_url:uploads_url
            }
        },
        mounted(){
            this.get_category(0);
        },
        methods:{
            get_category(id=0){
                this.$axios({
                    url:get_category,
                    method:"get",
                    params:{id:id}
                }).then((res)=>{
                    this.articles=res.data.data;
                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .fade-enter-active, .fade-leave-active {
        @include transition(0.5s);
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
    }
    .main_page{
        width: 100%;
        background: #333;
        padding-top: 15px;
        position: relative;
        z-index: 1;
        .top{
            width: 100%;
            height: auto;
            background: rgba(0,0,0,0.3);
            border-radius: 3px;
            @include box-sizing();
            padding: 10px;
            position: relative;
            z-index: 5;
            margin-bottom: 10px;
            .a1{
                width: 100%;
                overflow: hidden;
                li{
                    float: left;
                    width: 33.33%;
                    height: 40px;
                    line-height: 40px;
                    text-align: center;
                    background: #333;
                    a{
                        @include font(14px,#fff);
                    }
                }
            }
            .a2{
                width: 100%;
            }
        }
        .wrapper{
            position: relative;
            z-index: 10;
            width: 100%;
            @include clear;
            .left{
                width: 66%;
                float: left;
                @include box-sizing();
                display: flex;
                justify-content: space-between;
                flex-wrap: wrap;
                li{
                    width: 31%;
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
                width: 32%;
                float: left;

            }
        }
    }
</style>