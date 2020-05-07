

# **技术栈**

* 后端： Express + Mongodb + jsonwebtoken等等

* 前端： Vue.JS + ElementUI + iViewUI + Axios等等

# **功能介绍**

**本项目分前台开发,后台开发和服务器开发**

- 用户听歌需要登录(路由守卫)
- 用户需要到管理员申请账号和密码
- 用户登录听歌(风格点歌,语种点歌,明星点歌,热门歌曲等等...)
- 剩余时长30分钟提醒,到时间自动下机
- 管理员对歌曲的增删改查
- 管理员给用户开户,可以选择上机的时间
- 管理员查看订单,删除订单,搜索订单
- 管理员收藏歌曲,推荐到ktv推荐歌曲
- 等等...

# **项目设计结构**

```
-- 服务器基本架构
ktv-select_music-system
├── README.md
├── index.js  -- 后台文件入口
├── test.http  -- 测试文件
├── api  -- 路由文件
│    ├── admin.js  -- 配置管理员的操作
|    ├── music.js  -- 配置歌曲信息
|    ├── user.js  -- 配置用户的相关操作
|    └── safecode.js  -- 配置安全码
├── config -- 配置
|    ├── Date.js  -- 配置日期格式化插件
|    ├── delNoUse.js  -- 封装闲置删除闲置资源方法
|    ├── http.js  -- 配置跨域
|    ├── isBadAccount.js  -- 封装账户是否合法
|    ├── newaccount.js  -- 封装随机开户方法
|    ├── passport.js  -- 验证token是否合法
|    ├── uploadImg.js  -- 封装上传图片方法
|    └── uploadMusic.js  -- 封装上传歌曲方法
├── ktv-admin  --后台管理系统界面
├── ktv-client  --前台用户点歌项目界面
├── dbModel
|    └── **  -- Mongodb数据库的一些模型
├── mongodb
|    └── mongodb.js  -- 配置Mongodb,链接数据库 
├── secret
|    ├── mongodbURI.js  -- Mongodb地址
|    └── jwtkey.js  -- token的私钥
├── static -- 资源存放处
|    ├── music  -- 歌曲上传目标文件夹 
|    ├── poster  -- 歌曲海报上传目标文件夹
└──  └── view  -- 配置404文件
```


```
-- 后台管理系统架构
ktv-admin
├── README.md
├── public 
|    ├── index.html  -- vue挂载页面
|    └── **  -- 你可以在这里链接少量静态资源
├── src  -- 开发文件夹
|    ├── App.vue  -- Vue挂载根页面
|    ├── main.js  -- Vue程序入口文件,挂载各种组件
|    ├── router.js  -- Vue路由配置文件
|    ├── store.js  -- Vuex的状态管理文件
|    ├── assets  -- 静态资源文件夹
|    ├── components  --公共组件
|    |      └── nav.vue  -- 后台导航栏
|    ├── plugins  --插件
|    |      ├── axios.js   -- 配置跨域,拦截器等等 
|    |      ├── Date.js   -- 格式化日期 
|    |      └── Date.js   -- 加载动画Loading
|    ├── stores  -- 状态管理文件夹
|    |      └── adminStore.js  -- 管理员状态 
|    ├── views  -- 页面文件夹
|    |      ├── 404.vue   -- 404页面
|    |      ├── adminlikes.vue   -- 管理员处理ktv收藏歌曲
|    |      ├── allorders.vue   -- 订单管理
|    |      ├── Home.vue   -- 后台根页面
|    |      ├── Index.vue   -- 后台首页
|    |      ├── managemusic.vue   -- 音乐管理
|    |      ├── user_service.vue   -- 给用户开户
|    |      └── login.vue   -- 后台登录
└── babel.config.js  -- babel配置
```


```

-- 前台用户听歌架构
ktv-client
├── README.md
├── public 
|    ├── index.html  -- vue挂载页面
|    └── **  -- 你可以在这里链接少量静态资源
├── src  -- 开发文件夹
|    ├── App.vue  -- Vue挂载根页面
|    ├── main.js  -- Vue程序入口文件,挂载各种组件
|    ├── router.js  -- Vue路由配置文件
|    ├── store.js  -- Vuex的状态管理文件
|    ├── assets  -- 静态资源文件夹
|    ├── components  --公共组件
|    |      ├── bottomNav.vue  -- 底部音乐控制区域
|    |      └── topNav.vue  -- 顶部信息区域
|    ├── config  --配置
|    |      ├── addSong.js    --封装选取歌曲方法
|    |      ├── isBadAccount.js    --验证账户合法性
|    |      ├── isLogin.js    --是否登录
|    |      ├── nextSong.js    --封装下一首歌曲方法
|    |      └── prevSong.js    --封装上一首歌曲方法
|    ├── plugins  --插件
|    |      ├── axios.js   -- 配置跨域,拦截器等等 
|    |      └── wsmLoading.js   -- 加载动画Loading
|    ├── stores  -- 状态管理文件夹
|    |      └── song.js  -- 存储歌曲信息 
|    ├── views  -- 页面文件夹
|    |      ├── 404.vue   -- 404页面
|    |      ├── abc.vue   -- 拼音点歌
|    |      ├── artist.vue   -- 明星点歌
|    |      ├── Home.vue   -- 后台根页面
|    |      ├── Index.vue   -- 后台首页
|    |      ├── hot.vue   -- 热播歌曲
|    |      ├── ktvlikes.vue   -- ktv推荐歌曲
|    |      ├── selected.vue   -- 已选歌曲
|    |      ├── style.vue   -- 风格点歌
|    |      └── language.vue   -- 语种点歌
├── babel.config.js  -- babel配置
└── vue.config.js  -- vue配置
```

