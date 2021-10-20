# vue3-admin-ts

**中文** | [English](./README.md)



> 这是一个基础的 vue3 admin 管理后台。它只包含了 Element-Plus UI & axios & svg-icon& permission control & lint，这些搭建后台必要的东西。


本架构使用的技术为：vue3(setup-script)+vite2+element-plus 的新一代的前端框架，It's fast!

使用 eslint+prettier+gitHooks 格式和校验代码,提高代码规范性和开发效率

## 更新日志

```javascript
//10-08
add error log collection func
//10-14
add permission of role and code
```



## 线上体验

[github address](https://github.com/jzfai/vue3-admin-ts.git)

[Access address](http://8.135.1.141/vue3-admin-ts)

github 地址：  https://github.com/jzfai/vue3-admin-ts.git

国内体验地址：http://8.135.1.141/vue3-admin-ts


## 例子

 ---- 我们先看看加载速度和构建后的包大小：

![template-speed-analysis](http://8.135.1.141/file/images/template-speed-analysis.png)

![template-demo](http://8.135.1.141/file/images/template-demo.png)

## 相关项目

框架有js，ts和plus版本

- js版本：[vue3-element-admin](https://github.com/jzfai/vue3-admin-template.git)
- ts版本：[vue3-element-ts](https://github.com/jzfai/vue3-admin-ts.git)
- js实例参考plus版本：[vue3-element-plus](https://github.com/jzfai/vue3-admin-plus.git)
- react版本： [react-admin-template](https://github.com/jzfai/react-admin-template.git)
- java微服务后台数据：[micro-service-plus](https://github.com/jzfai/micro-service-plus)

> 开发和使用感受：两个字 真香！！！！！


## 文档
-- 文档努力开发中。。。。

可以先参考(和vue-admin-template使用类似)：[vue-admin-template使用文档](https://juejin.im/post/59097cd7a22b9d0065fb61d2)



#### 和 vue-admin-template 的区别

1.布局方式全部采用 flex 代替以前的 float，float 布局方式全部移除,优化了部分布局方式

2.采用 vue3(setup-script)书写，用 vite2 替换 webpack，加入了 vue3 的 jsx 写法，vite2速度更快,使用vue3 的 composition 代替 vue2 option api 写法，更易维护和迁移

3.简化了部分复杂的逻辑，优化了架构部分设计方式



vue3和vue2在性能上的对比

- 打包大小减少41%

- 初次渲染快55%, 更新渲染快133%

- 内存减少54%

- **使用Proxy代替defineProperty实现数据响应式**

- **重写虚拟DOM的实现和Tree-Shaking**

[vite2和webpack打包速度上的对比](https://github.com/jzfai/vue3-admin-template/issues/2)

## 构建步骤

```bash
# 克隆项目
git clone https://github.com/jzfai/vue3-admin-ts.git

# 进入项目目录
cd  vue3-admin-ts

# 安装依赖(建议用yarn)
yarn

# 启动服务
yarn run dev
```

浏览器访问 http://localhost:5001


## 发布

```bash
# 构建测试环境
yarn run build-serve

# 构建生产环境
yarn run build
```

## 其它

```bash
# 预览发布环境效果
yarn run preview:build-serve

# 预览生产环境
yarn run preview

# 代码格式检查并自动修复
yarn run lint
```

## 功能

```
- 登录 / 注销

- 权限验证
  - 页面权限
  - 指令权限
  - 权限配置
  - 二步登录

- 多环境发布
  - serve
  - build
  - priview
  - lint

- 全局功能
  #- 国际化多语言
  #- 多种动态换肤
  - 动态侧边栏（支持多级路由嵌套）
  - 动态面包屑
  - 快捷导航(标签页)
  - Svg Sprite 图标
  - 本地/后端 mock 数据
  #- Screenfull全屏
  - 自适应收缩侧边栏

- 编辑器
  - 富文本
  - Markdown
  #- JSON 等多格式

#- Excel
  #- 导出excel
  #- 导入excel
  #- 前端可视化excel
  #- 导出zip

- 表格
  - 动态表格
  #- 拖拽表格
  #- 内联编辑

- 错误页面
  - 401
  - 404

- 組件
  - 头像上传
  - 返回顶部
  #- 拖拽Dialog
  #- 拖拽Select
  #- 拖拽看板
  #- 列表拖拽
  #- SplitPane
  #- Dropzone
  #- Sticky
  #- CountTo

- 综合实例
- 错误日志
- Dashboard
#- 引导页
- ECharts 图表
#- Clipboard(剪贴复制)
#- Markdown2html
```

>注：#---暂未实现(希望大家能一起开发)

## 额外

架构开发不易，如果感觉好，请给我点个赞憋，架构还在不断完善中，欢迎加入我开发，一起成为Contributors ！！！！

## 浏览器支持

注意：vue3不在支持IE浏览器
Modern browsers and Internet Explorer 11+.

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- |
|Edge| last 2 versions| last 2 versions| last 2 versions

## 讨论和交流(含vue3+ts视频教程)
[WeChat group](http://8.135.1.141/file/images/wx-groud.png)

## 版本

[MIT](https://github.com/jzfai/vue3-admin-ts/blob/master/LICENSE) license.

Copyright (c) 2021-present  kuanghua



