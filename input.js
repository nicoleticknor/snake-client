let connection;

const setupInput = function (conn) {
  connection = conn;
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
  let conn = connection;
  if (input === '\u0003') {
    process.exit();
  }
  if (input === '\u0077') {
    console.log('up');
    conn.write('Move: up');
  }
  if (input === '\u0073') {
    console.log('down');
    conn.write('Move: down');
  }
  if (input === '\u0064') {
    console.log('right');
    conn.write('Move: right');
  }
  if (input === '\u0061') {
    console.log('left');
    conn.write('Move: left');
  }
  if (input === '\u0066') {
    conn.write('Say: WHAT IS LOVE')
  }
  if (input === '\u0067') {
    conn.write("Say: BABY DON'T HURT ME")
  }
  if (input === '\u0063') {
    conn.write("Say: DON'T HURT ME")
  }
  if (input === '\u0076') {
    conn.write("Say: NO MORE")
  }
}


module.exports = { setupInput };
