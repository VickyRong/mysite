
const navConfig = [
    { 
      path: '/blog',
      title: '文章',
      iconName:'book',
      children:[
        {
          path:'/article/daily',
          title:'好文日日读'
        },
      ]
    },
    { 
      path: '/system',
      title: '知识体系',
      iconName:'cluster',
      children:[
        {
          path:'/system/frame',
          title:'框架学习'
        },
        {
          path:'/system/wechat',
          title:'微信开发'
        },
        {
          path:'/system/browser',
          title:'浏览器相关'
        },
      ]
    },
    { 
      path: '/',
      title: '解决方案',
      iconName:'code',
      children:[
        {
          path:'/',
          title:'Css相关'
        },
        {
          path:'/',
          title:'Js相关'
        },
        {
          path:'/',
          title:'兼容性相关'
        },
      ]
    },
];

export default navConfig;
