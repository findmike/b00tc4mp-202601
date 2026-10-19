fetch('http://localhost:3000/users/6ad0f373b839371b772b162b/avatar', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        avatar: 'https://i.etsystatic.com/38881100/r/il/0d08bc/4642496341/il_570xN.4642496341_8mof.jpg'
    })
})

    .then(response => {
        return response.json();
    })
    .then(body => {
        console.log('User avatar updated successfully:', body);
    })
    .catch(error => {
        console.error('Error:', error);
    })