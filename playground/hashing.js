const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const passowrd = '123abc';

bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(passowrd, salt, (err, hash) => {
        console.log(hash);

    })
});

const hashedPass = "$2a$10$71lNDXP/laIQ18wzRJWAre0sblfVPxfHtp5zU5EEzpkMDNzoEBLz.";

bcrypt.compare(passowrd, hashedPass, (err, res) => {
    if (err)
        return console.log(err);
    console.log(res);

});

/* const data = {
    id: 10
};

const token = jwt.sign(data, '123abs');
const verify = jwt.verify(token, 'hhh');
console.log(verify);
 */


/* const msg = 'I am user number 3';
const hash = SHA256(msg).toString();
console.log(hash); */
