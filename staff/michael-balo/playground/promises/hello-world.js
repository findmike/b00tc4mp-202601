new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello, World!')
    }, 5000)
})

.then(message => {
    console.log(message)
})

.catch(error => {
    console.error('Error:', error)
})