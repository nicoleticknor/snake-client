const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '50.64.116.162',
    port: 50541
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('connection established');
    conn.write('Name: NT')
    // setTimeout(() => {
    //   setInterval(() => {
    //     conn.write('Move: up');
    //   }, 50);
    // }, 5);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 10);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 15);
    // setTimeout(() => {
    //   conn.write('Move: up');
    // }, 20);
    // setInterval(() => {
    //   conn.write('Move: up');
    // }, 50);
  });

  conn.on('data', (datafromServer) => {
    console.log(datafromServer.toString());
  });

  return conn;
}

module.exports = { connect };
