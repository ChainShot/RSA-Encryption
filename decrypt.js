const NodeRSA = require('node-rsa');

// TODO: fill in the private key
const privateKey = `-----BEGIN RSA PRIVATE KEY-----

-----END RSA PRIVATE KEY-----`;

const key = new NodeRSA(privateKey);

// TODO: fill in the encrypted message
const message = "";

const decrypted = key.decrypt(message, 'utf8');

console.log(decrypted);
