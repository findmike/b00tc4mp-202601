fetch('http://localhost:3000/users/ID8469653486020282/username', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        username: 'pepito555'
    })
})
    .then(response => {
        // if (!response.ok) {
        //     throw new Error('Error user');
        // }
        return response.json();
    })
    .then(body => {
        console.log('User username updated successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })