# expressjs-boilerplate
expressjs-boilerplate
## 结合 swagger gitbook  

#

-   https://github.com/hapijs/joi  验证数据类型
    - https://joi.dev/api/?v=17.3.0 

-  https://github.com/tgriesser/knex#readme  操作mysql
-  https://github.com/mpneuried/nodecache   本地缓存
-  https://github.com/luin/ioredis#readme redis 哨兵模式 HA
-  https://github.com/trentm/node-bunyan#readme  日志模块

-  复制现有api到新架构
-  不做任何更改
-  编写同步数据event
-  mysql数据和redis 数据不一致

```
code msg  data 
```




development->staging->production

- development ``` npm run dev```
- staging ``` npm run stag```
- production ``` npm run prod```
   app.get("mysqlMaster");
   app.get("redisMaster");
   app.get("redisSlave");
   app.get("eutil");
    app.get("log");

The project is generated by [Expressjs](https://expressjs.com/).


https://github.com/grpc/grpc/tree/master/examples/node


```
express --view=ejs --css=less --git expressjs-boilerplate
DEBUG=myapp:* npm start

set DEBUG=myapp:* & npm start

 change directory:
     $ cd expressjs-boilerplate

   install dependencies:
     $ npm install

   run the app:
     $ DEBUG=expressjs-boilerplate:* npm start
```
### 集成 swagger
```

 http://localhost:3000/swagger-editor/ 
http://localhost:3000/swagger/ 

```