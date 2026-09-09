fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Luffy',
        email: 'luffy@example.com',
        username: 'luffy123',
        password: '111222333'
    })
})

.then (response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})

.then(body => {
    console.log('User created successfully:', body);
})

.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
})