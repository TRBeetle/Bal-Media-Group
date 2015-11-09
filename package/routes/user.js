/**
 * Created by balmustafa117 on 9/1/15.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id', function (req, res, next) {

    res.render('user', {
        title: 'User - Bal Media Group'
    });
});

module.exports = router;
