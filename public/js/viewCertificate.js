var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    data = req.query;
    console.log(data);
    certificate.methods.getCertificate(data.rollno)
        .call({ from: coinbase }).then((val) => {
            console.log(val);
            ipfspath = 'https://ipfs.io/ipfs/'+val;
            res.redirect(ipfspath);
            
        });
});

module.exports = router;