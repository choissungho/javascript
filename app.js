const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('beomjin_img'))
app.use(express.static('sunghoimg'))


const path = require('path');
const router = express.Router();
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});




router.get('/bj_intro', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/intro.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/bj_output', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/output.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_wheretotag', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/wheretotag.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_intro', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/01_intro.html'));
    //__dirname : It will resolve to your project folder.
});






app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
