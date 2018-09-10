const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

const data = {
    id: 10
};

const token = jwt.sign(data, '123abs');
const verify = jwt.verify(token, 'hhh');
console.log(verify);



/* const msg = 'I am user number 3';
const hash = SHA256(msg).toString();
console.log(hash); */
