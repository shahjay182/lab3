'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Jay', comment : 'I am code lover. I hate to explain' });
});

module.exports = router;
