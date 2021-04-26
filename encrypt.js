const NodeRSA = require('node-rsa');

// TODO: fill in someone's public key
const publicKey = `-----BEGIN RSA PUBLIC KEY-----

-----END RSA PUBLIC KEY-----`;

const key = new NodeRSA(publicKey);

// TODO: add a message to encrypt
const message = "";
const encrypted = key.encrypt(message, 'base64');

console.log(encrypted);
