var express = require('express');
var router = express.Router();
var ip = require('ip');

router.get('/get/ip', (req, res, next)=> {
    res.render('info', { param: 'ip:', value:ip.address() });
});

module.exports = router;