import jwt from 'jsonwebtoken';

// NUESTRA CLAVE SECRETA

const secretKey = 'mysecretkey';

// CREAMOS LOS DATOS DEL USUARIO QUE ENVIARA EL TOKEN

const user = {
    username: 'Kayle',
    email: 'kayle@gmail.com',
    department: 'front office',
    telephone: '111222333'
};

// GENERAMOS EL TOKEN: jwt.sign(payload, secretKey, options)

const token = jwt.sign(
    user,
    secretKey,
    { expiresIn: '1h' }
);

console.log('Token generated successfully');
console.log(token);

// VALIDAMOS EL TOKEN: jwt.verify(token, secretKey, options)

try {

const decoded = jwt.verify(token, secretKey);
console.log('Valid token');
console.log(decoded);

} catch(error) {
    console.log('Invalid token', error.message);
}