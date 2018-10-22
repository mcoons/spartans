var express = require('express');
var router = express.Router();

router.get('/', function (req, res){

    var dates = req.app.get('dates');

    res.render('index', {
        dates: dates,
        pageTitle: 'Home',
        pageID: 'home'
    });
});

module.exports = router;