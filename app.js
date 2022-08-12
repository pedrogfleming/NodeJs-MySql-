var express = require('express');
var mysql = require('mysql');
var bodyParser = require('body-parser');
var app = express();
 
app.set("view engine","ejs");
// Express doesnt come with parser installed so we have to in order to read the incoming body of a Post request 
app.use(bodyParser.urlencoded({ extended:true }));
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : 'join_us',  
    password : '123456'
  });

app.get("/", function(req, res){
    var q = 'SELECT COUNT(*) as count FROM users';
    connection.query(q, function (error, results) {
    if (error) throw error;
    var count = results[0].count;
    res.render("home",{count: count});
    });
   });
app.post("/register",function(req,res){
    console.log("POST REQUEST SENT TO /REGISTER emails: " + req.body.email);
    var person={email:req.body.email};
    connection.query('INSERT INTO users SET?',person,function(err,result){
        if(err)throw err;
        alert("User register successfully");
        res.redirect("/");
    });

})


app.get("/joke", function(req, res){
    var joke = "What do you call a dog that does magic tricks? A labracadabrador.";
    res.send(joke);
   });

app.get("/random_num", function(req, res){
var num = Math.floor((Math.random() * 10) + 1);
res.send("Your lucky number is " + num);
});

app.listen(8080, function () {
 console.log('App listening on port 8080!');
});