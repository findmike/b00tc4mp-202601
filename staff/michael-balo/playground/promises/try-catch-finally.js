console.log('start')

function doSomething() {
    console.log('Inside doSomething function');

   // throw new Error('An error occurred in doSomething');
}

try {
    console.log('Before calling doSomething');

    doSomething();

} catch (error) {
    console.error('Error caught:', error);
} finally {
    console.log('Finally block executed');
}

console.log('end')