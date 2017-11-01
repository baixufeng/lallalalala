var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var connect=mysql.createPool({
	host : 'localhost',
	user : 'root',
	password : '123456',
	database : 'lc'
})

/* GET home page. */
router.post('/',function(req,res,next){
	var value=req.body.value
	connect.query("SELECT * FROM shop WHERE name LIKE '%"+value+"%' OR details LIKE '%"+value+"%'",function(err,rows){
		res.header('Access-Control-Allow-Origin','*')
		res.send(rows)
	})
})

module.exports = router;
