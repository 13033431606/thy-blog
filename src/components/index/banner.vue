<template>
    <div class="banner">
        <div class="words">
            <span>{{msg.data}}</span>
        </div>
        <div class="search">
            <input type="text" placeholder="Search...">
        </div>
        <div class="count">
            <li>
                <div class="title">
                    Total
                </div>
                <div class="num">
                    {{count.total_num}}
                </div>
            </li>
            <li>
                <div class="title">
                    Todo
                </div>
                <div class="num">
                    {{count.todo_num}}
                </div>
            </li>
        </div>
    </div>
</template>

<script>
    import api from "../api.vue";
    const count_url=api.get_count;
    const words_api=api.get_words;//毒鸡汤api


    export default {
        name: "banner.vue",
        data(){
            return{
                msg:'Loading...',
                count:{
                    total_num:"Loading...",todo_num:"Loading..."
                }
            }
        },
        methods:{
            get_words(){
                var time=new Date();
                var tiem_str=time.getFullYear()+"-"+eval(time.getMonth()+1)+"-"+time.getDate();
                this.$axios({
                    url:words_api,
                    method:"get",
                    params:{time:tiem_str}
                }).then((res)=>{
                    this.msg=res.data.data[0];
                })
            }
        },
        mounted(){
            this.$axios({
                url:count_url,
                method:"get",
                params:{id:0}
            }).then((res)=>{
                this.count.total_num=res.data.data;
            });
            this.$axios({
                url:count_url,
                method:"get",
                params:{id:14}
            }).then((res)=>{
                this.count.todo_num=res.data.data;
            });
            this.get_words();
        }
    }
</script>

<style scoped lang="scss">
    .banner{
        width: 100%;
        height: auto;
        padding-top: 80px;
        position: relative;
        z-index: 10;
        .words{
            @include font(31px,rgba(255,255,255,0.7));
            font-weight: bold;
            line-height: 46px;
            padding-top: 100px;
            padding-bottom: 100px;
            width: 50%;
            margin-left: 5%;
        }
        .search{
            width: 90%;
            margin-left: 5%;
            max-width: 800px;
            height: 50px;
            margin-bottom: 30px;
            @include input(19px,rgba(255,255,255,0.7),lighter);
            input{
                @include a;
                @include box-sizing();
                border: 1px solid rgba(255,255,255,0.45);
                background: rgba(0,0,0,0.42);
                padding-left: 10px;
                @include font(19px,rgba(255,255,255,0.7));
                font-weight: lighter;
                line-height: 50px;
                @include transition(0.5s);
                &:focus{
                    border-color: $color!important;
                    background: rgba(0,0,0,0.6);
                }
            }
        }
        .count{
            width: 90%;
            padding-top: 25px;
            padding-bottom: 25px;
            margin-left: 5%;
            border-top: 1px solid rgba(255,255,255,0.3);
            border-bottom: 1px solid rgba(255,255,255,0.3);
            @include clear;
            li{
                float: left;
                height: 100%;
                padding-right: 140px;
                border-right:1px solid rgba(255,255,255,0.3);
                &:last-child{
                    border-right: none;
                    padding-left: 20px;
                }
                .title{
                    @include font(21px,rgba(255,255,255,0.6));
                    font-weight: lighter;
                    padding-top: 5px;
                    height: 24px;
                }
                .num{
                    @include font(34px,rgba(255,255,255,0.7));
                    height: 40px;
                    font-weight: bold;
                }
            }
        }
    }

</style>