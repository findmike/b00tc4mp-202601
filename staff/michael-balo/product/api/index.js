import express from 'express'
import cors from "cors"
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { errorsHandler } from './errorsHandler.js'

import { logic } from './logic.js'

const secretKey = 'my_secret_key';

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        const server = express();

        server.use(cors())

        //const jsonBodyParser = express.json();

        function verifyToken(req, res, next) {
            const authHeader = req.headers.authorization
            const token = authHeader && authHeader.split(' ')[1]

            if (!token) {
                return res.status(401).json({ success: false, message: 'No token provided' })
            }

            try {
                const decoded = jwt.verify(token, secretKey)
                req.userId = decoded.sub
                next()

            } catch (error) {
                return res.status(401).json({ success: false, message: 'Invalid or expired token' })
            }
        }

        function validateUserIdParam(req, res, next) {
            //const userId = req.userId

            if (req.userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            next()
        }

        // FIRST PROBE
        // server.get('/', (req, res) => {
        //   res.send('Hello, World!');
        // });

        // PROBE WITH PATH PARAMETERS (DETERMINISTIC)
        // server.get('/users/:name/:age', (req, res) => {
        //     const name = req.params.name
        //     const age = req.params.age
        //     res.send(`Hola, ${name}! Tú tienes ${age} años.`)
        // });

        // PROBE WITH QUERY PARAMETERS (NON-DETERMINISTIC)
        // server.get('/users/', (req, res) => {
        //     const name = req.query.name
        //     const age = req.query.age
        //     res.send(`Hola, ${name}! Tú tienes ${age} años.`)
        // });

        // CREATE NEW USER (POST REQUEST)

        server.post('/users', (req, res, next) => {
            const newUser = req.body;
            const { name, email, username, password, passwordRepeat } = newUser;

            logic.registerUser(name, email, username, password, passwordRepeat)
                .then(() => {
                    res.status(201).json({ success: true, message: 'User created successfully' });
                })
                .catch(next);
        });

        // AUTHENTICATE USER (POST REQUEST)

        server.post('/users/authenticate', (req, res, next) => {
            const username = req.body.username
            const password = req.body.password

            logic.authenticateUser(username, password)
                .then(userId => {
                    const token = jwt.sign({ sub: userId }, secretKey, { expiresIn: '1h' });

                    res.status(200).json({ success: true, message: 'User authenticated successfully', token: token });
                })
                .catch(next);
        })

        // GET USER INFO (GET REQUEST)

        server.get('/users/:userId/username', verifyToken, validateUserIdParam, (req, res, next) => {
           
            logic.getUserName(req.userId)
                .then(userName => {
                    res.status(200).json({ success: true, userName: userName });
                })
                .catch(next);
        });

        // GET USER AVATAR (GET REQUEST)

        server.get('/users/:userId/avatar', verifyToken, validateUserIdParam, (req, res, next) => {

            logic.getUserAvatar(req.userId)
                .then(avatar => {
                    res.status(200).json({ success: true, avatar: avatar });
                })
                .catch(next);
        });

        // MODIFY USER NAME (PUT REQUEST)

        server.patch('/users/:userId/name', verifyToken, validateUserIdParam, (req, res, next) => {
            const newName = req.body.name

            logic.modifyUserName(req.userId, newName)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User name modified successfully' });
                })
                .catch(next);
        });

        // MODIFY USER EMAIL (PUT REQUEST)

        server.patch('/users/:userId/email', verifyToken, validateUserIdParam, (req, res, next) => {
            const newEmail = req.body.email

            logic.modifyUserEmail(req.userId, newEmail)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User email modified successfully' });
                })
                .catch(next);
        })

        // MODIFY USER USERNAME (PUT REQUEST)

        server.patch('/users/:userId/username', verifyToken, validateUserIdParam, (req, res, next) => {
            const newUsername = req.body.username

            logic.modifyUserUsername(req.userId, newUsername)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User username modified successfully' });
                })
                .catch(next);
        })

        // MODIFY USER PASSWORD (PUT REQUEST)

        server.patch('/users/:userId/password', verifyToken, validateUserIdParam, (req, res, next) => {
            const { password, newPassword, newPasswordRepeat } = req.body

            logic.modifyUserPassword(req.userId, password, newPassword, newPasswordRepeat)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User password modified successfully' });
                })
                .catch(next);
        })

        // MODIFY USER AVATAR

        server.patch('/users/:userId/avatar', verifyToken, validateUserIdParam, (req, res, next) => {
            const avatar = req.body.avatar

            logic.modifyUserAvatar(req.userId, avatar)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User avatar modified successfully' });
                })
                .catch(next);
        });

        // DELETE USER (DELETE REQUEST) = comentar duda con el params y el body!

        server.delete('/users/:userId', verifyToken, validateUserIdParam, (req, res, next) => {
            const password = req.body.password

            logic.removeUser(req.userId, password)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User deleted successfully' });
                })
                .catch(next);

        })

        // CREATE NEW MEMO (POST REQUEST)

        server.post('/users/:userId/memos', verifyToken, validateUserIdParam, (req, res, next) => {
            const { subject, body } = req.body

            logic.addMemo(req.userId, subject, body)
                .then(() => {
                    res.status(201).json({ success: true, message: 'Memo created successfully' });
                })
                .catch(next);
        })

        // GET USER MEMOS (GET REQUEST)

        server.get('/users/:userId/memos', verifyToken, validateUserIdParam, (req, res, next) => {
           
            logic.getMemos(req.userId)
                .then(memos => {
                    res.status(200).json({ success: true, memos: memos });
                })
                .catch(next);
        })

        //GET ONLY 1 MEMO FROM THE USER (GET REQUEST)

        server.get('/users/:userId/memos/:memoId', verifyToken, validateUserIdParam, (req, res, next) => {
            const memoId = req.params.memoId

            logic.getMemo(req.userId, memoId)
                .then(memo => {
                    res.status(200).json({ success: true, memo: memo });
                })
                .catch(next);
        })

        // MODIFY MEMO (PATCH REQUEST)

        server.patch('/users/:userId/memos/:memoId', verifyToken, validateUserIdParam, (req, res, next) => {
            const memoId = req.params.memoId
            const { subject, body } = req.body

            logic.modifyMemo(req.userId, memoId, subject, body)
                .then(() => {
                    res.status(200).json({ success: true, message: 'Memo modified successfully' });
                })
                .catch(next);
        })

        // DELETE MEMO (DELETE REQUEST)

        server.delete('/users/:userId/memos/:memoId', verifyToken, validateUserIdParam, (req, res, next) => {
            const memoId = req.params.memoId

            logic.removeMemo(req.userId, memoId)
                .then(() => {
                    res.status(200).json({ success: true, message: 'Memo deleted successfully' });
                })
                .catch(next);
        })

        server.use(errorsHandler);

        server.use(express.json())

        server.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

    })
