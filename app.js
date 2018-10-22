const express = require('express');
const app = express();
const fs = require('fs');

const localPort = 3000;
const port = process.env.PORT || localPort;

const picsFolder = 'public/images';
const DOMpath = '/images';

var dates = [];
var gamePics = {};

app.locals.siteTitle = 'Spartans Football';

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));
app.use(require('./routes/index'));
app.use(require('./routes/contact'));
app.use(require('./routes/pictures'));

dates = fs.readdirSync(picsFolder);
if (dates[0] = ".DS_Store") dates.shift();

app.set('dates', dates);

dates.forEach( date => {
    if (date != '.DS_Store' && date != 'gameinfo.JSON') {
        let gameData = [];
        let files = fs.readdirSync(picsFolder+'/'+date);

        files.forEach( file => {
            if (file != '.DS_Store' && file != 'gameinfo.JSON') {
                gameData.push(DOMpath+'/'+date + '/' + file);
            }
        })
        gamePics[date] =gameData;
    }
})

app.set('gamePics', gamePics);

app.listen(port, function(){
    console.log("Server is listening on port: " + port);
});
