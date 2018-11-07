const done = output => {
  process.stdout.write(output);
  process.stdout.write('\nprompt > ');
};

// Welcome message
done('Welcome to Node Shell.');

process.stdin.on('data', data => {
  const input = data
    .toString()
    .trim()
    .split(' ');

  const cmd = input[0];
  const arg = input[1];

  switch (cmd) {
    case 'pwd':
      require('./pwd')(done);
      break;
    case 'ls':
      require('./ls')(done);
      break;
    case 'cat':
      require('./cat')(done, arg);
      break;
    case 'curl':
      require('./curl')(done, arg);
      break;
    case 'date':
      require('./date')(done);
      break;
    case 'echo':
      require('./echo')(done, arg);
      break;
    default:
      done('you typed ' + cmd);
  }
});
