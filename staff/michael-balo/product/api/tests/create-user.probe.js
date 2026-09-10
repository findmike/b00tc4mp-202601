fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Julian',
        email: 'julian@example.com',
        username: 'julian123',
        password: '333444',
        passwordRepeat: '333444'
    })
})

.then (response => {
    // if (!response.ok) {
    //     throw new Error('Network response was not ok');
    // }
    return response.json();
})

.then(body => {
    console.log(body);
})

.catch(error => {
    console.error('There was a problem with the fetch operation:', error);
})