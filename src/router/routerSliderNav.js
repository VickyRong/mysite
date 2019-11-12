
const navConfig = [
    {
      path:'/home',
      title:'首页',
      iconName:'home'
    },
    { 
      path: '/blog',
      title: '文章',
      iconName:'book',
      children:[
        {
          path:'/article/daily',
          title:'好文日日读'
        },
        {
          path:'/article/translate',
          title:'翻译专栏'
        },
      ]
    },
    { 
      path: '/system',
      title: '知识体系',
      iconName:'cluster',
      children:[
          {
            path:'/system/js',
            title:'Js基础'
          },
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
      path: '/solution',
      title: '解决方案',
      iconName:'code',
    }
];

export default navConfig;
