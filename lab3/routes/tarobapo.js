'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('tarobapo', { title: 'Taro Bapo', comment : 'Jo mane hairan na karvo' });
});

module.exports = router;
