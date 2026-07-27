console.log('start')

function doSomething() {
    return new Promise((resolve, reject) => {
        console.log('Inside doSomething function');

        resolve(); // Simulating successful completion

        // reject(new Error('An error occurred in doSomething'));
    })
}

console.log('Before calling doSomething');

doSomething()
    .then(() => {
        console.log('doSomething resolved successfully');
    })
    .catch((error) => {
        console.error('Error caught:', error);
    })
    .finally(() => {
        console.log('Finally block executed');
    });

console.log('end')

// queue microtask for the promise resolution/rejection
// queue microtask for the promise finally