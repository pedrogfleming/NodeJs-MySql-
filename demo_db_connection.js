//How to setup:
//https://www.w3schools.com/nodejs/nodejs_mysql.asp

// In case the db doesnt have an password or need to changed:
// https://stackoverflow.com/questions/44946270/er-not-supported-auth-mode-mysql-server

// https://stackoverflow.com/questions/21866285/cannot-find-module-faker-after-npm-install-save-dev
//The owner of faker deleted it from GitHub at v6.6.6
// Installation
// Please replace your faker dependency with @faker-js/faker.
// npm install @faker-js/faker --save-dev

const { faker } = require('@faker-js/faker');

var mysql = require('mysql');
 
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',     // your root username
  database : 'join_us',   // the name of your db
  password : '123456'
});


connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  

//   connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//  });

//  var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].time);
//   console.log(results[0].date);
//   console.log(results[0].now);
// });

// To SELECT all users from database:

// q = 'SELECT * FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });


// To count the number of users in the database:

// q = 'SELECT COUNT(*) AS total FROM users ';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results[0].total);
// });

// Inserting Data Using Node
// var q = 'INSERT INTO users (email) VALUES ("rusty_the_dog@gmail.com")';
 
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// An easier approach that allows for dynamic data

var person = {
  email: faker.internet.email(),
  created_at: faker.date.past()
};

var end_result = connection.query('INSERT INTO users SET ?', person, function(err, result) {
if (err) throw err;
console.log(result);
});