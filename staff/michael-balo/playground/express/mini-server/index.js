const express = require('express')

const cars = [
    {
        brand: 'Toyota',
        model: 'Corolla',
        year: 2020
    },
    {
        brand: 'Toyota',
        model: 'Camry',
        year: 2021
    },
    {
        brand: 'Toyota',
        model: 'Supra',
        year: 2022
    },
    {
        brand: 'Honda',
        model: 'Civic',
        year: 2019
    },
    {
        brand: 'Honda',
        model: 'Accord',
        year: 2020
    },
    {
        brand: 'Honda',
        model: 'CR-V',
        year: 2021
    },
    {
        brand: 'Nissan',
        model: 'Altima',
        year: 2020
    },
    {
        brand: 'Nissan',
        model: 'Skyline',
        year: 2021
    },
    {
        brand: 'Nissan',
        model: 'GT-R',
        year: 2022
    },
    {
        brand: 'Chevrolet',
        model: 'Camaro',
        year: 2020
    },
    {
        brand: 'Chevrolet',
        model: 'Impala',
        year: 2020
    },
    {
        brand: 'Chevrolet',
        model: 'Malibu',
        year: 2021
    },
    {
        brand: 'Ford',
        model: 'Mustang',
        year: 2021
    },
    {
        brand: 'Ford',
        model: 'Raptor',
        year: 2022
    },
    {
        brand: 'Ford',
        model: 'Explorer',
        year: 2020
    },
    {
        brand: 'BMW',
        model: 'X5',
        year: 2022
    },
    {
        brand: 'BMW',
        model: 'Z4',
        year: 2021
    },
    {
        brand: 'BMW',
        model: 'M3',
        year: 2020
    }
]

const server = express()

// path parameters (deterministic)

server.get('/users/:name/:age', (req, res) => {
    const name = req.params.name
    const age = req.params.age
    res.send(`Hola, ${name}! Tú tienes ${age} años.`)
})

// query parameters (non-deterministic)

server.get('/hello', (req, res) => {
    res.send(`Hello, ${req.query.to}!`)
})

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


// TODO use path parameters to get a specific car brand by its index in the array

server.get('/cars/:brand', (req, res) => {
    const brand = req.params.brand
    const filteredCars = cars.filter(car => car.brand === brand)
    res.json(filteredCars)
}) 

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


server.listen(3000, () => {
    console.log('Server is running on port 3000')
})  