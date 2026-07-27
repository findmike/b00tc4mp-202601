console.log('start');

console.log('block for 2 seconds begins');

let before = Date.now();

while (Date.now() - before < 2000) {
    // Do nothing for 2 seconds
};

console.log('block for 2 seconds ends');

console.log('block for 4 seconds begins');

before = Date.now();

while (Date.now() - before < 4000) {
    // Do nothing for 4 seconds
};

console.log('block for 4 seconds ends');

console.log('end');