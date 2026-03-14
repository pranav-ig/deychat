pragma solidity ^0.5.16;

contract CertificateUpload {

    mapping( string => string ) public certificateHash;

    function setCertificate(string memory _email, string memory _certificateHash) public {
        certificateHash[_email] = _certificateHash;
    }
     function getCertificate(string memory _email) public view returns (string memory _certificateHash ) {
       _certificateHash = certificateHash[_email];
    }

}