		/*define stuff*/
		require('dotenv').config();
		console.log(process.env.SESSION_SECRET);
		const express = require('express');
		var port = 3000;
		var bodyParser = require('body-parser');
		var userRoutes = require('./routes/user.route');
		var authRoute = require('./routes/auth.route.js');
		var authMiddleware = require('./middleware/auth.middleware.js')
		const app = express();
		var cookieParser = require('cookie-parser');

		app.set('view engine', 'pug');
		app.set('views', './views');
		
		app.use(bodyParser.json()); 
		app.use(bodyParser.urlencoded({ extended: true }));
		
	/*main page*/
		app.use(cookieParser(process.env.SESSION_SECRET));
		app.get('/', function (req, res) {
		res.render('index');
		});

		app.use('/users', authMiddleware.requireAuth, userRoutes);
		app.use('/auth', authRoute);
		
		app.listen(3000, function() {
		console.log('Server listening on port 3000');
		}); 
		
		
