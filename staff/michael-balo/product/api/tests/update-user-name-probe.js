// PREGUNTAR PORQUE CON /NAME FUNCIONA Y NO /PEPITO COMO ESTABA HACIENDOLO YO NO FUNCIONA.

fetch('http://localhost:3000/users/ID8469653486020282/name', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Pepito Grillo'
    })
})
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Error user');
        // }
        return response.json();
    })
    .then(body => {
        console.log('User name updated successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })