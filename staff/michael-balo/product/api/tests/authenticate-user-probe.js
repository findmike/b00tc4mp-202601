fetch('http://localhost:3000/users/authenticate', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'julian123',
        password: '333444'
    })
})
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Error authenticating user');
        // }
        return response.json();
    })
    .then(body => {
        console.log('User authenticated successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })
