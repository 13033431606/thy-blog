<script>
    const base_url= "http://cms.thy-blog.com/public";//目标域名

    //public
    const temp_path= base_url+ "/uploads/temp/";//缓存路径
    const formal_path= base_url+ "/uploads/";//正式路径

    //aritlce
    const article_index= base_url+ "/article/index";//id, page, num
    const get_single_article= base_url+ "/article/get_single_article";//id

    const article_search= base_url+"/api/article_search";//获取搜索的内容{keywords:keywords}

    const todo_count= base_url+"/api/todo_count";
    const article_count= base_url+"/api/article_count";

    //category
    const get_single_category= base_url+ "/category/get_single_category";//id

    //todo_list
    const todo_index= base_url+ "/todolist/index";
    const todo_add= base_url+ "/todolist/add";//title,state,user_id
    const todo_edit= base_url+ "/todolist/edit";//id,type,title


    //base
    const type_tree= base_url+ "/base/type_tree";//获取树状结构 id

    //第三方
    const get_words= base_url+"/public/api/words";//获取每日毒鸡汤文{time:time}2019-9-9

    //第三方
    const get_news = "http://meiriyikan.cn/api/json.php";//新闻api
    const get_poetry = "https://api.apiopen.top/recommendPoetry";//诗句api


    export default {
        //public
        temp_path,formal_path,
        //article部分
        article_index,get_single_article,article_search,article_count,todo_count,
        //category
        get_single_category,
        //base部分
        type_tree,
        //第三方
        get_news
    }
</script>

