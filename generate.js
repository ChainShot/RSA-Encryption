const NodeRSA = require('node-rsa');

const key = new NodeRSA({b: 512});

console.log(key.exportKey('pkcs1-public-pem'));
console.log(key.exportKey('pkcs1-private-pem'));
