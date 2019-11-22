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
      }
];
