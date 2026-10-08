import express from 'express'
import cors from "cors"
import mongoose from 'mongoose'

 import { logic } from './logic.js'
 
mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {

        const server = express();

        server.use(cors())

        const jsonBodyParser = express.json();

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

        server.post('/users', jsonBodyParser, (req, res) => {
            const newUser = req.body;

            logic.registerUser(newUser.name, newUser.email, newUser.username, newUser.password, newUser.passwordRepeat)
                .then(() => {
                    res.status(201).json({ success: true, message: 'User created successfully' });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });

        });

        // AUTHENTICATE USER (POST REQUEST)

        server.post('/users/authenticate', jsonBodyParser, (req, res) => {
            const username = req.body.username
            const password = req.body.password

            logic.authenticateUser(username, password)
                .then(userId => {
                    res.status(200).json({ success: true, message: 'User authenticated successfully', userId: userId });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });
        })

        // GET USER INFO (GET REQUEST)

        server.get('/users/:userId/username', (req, res) => {
            const userId = req.params.userId

            logic.getUserName(userId)
                .then(userName => {
                    res.status(200).json({ success: true, userName: userName });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });
        });

        // MODIFY USER NAME (PUT REQUEST)

        server.patch('/users/:userId/name', jsonBodyParser, (req, res) => {
            const userId = req.params.userId
            const newName = req.body.name

            logic.modifyUserName(userId, newName)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User name modified successfully' });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });
        });

        // MODIFY USER EMAIL (PUT REQUEST)

        server.patch('/users/:userId/email', jsonBodyParser, (req, res) => {
            const userId = req.params.userId
            const newEmail = req.body.email

            logic.modifyUserEmail(userId, newEmail)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User email modified successfully' });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });
        })

        // MODIFY USER USERNAME (PUT REQUEST)

        server.patch('/users/:userId/username', jsonBodyParser, (req, res) => {
            const userId = req.params.userId
            const newUsername = req.body.username

            logic.modifyUserUsername(userId, newUsername)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User username modified successfully' });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });
        })

        // MODIFY USER PASSWORD (PUT REQUEST)

        server.patch('/users/:userId/password', jsonBodyParser, (req, res) => {
            const userId = req.params.userId
            const { password, newPassword, newPasswordRepeat } = req.body

            logic.modifyUserPassword(userId, password, newPassword, newPasswordRepeat)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User password modified successfully' });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });
        })

        // DELETE USER (DELETE REQUEST) = comentar duda con el params y el body!

        server.delete('/users/:userId', jsonBodyParser, (req, res) => {
            const userId = req.params.userId
            const password = req.body.password

            logic.removeUser(userId, password)
                .then(() => {
                    res.status(200).json({ success: true, message: 'User deleted successfully' });
                })
                .catch(error => {
                    res.status(400).json({ success: false, message: error.message });
                });

        })

        server.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

    })
