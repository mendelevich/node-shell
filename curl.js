const request = require('request');

module.exports = (done, url) => {
  request(url, (err, response, body) => {
    if (err) {
      done('Something went wrong!');
    } else {
      done(body);
    }
  });
};
