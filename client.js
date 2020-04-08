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
  });

  conn.on('data', (datafromServer) => {
    console.log(datafromServer.toString());
  });

  return conn;
}

module.exports = { connect };
