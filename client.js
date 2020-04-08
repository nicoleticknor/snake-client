const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log('connection established');
    conn.write('Name: NT')
  });

  conn.on('data', (datafromServer) => {
    console.log(datafromServer.toString());
  });

  return conn;
}

module.exports = { connect };
