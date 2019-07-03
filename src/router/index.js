import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const default_router= [
    {name: "default",path: "",redirect: {name: "article"}},
    {name: "index",path: "/index",component: () => import("@/components/index/index.vue"),meta:{title:"index"}},
    {name: "article",path: "/article", component: () => import("@/components/article/article_index.vue"),meta:{title: "article"}},
    {name: "article_info",path: "/article_info/:id",component: () => import("@/components/article/article_info.vue"),meta:{title:"article"}}
]

const router=new Router({
    routes: default_router
});

export default router;
