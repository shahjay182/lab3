'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('dad', { title: 'Dad', comment:'Bap Bap hota hai' });
});

module.exports = router;
