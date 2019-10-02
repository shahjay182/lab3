'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('marobapo', { title: 'Maro Bapo', comment :'Jo mara bap uper nai javanu' });
});

module.exports = router;
