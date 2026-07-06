const express = require('express')

const server = express()

server.get('/users/:name/:age', (req, res) => {
    const name = req.params.name
    const age = req.params.age
    res.send(`Hola, ${name}! Tú tienes ${age} años.`)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})  