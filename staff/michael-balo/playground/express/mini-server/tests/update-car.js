// TODO fetch a specific car by its id using PATCH with the endpoint /cars/:carId and update its properties based on the request body. Return the updated car in the response.

fetch('http://localhost:3000/cars/19', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        year: 2023
    })
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error updating car')
    }
    return response.json()
})
.then(data => {
    console.log('Car updated:', data)
})
.catch(error => {
    console.error('There was a problem:', error)
})


