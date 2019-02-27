var express = require('express');
var router = express.Router();
const shortID = require('shortid');
var db = require('../db');

	router.get('/', function (req,res) {
		res.render('users/index', {
		users : db.get('users').value()
		});
		});
		
	/*search function*/
	router.get('/search',function(req,res){
		var q = req.query.q;
		var tempArr = db.get('users').value();
		var matchedUsers = tempArr.filter(function(user) {
			return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
		});
		console.log(matchedUsers);
		res.render('users/index',{
			users : matchedUsers
			});
		});
		
		/*create page*/
		router.get('/create',function (req,res) {
		res.render('users/create')
		});
		/*create function */
		router.post('/create',function (req,res) {
		req.body.id = shortID.generate();
		db.get('users').push(req.body).write();
		res.redirect('/users');	// body...
		});

		/* each user page*/
		router.get('/:id',function(req,res){
			var id =req.params.id;

			var user = db.get('users').find({id: id}).value();
			res.render('users/view',{
				user:user
			});
		});
module.exports = router;
