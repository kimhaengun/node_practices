## mysite powered by node.js(express)

#### 설치패키지
```bash
[mysite] $ npm init -y

[mysite] $ npm i express
[mysite] $ npm i ejs
[mysite] $ npm i mysql2
// 세션
[mysite] $ npm i express-session
// ORM
[mysite] $ npm i sequelize
[mysite] $ npm i dotenv
[mysite] $ npm i multer
[mysite] $ npm i winston <에러 설정>
[mysite] $ npm i winston-daily-rotate-file <에러 설정>
[mysite] $ npm i moment

[mysite] $ npm i -D nodemon
[mysite] $ npm i -D mocha
[mysite] $ npm i -D chai

```
#### scripts in package.json

```json
  "scripts": {
    "start": "node index.js",
    "debug": "nodemon index.js",
    "test": "npx mocha"
  },
```
#### project structure
<pre>
/mysite
    |--- index.js
    |--- package.json
    |--- package-lock.json
    |--- [node-modules]
    |--- test
    |--- logging
    |--- [logs]
    |       |--- [error]
    |--- [multer-temporary-store]
    |--- config
    |--- public
            |--- [upload-images]
    |       |--- assets        
    |                |--- css
    |                |--- images
    |                |--- js
    |--- routes
    |--- controllers
    |       |--- admin
    |--- models
    |--- views
            |--- main
            |--- user
            |--- board
            |--- guestbook
            |--- gallery
            |---            
</pre>