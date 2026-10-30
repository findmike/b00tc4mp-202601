fetch('http://localhost:3000/users/6ac7b3afa07d8849e0a4c71c/:memos/6ad6123f9495866c5fdaa8e8', {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json'
    },

})

    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log('Memo deleted successfully', body);
    })
    .catch(error => {
        console.error('Erro', error);
    });