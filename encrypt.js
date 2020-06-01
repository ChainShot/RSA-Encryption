const NodeRSA = require('node-rsa');

const publicKey = `-----BEGIN RSA PUBLIC KEY-----
MEgCQQCBDhlZSx3C/Q+PHImN+Bwh5yaLXqNVK6ozsqlIYpg7uZSF/jsKqtwslUvy
7ckRtgG4slghLgUxxo+IENsOH/gzAgMBAAE=
-----END RSA PUBLIC KEY-----`;

const key = new NodeRSA(publicKey);
const encrypted = key.encrypt("hello world", 'base64');

console.log(encrypted)
