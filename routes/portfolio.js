var express = require('express');
var router = express.Router();

/* GET portfolio page. */
router.get('/', function (req, res, next) {
    res.render('portfolio', { title: 'Express' });
});

module.exports = router;
