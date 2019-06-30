import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    state:{
        isShow:true,
        items:[
            {
                name:"张三",
                num:"1"
            },
            {
                name:"李四",
                num:"2"
            },
            {
                name:"王五",
                num:"3"
            }
        ]
    },
    getters:{
        numChange(state){
            return state.items.forEach(item=>{
                item.num+=100
            })
        }
    },
    mutations:{
        //定义一个函数动态修改state的状态值
        numTurn(state){ //这里的state代表上面的State
            state.items.forEach(item=>{
                item.num+=100
            })
        }
    }
})