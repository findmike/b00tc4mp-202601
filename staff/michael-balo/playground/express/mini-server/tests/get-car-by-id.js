// TODO based on the other tests, write a test that checks if the server returns a 500 status code when the cars.json file is missing or cannot be read.

fetch('http://localhost:3000/cars/19', { method: 'GET' })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error fetching car');
        }
        return response.json();
    })
    .then(car => {
        console.log('Car fetched successfully:', car);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });