### react-template
`react-template` 是一个基于React的前端模板，提供了一些常用的项目配置，希望帮助开发人员快速搭建高质量的Web应用。

### 模板做了哪些事

#### 模板提供的功能
  + **craco** 配置，在不eject webpack的前提下，可以修改项目的配置
  + 引入**antd**，可以使用ant design提供的组件
  + 引入**px2rem**，基于设计图1920 X 1280，适配大屏相关的项目
  + 引入 **mitt**, 任意组件之间可以进行事件的订阅和发布
  + 引入 **@reduxjs/toolkit**，简化redux的使用
  + 引入 **redux-persist**, 数据持久化
  + 引入 **cesium**，用于做3D地图相关的项目
    
#### 模板如何使用
   1.下载模板，运行`yarn` 安装所需包
   
   2.运行`yarn start`
   
   3.浏览器会打开一个窗口,项目运行地址默认为 http://localhost:8080/
   
   4.下面的视频为模板，其中student的数据为持久化数据，在页面刷新后依旧不变
    [模板预览](https://github.com/dtd-wuhan/react-template/assets/22269482/d04cba12-f8bc-4f3b-996a-82f7c53e523d)

#### 模板的目录及其说明如下

```js 
├─.env.development                             // 本地开发环境配置，定义的变量需要以 REACT_APP_ 开头
├─.gitignore                                   // git 忽略配置
├─craco.config.js                              // craco配置文件，项目主要配置文件，可以从中覆盖webpack等的配置
├─package.json                                 // 项目主要的依赖安装包及其版本以及命令，项目描述版本等
├─README.md                                    // 自述文件
├─yarn.lock                                    // yarn安装包后，借此锁定包的版本以及包所依赖的包
├─src                                          // 开发主要工作目录
|  ├─index.css                                 // 定义的全局样式
|  ├─index.js                                  // 项目入口文件  
|  ├─setupTests.js                             // 前端配置代理
|  ├─utils                                     // 存放通用方法函数  
|  |   ├─eventBus.js                           // 实例化mitt，可以全局订阅发布   
|  |   ├─index.js                               
|  |   └tools.js                               
|  ├─theme                                     // 项目主题，主要定义antd中的颜色变量 
|  |   ├─green-theme.js
|  |   └purple-theme.js
|  ├─store                                     // store配置
|  |   └index.js
|  ├─selectors                                 // 定义方法，从state中获取所需数据
|  |     └index.js
|  ├─router                                    // 路由配置文件
|  |   └index.js
|  ├─request                                   
|  |    ├─api.js                               // 存放http api请求，建议按照功能存放   
|  |    └index.js                              // 封装axios，可以进行request和response的拦截，比如请求头加token或者统一错误处理
|  ├─reducers                                  // 定义reducer，包括同步异步，state初始化，定义action都在一个文件中 
|  |    ├─asyncReducer.js
|  |    ├─index.js
|  |    ├─modalReducer.js
|  |    └studentReducer.js
|  ├─pages                                     // 页面组件，和路由相关的功能                               
|  |   ├─App.js                                // 入口文件，修改主题，页面基础布局
|  |   ├─Header.js
|  |   ├─Normal
|  |   |   ├─index.js
|  |   |   └index.module.less                  // 只作用于当前页面的样式
|  |   ├─Map
|  |   |  ├─index.js
|  |   |  └index.module.less
|  |   ├─Async
|  |   |   ├─index.js
|  |   |   └index.module.less
|  ├─const                                     // 存放常量，不建议组件中定义常量
|  |   ├─const.common.js
|  |   ├─index.js
|  |   └modal.const.js
|  ├─component                                 // 存放公共组件
|  |     ├─Modals                              // 模态文件夹
|  |     |   ├─add.js
|  |     |   ├─edit.js
|  |     |   └index.js                         // 模态组件入口，通过类型判断，统一管理
├─public                                       // 执行yarn build时，public文件夹中的内容默认会复制到dist中
|   ├─config.js                                // 定义生产环境的地址,本地环境和生产环境都会生效的配置文件，
|   ├─favicon.ico
|   ├─index.html
|   └setRem.js                                 // 监听窗口大小并动态设置html根元素的font-size
```
