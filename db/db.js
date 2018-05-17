var mysql = require('mysql');

//Configuration for mysql db
const HOST = 'localhost';
const USER = 'user';
const PASSWORD = 'password';
const DATABASE = 'database';

var connection = mysql.createConnection({
  host     : HOST,
  user     : USER,
  password : PASSWORD,
  database : DATABASE,
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

// const promise = require('bluebird');
// const options = { promiseLib: promise };
// const pgp = require('pg-promise')(options);
//
// const connectionString = 'postgres://localhost:5432/apateez';
// // const connectionString = 'postgres://pguser:pguser@54.215.254.113:5432/apateez'; //for docker
// const postgresql = pgp(connectionString);
//
// const findOneQuery = 'SELECT * FROM nearby WHERE place_id = $1';
// const findOne = id => postgresql.any(findOneQuery, id);
//
// // const findManyQuery = `select * FROM nearby WHERE place_id = ANY ('{$1,$2,$3,$4,$5,$6}'::int[]);`
// const findManyQuery = 'select * FROM nearby WHERE place_id IN ($1:list);';
// const findMany = ids => postgresql.any(findManyQuery, [ids]);
//
// module.exports = {
//   findOne,
//   findMany,
// };
