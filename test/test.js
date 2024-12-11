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
    // Output the number of requests and duration
    console.log(`Duration: ${result.duration} seconds`);
    console.log(`Number of Requests: ${result.requests.total}`);
  }
});

// Tracks the instance (optional for additional info during the run)
autocannon.track(instance);
