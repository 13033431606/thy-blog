<template>
    <div class="test">test3</div>
</template>

<script>
    export default {
        name: "test3"
    }
</script>

<style scoped lang="scss">
    .test{
        width: 100%;
        height: 600px;
        background: darkmagenta;
        text-align: center;
        line-height: 600px;
        @include font(24px,#fff);
        font-weight: bold;
    }

</style>