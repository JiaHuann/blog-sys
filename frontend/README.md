# 开发依赖
- redux 状态管理
- react-redux 通过dispatch映射redux
- react-router-dom 路由
- prop-types 类型检查

# 环境依赖
- serve 用于react的静态服务
# 前端组件树架构
- components 公共组件
- constants 存放常量
- request 处理网络请求
- store (redux状态管理)
  - reducers(按模块分不同reducer处理)
  - store
- app.js 根组件
- index.js 入口文件

# 前端性能优化
- React lazy + import 动态加载
- Suspense 组件处理：异步加载资源，页面显示读条
# Q&A
**1.React-router-dom中的BrowserRouter, Route, Switch是什么**

> !!! 2023.1.5 change ，用<kbd>v6</kbd>了，switch变为Routes，Route的component变为element，两者不兼容，注意。

<kbd>BrowserRouter</kbd> 是一个路由组件，它可以使用HTML5的history API管理浏览器的地址栏。

<kbd>Route</kbd>组件允许你在应用中声明特定路径和组件之间的关系。当用户访问特定路径时，Route组件会渲染相应的组件。

<kbd>Switch</kbd>组件可以将多个路由包装在一起，只渲染匹配的第一个路由。这对于只希望渲染一个路由的情况非常有用，因为它会阻止其他路由被渲染。

```html
<BrowserRouter>
  <Switch>
    <Route path="/home" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
  </Switch>
</BrowserRouter>
```

test
