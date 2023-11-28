## 收藏夹web项目
开篇介绍+mysql安装+navicat+数据表设计及创建+4个基本sql语句(增删改查)
::: tip 感谢作者的无私奉献!!
来源: [https://www.bilibili.com/video/BV1sJ411579s/?spm_id_from=333.788&vd_source=ef5fc108b5b32279c7f17880821a6c56](https://www.bilibili.com/video/BV1sJ411579s/?spm_id_from=333.788&vd_source=ef5fc108b5b32279c7f17880821a6c56)<br>
相关链接：
项目文档：[https://cnxfs.com.cn/download/myfavorite.docx](https://cnxfs.com.cn/download/myfavorite.docx)<br>
数据库：[https://cnxfs.com.cn/download/myfavorite.sql](https://cnxfs.com.cn/download/myfavorite.sql)<br>
mysql下载：[https://dev.mysql.com/downloads/](https://dev.mysql.com/downloads/)<br>
navicat下载：[https://www.navicat.com.cn/](https://www.navicat.com.cn/)<br>
完整项目[https://github.com/xiangfangsong/myFavorite](https://github.com/xiangfangsong/myFavorite)<br>
备用地址[https://gitee.com/xiangfangsong/myFavorite](https://gitee.com/xiangfangsong/myFavorite)<br>
:::
 
### myfavorite.sql文件
```js
/*
 Navicat Premium Data Transfer
 
 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80018
 Source Host           : localhost:3306
 Source Schema         : myfavorite
 
 Target Server Type    : MySQL
 Target Server Version : 80018
 File Encoding         : 65001
 
 Date: 07/01/2020 22:56:53
*/
 
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
 
-- ----------------------------
-- Table structure for favorite
-- ----------------------------
CREATE DATABASE myfavorite
  DEFAULT CHARACTER SET = 'utf8mb4';
USE myfavorite
 
DROP TABLE IF EXISTS `favorite`;
CREATE TABLE `favorite`  (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `wname` VARCHAR(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `wurl` VARCHAR(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `uid` INT(11) NOT NULL,
  `type` TINYINT(255) NULL DEFAULT 1,
  `count` INT(11) NULL DEFAULT 0,
  `ctime` DATETIME(0) NULL DEFAULTCURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT =DYNAMIC;
 
-- ----------------------------
-- Records of favorite
-- ----------------------------
INSERT INTO `favorite` VALUES (2, 'baidu', 'http://www.baidu.com', 2, 0, 2, '2020-01-07 13:17:44');
INSERT INTO `favorite` VALUES (3, 'google', 'http://www.google.com', 1, 0, 10, '2020-01-07 18:35:28');
INSERT INTO `favorite` VALUES (4, '浙江工商大学', 'http://www.zjgsu.edu.cn', 2, 1, 0, '2020-01-07 19:38:51');
INSERT INTO `favorite` VALUES (5, 'youtube', 'http://www.youtube.com', 2, 0, 3, '2020-01-07 19:40:02');
INSERT INTO `favorite` VALUES (6, '浙江工商大学', 'http://www.zjgsu.edu.cn', 1, 1, 2, '2020-01-07 20:02:34');
 
-- ----------------------------
-- Table structure for login
-- ----------------------------
DROP TABLE IF EXISTS `login`;
CREATE TABLE `login`  (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `password` VARCHAR(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `role` TINYINT(255) NULL DEFAULT 0,
  `ctime` DATETIME(0) NULL DEFAULTCURRENT_TIMESTAMP(0),
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = INNODB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT =DYNAMIC;
 
-- ----------------------------
-- Records of login
-- ----------------------------
INSERT INTO `login` VALUES (1, 'admin', '202cb962ac59075b964b07152d234b70', 1, '2020-01-07 11:22:09');
INSERT INTO `login` VALUES (2, 'user', 'e10adc3949ba59abbe56e057f20f883e', 0, '2020-01-07 12:54:54');
 
SET FOREIGN_KEY_CHECKS = 1;
```
 
### SQL语句示例:
```js
SELECT * FROM login;
DELETE FROM login WHERE id=3;
INSERT INTO login(username, PASSWORD,ROLE) VALUES('tsu','123',1)
UPDATE login SET PASSWORD='123' WHERE id=4
```
# 项目说明
 
## 我的收藏项目设计
### 目标：
制作一个支持多用户的网址收藏系统。该系统可以在数据库中保存用户喜欢的网站，可以统计打开网站的次数，还可以对收藏的记录进行权限设置以区分公开和私有，能够对收藏记录进行管理(增删改查)，也能够对用户进行管理。
 
### 数据库设计
登录表login：
|字段名 |  类型 |  用途  | 备注 |
|---|---|---|---|
|id |int  |主键 |自动编号
|username |varchar(100) |用户名  
|password |varchar(100) |密码 |MD5加密
|role |tinyint  |角色 |0普通用户1管理员，默认0
|ctime  |datetime |记录创建时间 数据库时间
 
收藏内容favorite：
|字段名  |类型 |用途 |备注|
|---|---|---|---|
|id |int  |主键 |自动编号|
|wname| varchar(50) |网站名称 |  |
|wurl|  varchar(255)| 网站地址  |  |
|uid  |int  |记录添加人员|  对应login表的id|
|type|  tinyint|  收藏记录类型| 0公开1私有，默认1|
|count| int |点击次数|  记录该链接被点击的次数，用于排序|  
|ctime| datetime| 记录创建时间| 数据库时间|
 
### 后端接口
**对数据库进行增删改查操作** <br>
 
::: tip 登录表login：
> **`list()`**：用于列出全部的用户信息给管理员； <br>
> **`add(username, password, role)`**：用于注册新用户时添加记录，成功返回1，失败-1；<br>
> **`login(username, password)`**：用于登录时验证用户名是否存在，登录成功返回{id, username, role, ctime}，失败返回{}；<br>
> **`update(id, password)`**：用于修改用户密码，成功返回1，失败返回-1；<br>
> **`update_role(id, role)`**：用于修改用户角色，成功返回1，失败返回-1；<br>
> **`del(id)`**：用于删除用户，成功返回1，失败返回-1；<br>
:::
 
::: tip 收藏内容favorite：
> **`list(uid)`**：查询收藏内容，uid=0时返回全部type=0的记录，uid≠0时，返回指定uid添加的收藏记录以及全部type=0的记录。结果用count字段进行降序排序；<br>
> **`add(wname, wurl, uid, type)`**：添加收藏记录，成功返回1，失败返回-1；<br>
> **`del(id)`**：删除指定记录，成功返回1，失败返回-1；<br>
> **`update (id, wname, wurl, type)`**：修改收藏内容，成功返回1，失败-1；<br>
> **`count(id)`**：对指定收藏记录的点击次数+1，成功返回1，失败-1；<br>
:::
 
### 准备工作
  
  pip install pymysql flask  flask_cors
 
### 后端代码
temp.py
``` python
 
import pymysql
from flask import Flask, request,jsonify
from flask_cors import CORS
 
#数据库连接
db = pymysql.connect(host="localhost", user="root", password="LM-china1", database="myfavorite")
cursor=db.cursor()
 
#后端服务启动, 并解决跨域问题
app= Flask(__name__)
CORS(app,resource=r"/*")
 
@app.route("/login/list",methods=["POST"])
def login_list():
    if request.method == "POST":
        sql="SELECT id,username,role,ctime FROM login;"
        cursor.execute(sql)
        # data 的数据类型是turple [[],[],[]] 
        data=cursor.fetchall()
        temp={}
        result=[]
        if(data != None):
            for i in data:
                temp["id"]=i[0]
                temp["username"] = i[1]
                temp["role"] = i[2]
                temp["ctime"] = i[3]
                # 没有.copy() 会导致每一行数据都一样.
                # 转换成 [{},{},{}]
                result.append(temp.copy())
            print("result:", len(data))
            # 把格式为 [{},{},{}] 的数据返回给用户浏览器
            return  jsonify(result)
        else:
            print ("result:NULL")
            return jsonify([])
    
if __name__ == "__main__":
    app.run(host="0.0.0.0",port=8899)
    db.close()
    print("Good bye!")
```
### 前端界面
使用vue.js框架
|页面名  |内容 |权限|
|---|---|---|
|主页 |显示所有公开的收藏网站| 任何人|
|登录页面 |登录|  任何人|
|用户管理页面|  管理员管理用户|  管理员|
|收藏管理界面 |浏览自己的收藏夹的内容| 用户|
 
### 发布
ubuntu安装apache2 <br>
``` js
sudo apt-get install apache2 
apache服务器操作命令
sudo /etc/init.d/apache2 [ start | stop | restart | status ]
```
 
mysql服务器安装
``` js
sudo apt-get install mysql-server mysql-client
```
 
查看mysql密码
``` js
/etc/mysql/debian.cnf
```
 
修改root密码
``` js
1)、use mysql;                   #连接到mysql数据库
2)、update mysql.user set authentication_string=password('123456') where user='root' and Host ='localhost';    #修改密码123456是密码
3)、update user set  plugin="mysql_native_password";     
4)、flush privileges;
5)、quit;
``` 
 
启动mysql：
``` js
方式一：sudo /etc/init.d/mysql start
方式二：sudo service mysql start
停止mysql：
方式一：sudo /etc/init.d/mysql stop
方式二：sudo service mysql stop
重启mysql：
方式一：sudo /etc/init.d/mysql restart
方式二：sudo service mysql restart
```
 
mysql允许远程连接
``` js
1.登录mysql，USE mysql;
2. SELECT User, Host FROM user;
3. GRANT ALL PRIVILEGES ON  *.*  TO root@"%"IDENTIFIED BY '123456';
quit;
```
 
4.修改mysql配置文件
``` js
sudo vim /etc/mysql/mysql.conf.d/mysqld.cnf # mysql 5.7.23
#找到将bind-address = 127.0.0.1注释掉
#bind-address            = 127.0.0.1
```
 
5.重启mysql
 
在服务器上后台运行python后端
``` js
nohup python3 /root/myFavorite.py &
```
 
设置开机自启动python后端
（不同版本的系统，设置的方法会不同）
``` js
创建一个service文件/etc/systemd/system/myfavorite.service
[Unit]
Description=myFavorite
 
[Service]
ExecStart=/root/myFavorite.sh
 
[Install]
WantedBy=multi-user.target
```
然后创建/root/myFavorite.sh文件
``` js
#!/bin/bash
sudo nohup python3 /root/myFavorite.py &
```
设置myfavorite.service和myFavorite.sh的权限为最高权限
最后在putty输入以下命令
 
``` js
sudo systemctl daemon-reload 
sudo systemctl enable myfavorite.service
sudo systemctl start myfavorite.service
```
设置自启动成功！