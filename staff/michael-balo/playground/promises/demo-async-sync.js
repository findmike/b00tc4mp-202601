console.log('start', new Date().toISOString())

console.log('non-blocking for 2 seconds begins')

setTimeout(() => {
  console.log('non-blocking for 2 seconds ends')
}, 2000)

console.log('blocking for 3 seconds begins')

let before = Date.now()

while (Date.now() - before < 3000) {
  // do nothing
};

console.log('blocking for 3 seconds ends')

console.log('non-blocking for 4 seconds begins')

setTimeout(() => {
  console.log('non-blocking for 4 seconds ends', new Date().toISOString())
}, 4000)

console.log('blocking for 5 seconds begins')

before = Date.now()

while (Date.now() - before < 5000) {
  // do nothing
};

console.log('blocking for 5 seconds ends')

console.log('end')

// first timeout callback queued after 3 seconds
// second timeout callback queued after 5 seconds