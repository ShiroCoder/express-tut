var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller.js');
var validate = require('../controller/user.validate.js');
var authMiddleware = require('../middleware/auth.middleware.js');
	

	router.get('/',controller.index );
		
		/*search function*/
	router.get('/search',controller.search);
		
		/*create page*/
	router.get('/create',controller.get);

		/* each user page*/
	router.get('/:id',controller.view);
		
		/*create function */
	router.post('/create', validate.validate, controller.create);


module.exports = router;
