var express = require('express');
var router = express.Router();

router.get('/:date', function (req,res){

    var dates = req.app.get('dates');
    var pics = req.app.get('gamePics')[req.params.date];
    var size = 10;
    var page = 1;
    var previous = false;
    var next = false;
    var totalPages = Math.ceil(pics.length/size);

    var startIndex = 0;
    var endIndex = size < pics.length-1 ? size-1 : pics.length-1;
    
    if (typeof req.query.page != 'undefined' && (Number(req.query.page)-1)*size < pics.length-1) {
        page = Number(req.query.page);
        console.log('page #:', page);
        startIndex = (page-1)*size;
        endIndex = (page-1)*size+size-1 < pics.length-1 ? (page-1)*size+size-1 : pics.length-1;
    }
    
    if (startIndex > 0) previous = true;
    if (endIndex < pics.length-1) next = true;

    pics = pics.slice(startIndex, endIndex+1); 

    res.render('pictures', {
        page: page,
        totalPages: totalPages,
        dates: dates,
        previous: previous,
        next: next,
        pics : pics,
        date: req.params.date,
        pageTitle: req.params.date,
        pageID: req.params.date
    });
});

module.exports = router;