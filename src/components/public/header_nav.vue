<template>
    <div class="header_nav">
        <main>
            <router-link tag="div" class="logo" :to="{name:'index'}">
                <div class="en">T<span>h</span>eory</div>
                <div class="cn">原<span>则</span> - Life is not all roses</div>
            </router-link>
            <div class="nav">
                <router-link tag="li" :to="{name:'index'}" :class="{header_router_active : $route.meta.title == 'index'}">
                    Homepage
                </router-link>
                <router-link tag="li" :to="{name:'article'}" :class="{header_router_active : $route.meta.title == 'article'}">
                    Article
                </router-link>
                <router-link tag="li" :to="{name:'article_info',params:{id:271}}" :class="{header_router_active : $route.meta.title == 'library'}">
                    Img Library
                </router-link>
            </div>
        </main>
    </div>
</template>

<script>
    export default {
        name: "header_nav"
    }
    var header_nav=document.getElementsByClassName("header_nav");
    window.onscroll=function () {
        var t = document.documentElement.scrollTop || document.body.scrollTop;
        if(t >0){
            header_nav[0].classList.add("header_nav_on");
        }
        else{
            header_nav[0].classList.remove("header_nav_on");
        }
    }
</script>

<style scoped lang="scss">
    .header_router_active{
        color: $color!important;
        text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
    }
    .header_nav_on{
        &:after{
            @include Y(80px);
            opacity: 1!important;
        }
        &:before{
            width: 100%!important;
            background: rgba($color,0.3)!important;
        }
    }
    .header_nav{
        width: 100%;
        height: 80px;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        @include transition(0.5s);
        &:after{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            top: -100%;
            left: 0;
            z-index: 1;
            background: rgba(0,0,0,0.7);
            opacity: 0;
            @include transition(0.5s);
        }
        &:before{
            content: '';
            width: 90%;
            background: rgba(255,255,255,0.3);
            height: 1px;
            @include horizontal;
            bottom: -1px;
            @include transition(0.5s);
        }
        main{
            position: relative;
            z-index: 5;
            .logo{
                float: left;
                height: 100%;
                cursor: pointer;
                &:hover{
                    .en{
                        @include X(5px);
                    }
                    .cn{
                        @include X(5px);
                    }
                }
                .en{
                    @include font(23px,#fff);
                    font-weight: bold;
                    line-height: 30px;
                    padding-top: 15px;
                    @include transition(0.5s);
                    span{
                        color: $color;
                        text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
                    }
                }
                .cn{
                    @include font(13px,#fff);
                    font-weight: lighter;
                    line-height: 20px;
                    @include box-sizing();
                    @include transition(0.5s);
                    transition-delay: 0.05s;
                    span{
                        color: $color;
                        text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
                    }
                }
            }
            .nav{
                float: right;
                height: 100%;
                li{
                    float: left;
                    height: 100%;
                    line-height: 80px;
                    padding-left: 40px;
                    padding-right: 40px;
                    @include font(17px,#fff);
                    font-weight: lighter;
                    @include transition(0.5s);
                    cursor: pointer;
                    &:hover{
                        color: $color;
                    }
                }
            }
        }

    }

</style>