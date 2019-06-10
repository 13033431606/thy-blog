<script>
    const base_url="http://thy-cms.tt";
    const get_category= base_url+"/public/api/category";//获单个过多个分类下的文章{id:id}
    const get_article= base_url+"/public/api/article";//获取单个或多个指定id文章{id:id}
    const get_count= base_url+"/public/api/count";//获单个过多个分类下的文章的数量{id:id}
    const get_words= base_url+"/public/api/words";//获取每日毒鸡汤文{time:time}2019-9-9
    export default {
        get_category,get_article,get_count,get_words
    }
</script>
