fetch('http://localhost:3000/users/ID8469653486020282/email', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: 'pepito.grillo2@example.com'
    })
})
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Error user');
        // }
        return response.json();
    })
    .then(body => {
        console.log('User email updated successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })