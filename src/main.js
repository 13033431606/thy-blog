import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./app.vue";
import axios from 'axios';

Vue.prototype.$axios=axios;


Vue.use(VueRouter);
import index from "./components/index/index.vue";
import article_info from "./components/article/article_info.vue";
import article_list from "./components/article/article_list.vue";


const router = new VueRouter({
    routes: [
        {name: "default",path: "",redirect: {name: "index"}},
        {name: "index",path: "/index",component: index,meta:{title:"index"}},
        {name: "article",path: "/article", component: article_list,meta:{title:"article"}},
        {name:"article_info",path: "/article_info/:id",component: article_info,meta:{title:"article"}}
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
