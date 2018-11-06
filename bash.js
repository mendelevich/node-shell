process.stdout.write('prompt > ');

process.stdin.on('data', data => {
  const cmd = data.toString().trim();

  if (cmd === 'pwd') {
    const pwd = require('./pwd');
    pwd();
  } else if (cmd === 'ls') {
    const ls = require('./ls');
    ls();
  } else if (cmd.startsWith('cat')) {
    const fileName = cmd.split(' ')[1];
    const cat = require('./cat');
    cat(fileName);
  } else {
    process.stdout.write('you typed ' + cmd);
    process.stdout.write('\nprompt > ');
  }
});
