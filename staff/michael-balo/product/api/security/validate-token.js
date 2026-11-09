import jwt from 'jsonwebtoken'

const token = 'token_sended_from_the_user';

try {
    const decoded = jwt.verify(token, 'mysecretkey');
    console.log('Valid token');
    console.log(decoded);

} catch (error) {
    console.error('Invalid token');
}
