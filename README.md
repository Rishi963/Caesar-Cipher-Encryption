# **Caesar-Cipher-Encryption** 
This package allows you to _Encrypt_ and _Decrypt_ the
given data using the ** _Caesar Cipher Encryption_**.
## Docs!
Import the module and call the cipher function with the paramaeters.
> Data   : Data that need to be encrypted or decrypted.

> Shift  : Shift value, eg: 2.

> Method : Encryption or Decryption

Use the `encrypt` method to encrypt the data.
```
const cipher = require("caesar-cipher-encryption");

var encryptedText = cipher("data",5,encrypt);
console.log(encryptedText);

```
Use the `decrypt` method to decrypt the data.
```
const cipher = require("caesar-cipher-encryption");

var decryptedText = cipher("data",5,decrypt);
console.log(decryptedText);

```
