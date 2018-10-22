var express = require('express');
var router = express.Router();

router.get('/contact', function(req, res){
    
    var dates = req.app.get('dates');

    res.render('contact', {
        // jumboPic: '/images/photos/denverlight.jpg',
        dates: dates,
        pageTitle: 'Contact',
        pageID: 'contact'
    });
});

module.exports = router;