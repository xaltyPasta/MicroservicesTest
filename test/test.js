const autocannon = require('autocannon');

function startBench() {
  const url = 'http://localhost:3000';

  const instance = autocannon({
    url,
    connections: 10, // Number of concurrent connections
    duration: 30,    // Duration of the test in seconds
  });

  autocannon.track(instance, { renderProgressBar: true });

  instance.on('done', () => {
    console.log('Benchmark finished');
  });
}

startBench();
