fetch('http://localhost:3000/users/6ad0f39cb839371b772b162c/memos', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        subject: 'Go to the gym',
        body: 'I need to hit legs today'
    })

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