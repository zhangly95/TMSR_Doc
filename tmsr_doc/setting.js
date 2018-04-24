var pg = require('pg');

//数据库配置
var config = {
    user:"zhangliyuan",
    database:"zhang_test",
    password:"zhang123",
    host:"47.100.41.42",
    port:5432,
    
    //扩展属性
    max:20,
    idleTimeoutMillis:3000,

}
var pool = new pg.Pool(config);

// pool.connect(function(err,client,done){
//  if(err){
//      return console.error('数据库连接出错',err);
//  }

//  client.query('SELECT name from "UserTable"',function(err,result){
//      done();//释放连接(将其返回给连接池)
//      if(err){
//          return console.error('查询出错',err);

//      }
//      console.log(result.rows[0]);
//  });
// });

//Async&Await方式
// var query = async() =>{
//     var connect = await pool.connect()
//     try {
//         var res = await connect.query('SELECT name from "UserTable"')
//         console.log(res.rows[0])
//     }finally {
//         connect.release
//     }
// }

// query().catch(e => console.error(e.message,e.stack));


//promise
pool.connect().then(client =>{
    client.query('SELECT name from "UserTable"').then(res =>{
        client.release()
        console.log(res.rows[0])
    }).catch(e =>{
        client.release()
        console.error('query error',e.message,e.stack)
    })
})