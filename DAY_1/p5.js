const fs = require('fs');

const data = 'I am in async write file';

fs.writeFile('data.txt', data, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while writing to the file:', err);
  } else {
    console.log('File has been written successfully');
  }
});