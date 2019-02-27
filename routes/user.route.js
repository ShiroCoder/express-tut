var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller.js');
var db = require('../db');

	router.get('/',controller.index );
		
	/*search function*/
	router.get('/search',controller.search);
		
		/*create page*/
		router.get('/create',controller.get);
		/*create function */
		router.post('/create',controller.create);

		/* each user page*/
		router.get('/:id',controller.view);
module.exports = router;
