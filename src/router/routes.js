import System from "../pages/system/index/SystemIndex";
import JS from "../pages/system/js/JS";
import Article from "../pages/article/index/ArticleIndex"
import Daily from "../pages/article/daily/Daily";
import Wechat from "../pages/system/wechat/Wechat";
import Home from "../pages/home/Home";


const routerConfig = [
    {
      path: '/home', 
      component: Home,
    },  
    {
      path: '/system', 
      component: System,
      routes:[
        { path: '/system/js', component: JS },
      ]
    },
    {
      path: '/article', 
      component: Article,
      routes:[
        { path: '/article/daily', component: Daily },
      ]
    },
    {
      path: '/solution', 
      component: Wechat,
    },
];

export default routerConfig;
