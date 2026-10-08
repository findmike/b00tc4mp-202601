fetch('http://localhost:3000/users/6ac7b3afa07d8849e0a4c71c/email', {
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