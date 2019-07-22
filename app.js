const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => res.send('Hello World!')) //



app.use(express.static('beomjin_img'))
app.use(express.static('sunghoimg'))


const path = require('path');
const router = express.Router();



router.get('/textadd', function (req, res) {
    console.log(req.query);
    res.send('제목 : ' + req.query.text1 + '  내용 : ' + req.query.text2 + '  날짜 : ' + req.query.text3 + '  작성자 : ' + req.query.text4  + '  <a href="/sh_notice">게시판_Go</a>')
});



router.get('/sh_ipad', function (req, res) {
    res.sendFile(path.join(__dirname + '/Bootstrap_small_project/ipad.html'));
    //__dirname : It will resolve to your project folder.
});




app.use('/', router);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
