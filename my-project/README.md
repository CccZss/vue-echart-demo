# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```



# 安装依赖

1. vuex

   ```
    cnpm install vuex --save
   ```

2. echarts

   ```
    cnpm install echarts --save
   ```

3. axios  (发 http 请求用的js库)

   ```
    cnpm install axios --save
   ```

4.  bable-ployfill  

   >  让浏览器支持es6语法的库，实际开发需要使用，为了简单讲，这里先不用

   ```
   npm install bable-ployfill --save
   ```



# 引入工具函数

1. 命名空间函数

   > 配合 vuex 使用，不用也行，但是用比较好

   ```
   src/utils/namespace.js
   ```

2. axios 自定义配置

   > 配合 vuex 使用，用于向后台 HTTP 请求

   ```
   src/utils/interaction.js
   ```

   ​

# 注意点

1. vuex 需要在 main.js 里引入

   ```
   import store from './store'

   new Vue({
     el: '#app',
     store,    //  这里引入
     router,
     template: '<App/>',
     components: { App }
   })

   ```