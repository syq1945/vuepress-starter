 
## 一 [npm 淘宝镜像的配置](https://www.cnblogs.com/kyshu/p/9453384.html)
 
淘宝 npm 地址： [http://npm.taobao.org/](http://npm.taobao.org/)
 
> 1. **_如何使用_**
> 有很多方法来配置npm的registry地址，下面根据不同情境列出几种比较常用的方法。以淘宝npm镜像举例：
 
### a. <a rel="noopener" name="t0"></a>1.临时使用
 
``` bash
npm --registry https://registry.npm.taobao.org install express
```
### b. <a rel="noopener" name="t1"></a>2.持久使用
 
``` bash
npm config set registry https://registry.npm.taobao.org
```
 
*   配置后可通过下面方式来验证是否成功
    **`npm config get registry`**
*   或
    **`npm info express`**
 
### c. <a rel="noopener" name="t2"></a>3.通过cnpm使用
 
``` bash
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
 
*   使用
    **`cnpm install express`**
    ## 还原默认的npm配置
 
    ``` bash    
    npm config set registry https://registry.npmjs.org
    ```
 
--+++++++++++++++++++++++++++++++++++++++++++++++++++++++--
 
## 2. 安装nodejs
    http://nodejs.cn/ 下载长期支持版本
    安装完成后, npm 就被默认安装了. 
 
### a. 查看版本号
    node -v   (v16.18.0 2022/11/16日的nodejs版本) 
    npm -v    (8.19.2   2022/11/16日的npm版本)
 
### b. 安装自动重启的 nodemon
``` bash 
npm install --global nodemon   (全局安装）
```
### c. 安装淘宝镜像 cnpm
``` bash  
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

### d. 查看版本
``` bash  
cnpm -v
```

### e. 以后下载任何的包: 把 xxx 模块下载到当前目录下
``` bash 
cnpm install xxx
```
### f. 简写:
``` bash 
cnpm i xxx
```

### g. 下载方式:
 
    cnpm i xxx -g     :全局安装
    cnpm i xxx -S     :局部, 生产环境 , 以后下载局部基本都用 -S
    cnpm i xxx -D     :局部, 开发环境
## 3. 初始化项目
 
### a. 生成 package.json 依赖文件
在想安装的目录下, cmd 进入dos
``` bash 
cnpm init       -生成 package.json,之后一路回车-
cnpm init -y     可以跳过向导, 快速生成package.json
```
安装包:
``` bash 
cnpm i mysql mssql http url cors express querystring fs     简写, 批量安装需要使用的包

npm update       根据项目,更新package.json依赖文件
npm version      查看安装所有模块的版本号
npm help         查看使用帮助
npm list         查看已经安装的包
npm install      安装依赖中的所有的包
```

卸载xxx包:
 
    npm uninstall xxx      (完整版)
    npm un xxx             (简写)
 
### b. 重建node_modules文件夹
根据package.json 来重新下载node_modules文件夹
 
    cnpm -install   可以根据 package.json 来下载对应的模块
    cnpm -i
 
## 4. 创建http server (05_server.js)
```js
/**
 * 通过nodejs的http模块搭建一个服务器
 */
 
const http = require('http');
const fs = require('fs');   //vs-code 中的快捷键是 req
const url = require('url');   //url可以收到form传来的GET数据,
const querystring = require('querystring'); //querystring可以收到form传来的POST数据,
 
//创建本地服务器来接收数据
const server =http.createServer();
 
//监听请求事件
//只要客户端浏览器访问本服务器地址, 就会返回data中的值(string object array)
server.on('request', (req, res) =>{
    // res.writeHead(200,{'Content-Type':'application/json'});
    //req.url 是用户发来的网址信息, 
    console.log('接收到客户端浏览器发送过来的请求!',req.url);
    let reqUrl=req.url;
    let queryObj=url.parse(reqUrl,true).query;
    let username=queryObj.username;
    let password=queryObj.password
 
    //乱码的问题
    
    // res.writeHead(200,{'Content-Type':'application/json'});  //响应给客户浏览器的是json数据
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});  //响应给客户浏览器的是html文本, 字符集是utf-8
 
    /**
     * node中的JavaScript具有文件操作的能力.
     * 在node中, 与文件系统的交互式非常重要的, 服务器的本质就是将本地的文件发送给远程的客户端.
     */
    
    if(reqUrl=='/favicon.ico'){
        return;
    }else if(reqUrl=='/login.html'){
        // res.write('<h1>登录页面</h1>') //模拟向客户端响应了一个页面
        //读取login.html文件, 然后响应给客户客户端 (这里引用文件要以./开头)
        fs.readFile('./login.html',function(err,data){
            
            res.end(data)
        });
    }else if(reqUrl=='/reg.html'){
        // res.write('<h1>注册页面</h1>')
        fs.readFile('./reg.html',function(err,data){
            res.end(data)
        });
    }else if(reqUrl.includes('/doLogin')){
        /**
         * 使用url模块来解析请求字符串路径
         * 第一个参数就是请求字符串
         * 第二参数如果为true,则表示query部分会以对象的方式返回.
         */
      
        let queryObj=url.parse(reqUrl,true).query
        res.end(`用户名为: ${queryObj.username},密码为: ${queryObj.password}`)
    }else{
        res.end('404')
    };
   
 
    // res.end(JSON.stringify({
    //     userName:"admin",
    //     userPwd:"123"
    // }));
});
 
server.listen(8000,function(){
    console.log('服务器启动了,网址为: http://localhost:8000/');
});
 
```
 
### a. 启动服务器  
在05_server.js 文件所在的文件夹下 cmd
``` bash 
nodemon 05_server.js
```
### b. 停止服务器      
    ctrl+C 停止服务
 
 
## 5. How To Connect SQL Server Database In NodeJS
 
  [ravisha virani](https://www.thecodehubs.com/author/ravishavirani/ "Posts by ravisha virani")  Nov 13, 2021  [0](https://www.thecodehubs.com/how-to-connect-sql-server-database-in-nodejs/#respond)  853
 
In this article, we will learn how to connect SQL with node and display data from SQL.
 
1\. First of all, create a project and add a **src** folder.
 
2\. Create a  **database/setting.js** file and add the below code there.
``` js
 const config = {
 
 user: 'abc', //sql user
 
 password: '12345', //sql password
 
 server: 'serverabc', //sql server name
 
 database: 'students', //database name
 
 options: {
 
 trustedConnection: true,
 
 trustServerCertificate: true,
 
 },
 
 port: 1433
 
 }
 
 module.exports = config;
```
 
3\. After create the setting.js file install mssql module to connect with SQL  server from node.js
 
``` bash
npm install mssql
```
 
4\. Create a **controller/studentController.js** file and add the below code.
``` js
 const config = require('../database/setting'); //include setting.js file
 
 var sql = require("mssql"); //add mssql module
 
 async function showStudentData(req, res) {
 
 try {
 
 let db = await sql.connect(config);
 
 let data = await db.request().query("select * from studentdata");
 
 res.status(200).json({
 
 success: true,
 
 data: data.recordsets[0]
 
 })
 
 } catch (error) {
 
 res.status(500).json({
 
 success: false,
 
 message: "error : data not show"
 
 });
 
 }
 
 }
 
 module.exports = {
 
 showStudentData
 
 };
```
–In showStudentData function :
 
*   **sql.connect** method use for connecting to the database.
*   after a successful connection execute the query. In this .**query**  we are passing a sql query.
*   it returns data from the studentdata table.
 
5\. Create  **routes**/**router.js** file.
 
–install **npm i express** module.
``` js
 const express = require("express");
 
 const route = express.Router(); //import router
 
 const studentController =require('../controller/studentController'); //import studentController file
 
 route.get('/student/show', studentController.showStudentData) //create get request
 
 module.exports = route;
```
–In this file, we have created  a router
 
6\. In the root directory add an **app.js** file for creating a API.
 
–install **npm install cors**
``` js
 const express = require('express')
 
 const url = require('./src/routes/router')
 
 const app = express()
 
 const cors = require('cors');
 
 app.use(express.json());
 
 app.use(cors());
 
 app.use(url)
 
 const port = 3000 //project running on 3000
 
 app.listen(port, () => console.log(`server running in port ${port}`))
```
–Test the API
 
http://localhost:3000/student/show
 
**output:**
 
![](https://www.thecodehubs.com//wp-content/uploads/2021/10/SQL-With-NodeJs.jpg)