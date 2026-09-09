fetch('http://localhost:3000/users/ID5061847597176989', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Error deleting user');
        }

        return response.json();
    })
    .then(body => {
        console.log('User deleted successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })