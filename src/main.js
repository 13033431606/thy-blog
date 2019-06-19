import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./app.vue";
import axios from 'axios';
import './assets/css/reset.css';

//饿了么ui
import {
    Pagination,
    Select,
    Option,
    OptionGroup,
    Cascader
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/element.scss'
Vue.use(Pagination);
Vue.use(Select);
Vue.use(Option);
Vue.use(OptionGroup);
Vue.use(Cascader);


Vue.prototype.$axios=axios;


Vue.use(VueRouter);

import index from "./components/index/index.vue";
import article_info from "./components/article/article_info.vue";
import article_index from "./components/article/article_index.vue";

const router = new VueRouter({
    routes: [
        {name: "default",path: "",redirect: {name: "index"}},
        {name: "index",path: "/index",component: index,meta:{title:"index"}},
        {name: "article",path: "/article", component: article_index,meta:{title: "article"}},
        {name: "article_info",path: "/article_info/:id",component: article_info,meta:{title:"article"}}
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;

        } else {
            return;
        }
    },
});



const thy=new Vue({
    el:"#app",
    data(){
        return{
            mask:"mask_on",
            delay:200
        }
    },
    router: router,
    render:h=>h(App)
})
