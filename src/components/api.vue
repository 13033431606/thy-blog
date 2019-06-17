<script>
    const base_url= "http://thy-cms.tt";//目标域名

    const uploads_url= base_url+"/public/uploads";//资源目录

    const get_category= base_url+"/public/api/category";//获单个过多个分类下的文章{id:id}

    const get_article= base_url+"/public/api/article";//获取单个或多个指定id文章{id:id}

    const get_count= base_url+"/public/api/count";//获单个过多个分类下的文章的数量{id:id}

    const get_type= base_url+"/public/api/getType";//获取分类对应的id和名称

    const article_search= base_url+"/public/api/article_search";//获取搜索的内容{keywords:keywords}

    const get_words= base_url+"/public/api/words";//获取每日毒鸡汤文{time:time}2019-9-9

    //第三方
    const get_news = "http://meiriyikan.cn/api/json.php";//新闻api

    const get_poetry = "https://api.apiopen.top/recommendPoetry";//诗句api

    export default {
        get_category,get_article,get_count,get_words,uploads_url,get_type,get_news,get_poetry,article_search
    }
</script>
