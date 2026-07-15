// TODO implement a DELETE endpoint to delete a car by its id

fetch('http://localhost:3000/cars/1', {
    method: 'DELETE'
})
.then(response => {
    if (!response.ok) {
        throw new Error('Error deleting car')
    }
    return response.json()
})
.then(data => {
    console.log('Car deleted:', data)
})
.catch(error => {
    console.error('There was a problem:', error)
})
