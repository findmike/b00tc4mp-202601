console.log('start', new Date().toISOString())

console.log('blocking for 2 seconds begins')

let before = Date.now()

while (Date.now() - before < 2000) {
  // do nothing
};

console.log('blocking for 2 seconds ends')

console.log('non-blocking for 3 seconds begins')

setTimeout(() => {
  console.log('non-blocking for 3 seconds ends')
}, 3000)

console.log('blocking for 4 seconds begins')

before = Date.now()

while (Date.now() - before < 4000) {
  // do nothing
};

console.log('blocking for 4 seconds ends')

console.log('non-blocking for 5 seconds begins')

setTimeout(() => {
  console.log('non-blocking for 5 seconds ends', new Date().toISOString())
}, 5000)

console.log('end')

// first timeout callback queued after 3 seconds
// second timeout callback queued after 5 seconds