function myPromise() {
    return new Promise((resolve, reject) => {
        const notChiken = false;

        console.log('Welcome to the chicken delivery service!');

        setTimeout(() => {
            if (notChiken) {
                resolve('We got chicken available!');
            } else {
                reject('We ran out of chicken!');
            }
        }, 3000);
    });
}

myPromise()
    .then((response) => {
        console.log(response);
    })

    .catch((error) => {
        console.error(error);
    })

.finally(() => {
    console.log('Thank you for using our service!');
})