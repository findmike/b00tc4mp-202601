fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name: 'Lucia',
        email: 'lucia@example.com',
        username: 'Luuu',
        password: 'Lucia111',
        passwordRepeat: 'Lucia111'
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