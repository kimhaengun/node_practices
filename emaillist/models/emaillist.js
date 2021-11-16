//async 키워드를 추가하면  Promise를 반환한다. --> 반환 값은 Promise
//await 는 async function 안에서만 사용할 수 있다.
//awiat 키워드를 사용하면 Promise가 fulfiled되기 전 까지 다음 await를 차단

//resolve 를 호출하게 된다면 (비동기)작업 성공!! 
//reject 를 호출하게 된다면 (비동기)작업 실패!!


const mysql = require('mysql2');
const util = require('util');
module.exports = {
    findAll: async function(callback){
        const conn = mysql.createConnection({
            host: '127.0.0.1',
            port: 3306,
            user: 'webdb',
            password: 'webdb',
            database: 'webdb'
        });

        // const query = function(sql, data){
        //     return new Promise(function(resolve, reject){
        //         conn.query(sql,
        //         [], function(error, results, field){
        //         return error ? reject(error) :resolve(results);
        //         })
        //     })
        // }
        
        const query = util.promisify(conn.query).bind(conn);
       
        //await 내부에 Promise가 존재
        try{
        return await query('select no, first_name as firstName, last_name as lastName, email from emaillist order by no desc',[]);
        }catch(e){
            console.error(e);
        }finally{
            conn.end();
        }
    }
}