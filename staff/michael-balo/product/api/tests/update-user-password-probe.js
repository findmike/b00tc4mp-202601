fetch('http://localhost:3000/users/6ac7b3afa07d8849e0a4c71c/password', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        password: '333444',
        newPassword: 'Pinocho111',
        newPasswordRepeat: 'Pinocho111'
    })
})
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Error user');
        // }
        return response.json();
    })
    .then(body => {
        console.log('User password updated successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })