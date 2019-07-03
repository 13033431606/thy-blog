import Vue from 'vue';
import App from "./app.vue";
import axios from 'axios';
import './assets/css/reset.css';
import router from "./router";

//饿了么ui
import {
    Pagination,
    Select,
    Option,
    OptionGroup,
    Cascader,
    Loading
} from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element.scss'
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Cascader);
Vue.use(Loading);


Vue.prototype.$axios=axios;

const thy=new Vue({
    el:"#app",
    data(){
        return{
            mask:"mask_on",
            delay:200
        }
    },
    router,
    render:h=>h(App)
})
