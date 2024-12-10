const autocannon = require('autocannon');

const url = 'http://localhost:3000';
const duration = 30;

const instance = autocannon({
  url,
  duration
}, (err, result) => {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Result:', result);
  }
})

autocannon.track(instance);