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

router.get('/sh_event', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/08_event.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_onsubmit', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/09_onsubmit.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_test', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0723/test.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_function', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/01_function.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_error', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/03_error.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_bom_window', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/04_bom_window.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_bom_etc', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/05_bom_etc.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_bom_geolocation', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/06_bom_geolocation.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_bom_cookies', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/07_bom_cookies.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_cookies_login', function (req, res) {
    res.sendFile(path.join(__dirname + '/sungho_0724/08_cookies_login.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_jaquery_test', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/01_jaquery.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_syntax', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/02_syntax.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_misc', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/03_misc.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_event_focus', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/04_event_focus.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_event_on', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/05_event_on.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_event_key', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/06_event_key.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_callback', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/07_callback.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_effects_fade', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/08_effects_fade.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_callback', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0725/09_callback.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_effects_slide', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/01_effects_slide.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_effecst_animate', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/02_effecst_animate.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_effects_stop', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/03_effects_stop.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_effects', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/04_effects.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_content_get', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/05_content_get.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_content_set', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/06_content_set.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_content_test', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/07_content_test.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_content_add_remove', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/08_content_add_remove.html'));
    //__dirname : It will resolve to your project folder.
});

router.get('/sh_content_css', function (req, res) {
    res.sendFile(path.join(__dirname + '/jquery_0726/09_content_css.html'));
    //__dirname : It will resolve to your project folder.
});










app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
