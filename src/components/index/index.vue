<template>
    <div class="index">
        <transition appear name="fade2" mode="out-in">
            <banner></banner>
        </transition>
        <div class="main_page">
            <div class="top">
                <main></main>
            </div>
        </div>
    </div>
</template>

<script>
    import sidebar from "../public/sidebar.vue";
    import banner from "../index/banner.vue";
    export default {
        name: "home",
        components:{
            sidebar,banner
        },
        data(){
            return{
                articles:'',
                types:'',
                data:'',
                mask:""
            }
        }
    }
</script>

<style scoped lang="scss">
    .index{
        width: 100%;
        position: relative;
        z-index: 10;
    }
    .main_page{
        width: 100%;
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
    }
</style>