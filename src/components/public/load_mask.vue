<template>
    <div class="mask" :class="this.$root.mask">
        <div class="mask_inner"></div>
    </div>
</template>

<script>
    export default {
        name: "load_mask",
    }
</script>

<style scoped lang="scss">
    .mask{
        width: 100vw;
        height: 100vh;
        background: #000;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 90;
        @include transition(0.8s);
        .mask_inner{
            @include a;
            background: $color;
            @include transition(0.8s);
            transition-delay: 0.2s;
        }
    }
    .mask_off{
        @include Y(-100%);
        transition-delay: 0.2s;
        .mask_inner{
            @include Y(-100%);
            opacity: 0;
            transition-delay: 0s;
        }
    }
</style>