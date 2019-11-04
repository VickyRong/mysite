import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Wechat from "../pages/system/wechat/Wechat";
import Browser from "../pages/system/browser/Browser";
import Daily from "../pages/article/daily/Daily";
import System from "../pages/system/index/SystemIndex";
import Frame from "../pages/system/frame/Frame"

const routerConfig = [
    { 
      path: '/blog',
      component: Blog,
    },
    { 
      path: '/about',
      component: About
    },
    {
      path: '/system', 
      component: System,
      routes:[
        { path: '/system/wechat', component: Wechat },
        { path: '/system/browser', component: Browser},
        { path: '/system/frame', component: Frame },
      ]
    },
    { path: '/article/daily', component: Daily },
];

export default routerConfig;
