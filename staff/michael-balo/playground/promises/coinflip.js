const coin = new Promise((resolve, reject) => {

    const result = Math.random();

    if (result > 0.5) {
        resolve('Cara');
    } else {
        reject('Cruz');
    }

});

coin

    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    });