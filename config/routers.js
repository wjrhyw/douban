module.exports = [
      {
        path: "/douban",  
        component: "Douban_index", 
        authorized: true,  
        models: [  
         
        ],
      },
      {
        path:'/douban/login',
        component:'Login',
        authorized:true,
        models:[
          'indexLogin'
        ]
      },
      {
        path:"/wjr/test",
        component:'WjrTest',
        authorized:true,
        models:[
          'wjrtest'
        ]
      },
      {
        path:'/douban/reade',
        component:'Reade',
        authorized:true,
        models:[
          'reade'
        ]
      },
      // {
      //   path:'/wjr/nav',
      //   component:'Nav',
      //   authorized:true
      // }
];
