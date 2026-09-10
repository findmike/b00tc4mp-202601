fetch('http://localhost:3000/users/ID8469653486020282/password', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        password: '111222',
        newPassword: 'newpassword555',
        newPasswordRepeat: 'newpassword555'
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