//async 키워드를 추가하면  Promise를 반환한다. --> 반환 값은 Promise
//await 는 async function 안에서만 사용할 수 있다.
//awiat 키워드를 사용하면 Promise가 fulfiled되기 전 까지 다음 await를 차단
//new Promise를 하는 순간 비동기 작업이 시작됨. 

//resolve 를 호출하게 된다면 (비동기)작업 성공!! --> then() 실행
//reject 를 호출하게 된다면 (비동기)작업 실패!!

//sql문의 작업시간이 길면 리턴값을 받기도 전에 리턴을 해서 nullPoint 뜸.

const mysql = require('mysql2');
const dbconn = require('./dbconn');
const util = require('util');
module.exports = {
    findAll: async function(callback){
        const conn =dbconn();

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
        //query() --> sql쿼리,binding
        }catch(e){
            console.error(e);
        }finally{
            conn.end();
        }
    },
    insert: async function(emaillist){
        const conn = dbconn();
        const query = util.promisify(conn.query).bind(conn);
        
        try{
            return await query('insert into emaillist(first_name, last_name, email) values(?,?,?)',
            Object.values(emaillist));

            }catch(e){
                console.error(e);
            }finally{
                conn.end();
            }
    }
}