fetch('http://localhost:3000/users/6ad0f373b839371b772b162b/memos/6ad6123f9495866c5fdaa8e8', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
})

    .then(response => {
        return response.json();
    })

    .then(body => {
        console.log(body);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })