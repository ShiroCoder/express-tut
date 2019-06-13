var db = require('../db.js');

module.exports.register = function(req, res) {
	res.render('auth/register');

}

module.exports.postRegister = function(req, res ) {
	var email = req.body.email;
	var name = req.body.name;
	var phone = req.body.phone;
	var pass = req.body.password;
	var repass= req.body.repassword;

	var error = []; 


	if(!req.body.email){
		error.push('email is required');
		
	}
	if(!req.body.phone){
		error.push('phone is required');
	}
	if(!req.body.name){
		error.push('phone is required');
	}
	if(!req.body.password){
		error.push('password is required');
	}
	if(!req.body.repassword){
		error.push('retype the password');
	}
	if(req.body.repassword!==req.body.password){
		error.push('password is not matched')
	}
	if(error.length){
		res.render('users/create', {
			error: error,
			values:
		});
		return ;
	}
	next();

}
