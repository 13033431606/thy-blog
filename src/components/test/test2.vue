<template>
    <div class="test">test2</div>
</template>

<script>
    export default {
        name: "test2"
    }
</script>

<style scoped lang="scss">
    .test{
        width: 100%;
        height: 600px;
        background: $color2;
        text-align: center;
        line-height: 600px;
        @include font(24px,#fff);
        font-weight: bold;
    }

</style>