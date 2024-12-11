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
    // Extracting the required details
    const { duration, requests } = result;
    console.log('Performance Results:');
    console.table([
      { Metric: 'Duration (seconds)', Value: duration },
      { Metric: 'Number of Requests', Value: requests.total }
    ]);
  }
});

// Tracks the instance (optional for additional info during the run)
autocannon.track(instance);
