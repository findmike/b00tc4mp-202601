fetch('http://localhost:3000/cars', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        brand: 'Bentley',
        model: 'Continental GT',
        year: 2020
    })
})

.then (response => {
    if (!response.ok) {
        throw new Error('Error creating car')
    }

    return response.json()
})

.then(body => {
    console.log('Car created successfully:', body)
})

.catch(error => {
    console.error('There was a problem with the fetch operation:', error)
})  