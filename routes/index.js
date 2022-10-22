var express = require('express');
var router = express.Router();
var LocalStorage = require('node-localstorage').LocalStorage,
    localStorage = new LocalStorage('./scratch');
/* GET home page. */
router.get('/', function (req, res, next) {
    var login = localStorage.getItem('login')
    res.render('login', {title: 'Express', login: login});
});

router.post('/login', function (req, res, next) {
    if (req.body.email == undefined || req.body.email.length == 0) {
        return res.render('login', {title: 'Express', email: false});
    }
    if (req.body.password == undefined || req.body.password.length == 0) {
        return res.render('login', {title: 'Express', password: false});
    }

    localStorage.setItem('login', 'true')
    return res.redirect('/')
});

router.get('/logout', function (req, res, next) {
    localStorage.removeItem('login')

    return res.redirect('/')
})
module.exports = router;
