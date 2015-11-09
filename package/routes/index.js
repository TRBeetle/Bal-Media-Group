var express = require('express');
var router = express.Router();
var vd = videodata = require('../videodata.json');

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('index', {
        title: "Bal Media Group",
        videodata: vd
    });
});

module.exports = router;
