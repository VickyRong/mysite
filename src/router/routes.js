import Home from "../pages/home/Home";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Wechat from "../pages/system/wechat/Wechat";
import Browser from "../pages/system/browser/Browser";
import Daily from "../pages/article/daily/Daily"

const routerConfig = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/blog",
    component: Blog
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/article/daily",
    component: Daily
  },
  {
    path:"/system",
    component:Wechat,
    routes:[
      {
        path:"/wechat",
        component:Wechat,
      },
      {
        path:"/browser",
        component:Browser,
      }
    ],
  }
];

export default routerConfig;
