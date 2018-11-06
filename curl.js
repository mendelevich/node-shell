const request = require('request');

function curlLogic(url) {
  request(url, function(error, response, body) {
    process.stdout.write('error: ', error);
    process.stdout.write('statusCode: ', response.statusCode);
    process.stdout.write('body: ', body);
    process.stdout.write('\nprompt > ');
  });
}

module.exports = curlLogic;
