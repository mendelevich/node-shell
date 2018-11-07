const fs = require('fs');

module.exports = (done, file) => {
  fs.readFile(`./${file}`, (err, data) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(data);
    }
  });
};
