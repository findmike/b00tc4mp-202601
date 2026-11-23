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

        const jsonBodyParser = express.json();

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

        server.post('/users', jsonBodyParser, (req, res, next) => {
            const newUser = req.body;
            const { name, email, username, password, passwordRepeat } = newUser;

            logic.registerUser(name, email, username, password, passwordRepeat)
                .then(() => {
                    res.status(201).json({ success: true, message: 'User created successfully' });
                })
                .catch(next);
        });

        // AUTHENTICATE USER (POST REQUEST)

        server.post('/users/authenticate', jsonBodyParser, (req, res, next) => {
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

        server.get('/users/:userId/username', verifyToken, (req, res, next) => {
            const userId = req.userId

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.getUserName(userId)
                .then(userName => {
                    res.status(200).json({ success: true, userName: userName });
                })
                .catch(next);
        });

        // GET USER AVATAR (GET REQUEST)

        server.get('/users/:userId/avatar', verifyToken, (req, res, next) => {
            const userId = req.userId

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.getUserAvatar(userId)
                .then(avatar => {
                    res.status(200).json({ success: true, avatar: avatar });
                })
                .catch(next);
        });

        // MODIFY USER NAME (PUT REQUEST)

        server.patch('/users/:userId/name', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const newName = req.body.name

            if (userId !== req.params.userId) {
                return res.status(403).json({ succes: false, message: 'Forbidden' })
            }

            logic.modifyUserName(userId, newName)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User name modified successfully' });
                })
                .catch(next);
        });

        // MODIFY USER EMAIL (PUT REQUEST)

        server.patch('/users/:userId/email', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const newEmail = req.body.email

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.modifyUserEmail(userId, newEmail)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User email modified successfully' });
                })
                .catch(next);
        })

        // MODIFY USER USERNAME (PUT REQUEST)

        server.patch('/users/:userId/username', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const newUsername = req.body.username

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.modifyUserUsername(userId, newUsername)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User username modified successfully' });
                })
                .catch(next);
        })

        // MODIFY USER PASSWORD (PUT REQUEST)

        server.patch('/users/:userId/password', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const { password, newPassword, newPasswordRepeat } = req.body

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.modifyUserPassword(userId, password, newPassword, newPasswordRepeat)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User password modified successfully' });
                })
                .catch(next);
        })

        // MODIFY USER AVATAR

        server.patch('/users/:userId/avatar', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const avatar = req.body.avatar

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.modifyUserAvatar(userId, avatar)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User avatar modified successfully' });
                })
                .catch(next);
        });

        // DELETE USER (DELETE REQUEST) = comentar duda con el params y el body!

        server.delete('/users/:userId', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const password = req.body.password

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.removeUser(userId, password)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User deleted successfully' });
                })
                .catch(next);

        })

        // CREATE NEW MEMO (POST REQUEST)

        server.post('/users/:userId/memos', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const { subject, body } = req.body

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbiden' })
            }

            logic.addMemo(userId, subject, body)
                .then(() => {
                    res.status(201).json({ success: true, message: 'Memo created successfully' });
                })
                .catch(next);
        })

        // GET USER MEMOS (GET REQUEST)

        server.get('/users/:userId/memos', verifyToken, (req, res, next) => {
            const userId = req.userId

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.getMemos(userId)
                .then(memos => {
                    res.status(200).json({ success: true, memos: memos });
                })
                .catch(next);
        })

        //GET ONLY 1 MEMO FROM THE USER (GET REQUEST)

        server.get('/users/:userId/memos/:memoId', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const memoId = req.params.memoId

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.getMemo(userId, memoId)
                .then(memo => {
                    res.status(200).json({ success: true, memo: memo });
                })
                .catch(next);
        })

        // MODIFY MEMO (PATCH REQUEST)

        server.patch('/users/:userId/memos/:memoId', verifyToken, jsonBodyParser, (req, res, next) => {
            const userId = req.userId
            const memoId = req.params.memoId
            const { subject, body } = req.body

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.modifyMemo(userId, memoId, subject, body)
                .then(() => {
                    res.status(200).json({ success: true, message: 'Memo modified successfully' });
                })
                .catch(next);
        })

        // DELETE MEMO (DELETE REQUEST)

        server.delete('/users/:userId/memos/:memoId', verifyToken, (req, res, next) => {
            const userId = req.userId
            const memoId = req.params.memoId

            if (userId !== req.params.userId) {
                return res.status(403).json({ success: false, message: 'Forbidden' })
            }

            logic.removeMemo(userId, memoId)
                .then(() => {
                    res.status(200).json({ success: true, message: 'Memo deleted successfully' });
                })
                .catch(next);
        })

        server.use(errorsHandler);

        server.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

    })
