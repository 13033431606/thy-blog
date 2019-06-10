import Vue from 'vue';
import VueRouter from 'vue-router';
import App from "./app.vue";
import axios from 'axios';



Vue.prototype.$axios=axios;



Vue.use(VueRouter);
import index from "./components/index/index.vue";
import article_info from "./components/article/article_info.vue";



const router = new VueRouter({
    routes: [
        {name: "default",path: "",redirect: {name: "index"}},
        {name: "index",path: "/index",component: index,children:[
                {name: "article_info",path: "article_info/:id",component: article_info},
            ]
        },
    ]
});

new Vue({
    el:"#app",
    router: router,
    render:h=>h(App)
})

