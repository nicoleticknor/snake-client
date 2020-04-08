const net = require('net');
const { connect } = require('./client');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => {
    handleUserInput(key);
  })
  return stdin;
}

const handleUserInput = (input) => {
  if (input === '\u0003') {
    process.exit();
  }
}

setupInput();



console.log("Connecting...");
connect();
