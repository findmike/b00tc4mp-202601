fetch('http://localhost:3000/users/6ac7b58ea07d8849e0a4c71d/avatar', {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        avatar: 'https://static.vecteezy.com/system/resources/previews/068/438/008/non_2x/ai-logo-icon-with-star-and-square-icons-artificial-intelligence-and-machine-learning-sign-tools-for-generate-from-the-text-vector.jpg'
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