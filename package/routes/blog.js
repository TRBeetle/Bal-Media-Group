/**
 * Created by balmustafa117 on 9/1/15.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {

    res.render('blog', {
        title: 'Our Blog - Bal Media Group'
    });
});

module.exports = router;
