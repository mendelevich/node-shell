const fs = require('fs');

function catLogic (fileName) {

  // const fileContents =
  fs.readFile(`./${fileName}`, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    }
  });

  // console.log(fileName);

}

module.exports = catLogic;
