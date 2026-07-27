console.log('start');

console.log('block for 2 seconds begins');

setTimeout(() => {
    console.log('block for 2 seconds ends');
}, 2000);

console.log('block for 4 seconds begins');

setTimeout(() => {
    console.log('block for 4 seconds ends');
}, 4000);

console.log('end');

// first timeout callback queued to run after 2 seconds
// second timeout callback queued to run after 4 seconds
