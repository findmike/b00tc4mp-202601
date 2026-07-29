const express = require('express')
const fs = require('fs/promises')

const server = express()

const jsonBodyParser = express.json()

/* path parameters (deterministic)

server.get('/users/:name/:age', (req, res) => {
    const name = req.params.name
    const age = req.params.age
    res.send(`Hola, ${name}! Tú tienes ${age} años.`)
}) */

/* query parameters (non-deterministic)

server.get('/hello', (req, res) => {
    res.send(`<h1 style="color: blue;">Hello, ${req.query.to}!</h1>`)
}) */

// TODO use query parameters to filter the cars by brand, model, and/or year. For example, /cars?brand=Toyota&year=2020 should return only the Toyota cars from 2020.

server.get('/cars', (req, res) => {
    const brand = req.query.brand
    const model = req.query.model
    const year = Number(req.query.year)

    fs.readFile('cars.json', 'utf8')
        .then(json => {
            const cars = JSON.parse(json)


            let filteredCars = cars

            if (brand) {
                filteredCars = filteredCars.filter(car => car.brand === brand)
            }

            if (model) {
                filteredCars = filteredCars.filter(car => car.model === model)
            }

            if (year) {
                filteredCars = filteredCars.filter(car => car.year === year)
            }

            res.json(filteredCars)
        })
        .catch(error => {
            res.status(500).json({ success: false, message: 'Error reading cars file' })
        })
})

/* TODO use path parameters to get a specific car brand by its index in the array
 
server.get('/cars/:brand', (req, res) => {
    const brand = req.params.brand
    const filteredCars = cars.filter(car => car.brand === brand)
    res.json(filteredCars)
}) */

/* LO MISMO QUE ARRIBA PERO CON QUERY PARAMETERS    
server.get('/cars', (req, res) => {
    const brand = req.query.brand
    const model = req.query.model
    const year = Number(req.query.year)
 
    const filteredCars = cars.filter(car =>
        car.brand === brand && car.model === model && car.year === year
    )
 
    res.json(filteredCars)
}) */

server.post('/cars', jsonBodyParser, (req, res) => {
    const newCar = req.body

    fs.readFile('cars.json', 'utf8')
        .then(json => {
            const cars = JSON.parse(json)

            newCar.id = cars.length + 1
            cars.push(newCar)

            return fs.writeFile('cars.json', JSON.stringify(cars, null, 4))
                .then(() => {
                    res.status(201).json({ success: true, message: 'Car created successfully', carId: newCar.id })
                })
                .catch(error => {
                    res.status(500).json({ success: false, message: 'Error writing cars file' })
                })
        })
        .catch(error => {
            res.status(500).json({ success: false, message: 'Error reading cars file' })
        })
})

server.get('/cars/:carId', (req, res) => {
    const carId = Number(req.params.carId)

    fs.readFile('cars.json', 'utf8')
        .then(json => {
            const cars = JSON.parse(json)
            const car = cars.find(car => car.id === carId)

            if (!car) {
                return res.status(404).json({ success: false, message: 'Car not found' })
            }

            return res.status(200).json({ success: true, car })
        })
        .catch(error => {
            res.status(500).json({ success: false, message: 'Error reading cars file' })
        })
})

// TODO implement a PATCH endpoint to update a car by its ID

server.patch('/cars/:carId', jsonBodyParser, (req, res) => {
    const carId = Number(req.params.carId)
    const updates = req.body

    fs.readFile('cars.json', 'utf8')
        .then(json => {
            const cars = JSON.parse(json)

            const carIndex = cars.findIndex(car => car.id === carId)

            if (carIndex === -1) {
                return res.status(404).json({ success: false, message: 'Car not found' })
            }

            // Update the car with new properties
            cars[carIndex] = { ...cars[carIndex], ...updates }

            return fs.writeFile('cars.json', JSON.stringify(cars, null, 4))
                .then(() => {
                    res.status(200).json({ success: true, message: 'Car updated successfully', car: cars[carIndex] })
                })
                .catch(error => {
                    res.status(500).json({ success: false, message: 'Error writing cars file' })
                })
        })
        .catch(error => {
            res.status(500).json({ success: false, message: 'Error reading cars file' })
        })
})

// TODO implement a DELETE endpoint to delete a car by its ID

server.delete('/cars/:carId', (req, res) => {
    const carId = Number(req.params.carId)

    fs.readFile('cars.json', 'utf8')
        .then(json => {
            const cars = JSON.parse(json)

            const carIndex = cars.findIndex(car => car.id === carId)

            if (carIndex === -1) {
                return res.status(404).json({ success: false, message: 'Car not found' })
            }

            // Remove the car from array
            const deletedCar = cars.splice(carIndex, 1)[0]

            return fs.writeFile('cars.json', JSON.stringify(cars, null, 4))
                .then(() => {
                    res.status(200).json({ success: true, message: 'Car deleted successfully', car: deletedCar })
                })
                .catch(error => {
                    res.status(500).json({ success: false, message: 'Error writing cars file' })
                })
        })
        .catch(error => {
            res.status(500).json({ success: false, message: 'Error reading cars file' })
        })
})


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})  