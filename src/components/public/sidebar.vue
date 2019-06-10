<template>
    <div class="sidebar">
        <div class="articles"></div>
        <div class="articles"></div>
    </div>
</template>

<script>
    export default {
        name: "sidebar"
    }
</script>

<style scoped lang="scss">
    .sidebar{
        width: 32%;
        float: right;
        .articles{
            width: 100%;
            height: 100px;
            background: rgba(0,0,0,0.3);
            margin-bottom: 20px;
            border-radius: 3px;
        }
    }
</style>