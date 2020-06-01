const NodeRSA = require('node-rsa');

const privateKey = `-----BEGIN RSA PRIVATE KEY-----
MIIBOQIBAAJBAIEOGVlLHcL9D48ciY34HCHnJoteo1UrqjOyqUhimDu5lIX+Owqq
3CyVS/LtyRG2AbiyWCEuBTHGj4gQ2w4f+DMCAwEAAQJAPpjEGtege++bGGNTJRVv
L9Kak4c32hvv1luWWJHaHT1YsFBBe4tRKJ72sIokWGz1IU4+N02mAx/gdyp23m+e
AQIhAM/K4zCbt2exI88YAm3wWX0VyAXQAfOkboqwC4u7E6RzAiEAnv7gAuWmpw7J
VtjqWaj4KSoOPkzTDWPvMyRoSQkZLUECIG5MoDRZNA3StdNkR0XcY2RGf5q2Q5L1
Ich0kmxlrZOJAiBJ7ccpcbEY0qZJzJjDUe757QUscLpd6o7Jn+8hrqpXQQIgZMoJ
Suh7S5ShPPrxZqGpnBf0vAHDuHwbef5uoYhyfyY=
-----END RSA PRIVATE KEY-----`;

const key = new NodeRSA(privateKey);
const message = "cRjfwJzy3hH9Noy04X4NGfnOiowmgI8PZipmYpWsIT+6rFnRTJVf9GJUQIQd2m8vnqRpQN8VJBjSUZ7iPJO4Ug==";

const decrypted = key.decrypt(message, 'utf8');

console.log(decrypted);
