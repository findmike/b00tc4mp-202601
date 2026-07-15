const express = require('express')

const server = express()

const jsonBodyParser = express.json()

// path parameters (deterministic)

server.get('/users/:name/:age', (req, res) => {
    const name = req.params.name
    const age = req.params.age
    res.send(`Hola, ${name}! Tú tienes ${age} años.`)
})

// query parameters (non-deterministic)

server.get('/hello', (req, res) => {
    res.send(`<h1 style="color: blue;">Hello, ${req.query.to}!</h1>`)
})

// ARRAY PARA HACER PRUEBAS DE FILTRADO DE DATOS CON QUERY PARAMETERS Y PATH PARAMETERS

const cars = [
    {
        id: 1,
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020
    },
    {
        id: 2,
        brand: 'Toyota',
        model: 'Camry',
        year: 2021
    },
    {
        id: 3,
        brand: 'Toyota',
        model: 'Supra',
        year: 2022
    },
    {
        id: 4,
        brand: 'Honda',
        model: 'Civic',
        year: 2019
    },
    {
        id: 5,
        brand: 'Honda',
        model: 'Accord',
        year: 2020
    },
    {
        id: 6,
        brand: 'Honda',
        model: 'CR-V',
        year: 2021
    },
    {
        id: 7,
        brand: 'Nissan',
        model: 'Altima',
        year: 2020
    },
    {
        id: 8,
        brand: 'Nissan',
        model: 'Skyline',
        year: 2021
    },
    {
        id: 9,
        brand: 'Nissan',
        model: 'GT-R',
        year: 2022
    },
    {
        id: 10,
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2020
    },
    {
        id: 11,
        brand: 'Chevrolet',
        model: 'Impala',
        year: 2020
    },
    {
        id: 12,
        brand: 'Chevrolet',
        model: 'Malibu',
        year: 2021
    },
    {
        id: 13,
        brand: 'Ford',
        model: 'Mustang',
        year: 2021
    },
    {
        id: 14,
        brand: 'Ford',
        model: 'Raptor',
        year: 2022
    },
    {
        id: 15,
        brand: 'Ford',
        model: 'Explorer',
        year: 2020
    },
    {
        id: 16,
        brand: 'BMW',
        model: 'X5',
        year: 2022
    },
    {
        id: 17,
        brand: 'BMW',
        model: 'Z4',
        year: 2021
    },
    {
        id: 18,
        brand: 'BMW',
        model: 'M3',
        year: 2020
    }
]

/* TODO use query parameters to filter the cars by brand, model, and/or year. For example, /cars?brand=Toyota&year=2020 should return only the Toyota cars from 2020.

server.get('/cars', (req, res) => {
    const brand = req.query.brand
    const model = req.query.model
    const year = Number(req.query.year)

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
}) */


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

/* server.post('/cars', jsonBodyParser, (req, res) => {
    const newCar = req.body

    newCar.id = cars.length + 1

    cars.push(newCar)

    res.status(201).json({ sucess: true, message: 'Car created successfully', carId: newCar.id })
}) */

/*server.get('/cars/:carId', (req,res) => {

    const carId = Number(req.params.carId)

    const car = cars.find(car => car.id === carId)

    if (!car) {
        return res.status(404).json({ success: false, message: 'Car not found' })
    }

    res.status(200).json({ success: true, car })
}) */

// TODO implement a PATCH endpoint to update a car by its ID

server.patch('/cars/:carId', jsonBodyParser, (req, res) => {
    const carId = Number(req.params.carId)
    const updates = req.body
    
    const carIndex = cars.findIndex(car => car.id === carId)
    
    if (carIndex === -1) {
        return res.status(404).json({ success: false, message: 'Car not found' })
    }
    
    // Update the car with new properties
    cars[carIndex] = { ...cars[carIndex], ...updates }
    
    res.status(204).json({ success: true, message: 'Car updated successfully', car: cars[carIndex] })
})

/* TODO implement a DELETE endpoint to delete a car by its ID

server.delete('/cars/:carId', (req, res) => {
    const carId = Number(req.params.carId)
    
    const carIndex = cars.findIndex(car => car.id === carId)
    
    if (carIndex === -1) {
        return res.status(404).json({ success: false, message: 'Car not found' })
    }
    
    // Remove the car from array
    const deletedCar = cars.splice(carIndex, 1)[0]
    
    res.status(200).json({ success: true, message: 'Car deleted successfully', car: deletedCar })
}) */


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})  