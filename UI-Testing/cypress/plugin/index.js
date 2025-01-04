const fs = require('fs');

module.exports = (on, config) => {
  on('task', {
    isFileDownloaded: (filePath) => {
      if (typeof filePath !== 'string') {
        throw new TypeError('Expected filePath to be a string');
      }

      return new Promise((resolve, reject) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
          resolve(!err); // File exists if no error
        });
      });
    }
  });
};
