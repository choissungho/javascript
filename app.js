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

router.get('/bj_output_display', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/output.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/bj_output', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/output_display.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_wheretotag', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/wheretotag.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_switch', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/switch.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/bj_string01', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/string01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_string02', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/string02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_date', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/date.html'));
    //__dirname : It will resolve to your project folder.
});


router.get('/bj_structure', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/structure.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_call_with_function', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/function.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_variable', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/function.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_arrays', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/arrays.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_object', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/object.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_keyword', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/this.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/bj_cookies', function (req, res) {
    res.sendFile(path.join(__dirname + '/beomjin_javascript/cookies.html'));
    //__dirname : It will resolve to your project folder.
});






// --------------------------------------------------------------------------------------------------------------------------------------------
router.get('/sh_intro', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/01_intro.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_wheretotag', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/02_Where_To_script_Tag.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_output_display', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/03_Output Disply.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_output', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/04_output.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_switch', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/05_switch.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_string01', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/06_string01.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_string02', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_07_22/07_string02.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_date', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/01_date.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_structure', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/02_structure.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_call_with_function', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/03_call_with_function.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_Variable', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/04_Variable.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_arrays', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/05_arrays.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_object', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/06_object.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_keyword', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/07_keyword.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_bom_cookies', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/07_bom_cookies.html'));
    //__dirname : It will resolve to your project folder.
});






app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
