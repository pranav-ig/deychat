var express = require('express');
var router = express.Router();
var ipfsAPI = require("ipfs-api");

router.post('/', function (req, res, next) {
    rollno = req.body.rollno;
    fileBytes = req.files.certificate.data;

    console.log("rollno", rollno);
    console.log("fileBytes", fileBytes);
    console.log("certificate uploaded successfull")

    const ipfs = ipfsAPI('ipfs.infura.io', '5001', { protocol: 'https' });

    ipfs.files.add(fileBytes, function (err, file) {
        if (err) throw err;
        ifpsHash = file[0].hash;
        console.log("ipfs hash", ifpsHash);
        certificate.methods.setCertificate(rollno, ifpsHash).send({ from: coinbase }).then(function(result){
        res.send(file);
        })
        
    });

    // res.render('uploadCertificate',{ title: this.rollno});

});

module.exports = router;