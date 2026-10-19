fetch('http://localhost:3000/users/6ad0f39cb839371b772b162c/memos/6ad21fd6837a2f8327d6d303', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        subject: 'Cook dinner',
        body: 'Let\'s make some pasta tonight'
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
    });