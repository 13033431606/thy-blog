<template>
    <div id="app">
        <header_nav></header_nav>
        <background></background>
        <load_mask></load_mask>

        <transition name="fade_y" mode="out-in">
            <keep-alive include="article_list">
                <router-view></router-view>
            </keep-alive>

        </transition>
    </div>
</template>
<script>
    import header_nav from "./components/public/header_nav.vue";
    import background from "./components/public/background.vue";
    import load_mask from "./components/public/load_mask.vue";
    export default {
        name: "app",
        components: {
            header_nav,background,load_mask
        }
    }
</script>


