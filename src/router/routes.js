import Wechat from "../pages/system/wechat/Wechat";
import Browser from "../pages/system/browser/Browser";
import System from "../pages/system/index/SystemIndex";
import Frame from "../pages/system/frame/Frame"
import Article from "../pages/article/index/ArticleIndex"
import Daily from "../pages/article/daily/Daily";

const routerConfig = [
    {
      path: '/system', 
      component: System,
      routes:[
        { path: '/system/wechat', component: Wechat },
        { path: '/system/browser', component: Browser},
        { path: '/system/frame', component: Frame },
      ]
    },
    {
      path: '/article', 
      component: Article,
      routes:[
        { path: '/article/daily', component: Daily },
      ]
    },
];

export default routerConfig;
