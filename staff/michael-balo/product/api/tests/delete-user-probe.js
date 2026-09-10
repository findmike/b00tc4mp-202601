fetch('http://localhost:3000/users/ID7294628275671868', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        password: '111222333'
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