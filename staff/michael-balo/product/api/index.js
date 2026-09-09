import express from 'express';

const server = express();

const jsonBodyParser = express.json();

import fs from 'fs/promises';

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

server.post('/users', jsonBodyParser, (req, res) => {
    const newUser = req.body;

    fs.readFile('users.json', 'utf8')
        .then(json => {
            const users = JSON.parse(json);

            newUser.id = 'ID' + Math.random().toString().slice(2);
            users.push(newUser);

            return fs.writeFile('users.json', JSON.stringify(users, null, 2))
                .then(() => {
                    res.status(201).json({ success: true, message: 'User created successfully', userId: newUser.id });
                })
                .catch(error => {
                    res.status(500).json({ success: false, message: 'Error writing users file' });
                });
        })
        .catch(error => {
            res.status(500).json({ success: false, message: 'Error reading users file' });
        });
});

// crypto.randomUUID() para generar un ID unico y seguro para cada usuario, en lugar de usar Math.random().

// NO usar Number, porque mis ids son strings (ID12...), y Number('ID1234567890') devuelve NaN, lo que rompe la lógica de búsqueda de usuarios por id.

    server.delete('/users/:userId', (req, res) => {
        const userId = req.params.userId

        fs.readFile('users.json', 'utf8')
            .then(json => {
                const users = JSON.parse(json);

                const userIndex = users.findIndex(user => user.id === userId);

                if (userIndex === -1) {
                    res.status(404).json({ success: false, message: 'User not found' });
                    return;
                }

                const deletedUser = users.splice(userIndex, 1)[0];

                return fs.writeFile('users.json', JSON.stringify(users, null, 4))
                    .then(() => {
                        res.status(200).json({ success: true, message: 'User deleted successfully', user: deletedUser });
                    })
                    .catch(error => {
                        res.status(500).json({ success: false, message: 'Error writing users file' });
                    });
            })
            .catch(error => {
                res.status(500).json({ success: false, message: 'Error reading users file' });

            })

    })

// porque usamos return en el writeFile.

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});

