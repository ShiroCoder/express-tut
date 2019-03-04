var express = require('express');
var router = express.Router();
var controller = require('../controller/user.controller.js');
var validate = require('../controller/user.validate.js');
var authMiddleware = require('../middleware/auth.middleware.js');
	router.get('./', authMiddleware.requireAuth,controller.index);

	router.get('/',controller.index );
		
		/*search function*/
	router.get('/search',controller.search);
		
		/*create page*/
	router.get('/create',controller.get);
		/*create function */
	router.post('/create', validate.validate, controller.create);

		/* each user page*/
	router.get('/:id',controller.view);
module.exports = router;
