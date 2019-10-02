'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('mom', { title: 'Mom' , comment: 'Don\'t under estimate the power of MOM' });
});

module.exports = router;
