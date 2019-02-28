		/*define stuff*/
		const express = require('express');
		var port = 3000;
		var bodyParser = require('body-parser');
		var userRoutes = require('./routes/user.route');
		const app = express();

		

		app.set('view engine', 'pug');
		app.set('views', './views');
		
		app.use(bodyParser.json()); 
		app.use(bodyParser.urlencoded({ extended: true }));
		
	/*main page*/
		app.get('/', function (req, res) {
		res.render('index');
		});

		app.use('/users',userRoutes);

		
		app.listen(3000, function() {
		console.log('Server listening on port 3000');
		}); 
		
		
