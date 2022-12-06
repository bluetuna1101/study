var mysql = require('mysql2')
var db_config = require('./db_config')
var connection = mysql.createPool(db_config)
// promise 함수를 풀에 적용해 promise/non-promise connection 를 생성할 수 있게 한다
const promisePool = connection.promise() 
module.exports = promisePool
