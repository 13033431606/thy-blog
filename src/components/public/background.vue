<template>
    <div class="bac"></div>
</template>

<script>
    export default {
        name: "background"
    }
</script>

<style scoped lang="scss">
    .bac{
        width: 100vw;
        height: 100vh;
        background: url("../../assets/img/banner3.jpg") no-repeat center;
        background-size: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        &:before{
             content: '';
            @include a;
             position: absolute;
             top: 0;
             left: 0;
             background: rgba(0,0,0,0.3);
         }
    }
</style>