## Installation

Install all dependencies using `npm i` or `yarn install`.

## Scripts

This repository has three scripts:

- `node generate` Generates a private and public key, exports them in PEM format
- `node encrypt` Encrypts a message given a specific public key
- `node decrypt` Decrypts a encrypted message with your private key

## Setting Up

To setup, first generate yourself a public key and a private key by running `node generate`. Keep your private key to yourself and provide your public key to anyone you want to send secret messages to you.

## Encrypting Messages

To encrypt a secret message to someone, ask for their public key. In the `encrypt.js` file, fill in their public key and a message you'd like to send them. Run this script using `node encrypt` and send them over the logged encrypted message.

## Decrypting Messages

First, have someone encrypt a secret message using your public key. Take the encrypted message and fill it into your `decrypt.js` file. Then, fill in your private key. Finally run `node decrypt` to decrypt the resulting secret message! 
