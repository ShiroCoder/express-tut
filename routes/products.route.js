var express = require('express');
var router = express.Router();
var controller = require('../controller/products.controller.js');
router.get('/', controller.index);

module.exports = router;
