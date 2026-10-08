fetch('http://localhost:3000/users/6ac7b3afa07d8849e0a4c71c', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        password: 'Pinocho111'
    })
})
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Error deleting user');
        // }
        return response.json();
    })
    .then(body => {
        console.log('User deleted successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })