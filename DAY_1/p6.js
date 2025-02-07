const fs = require('fs');

const data = 'This is the data to be appended to the file\n';

fs.appendFile('data.txt', data, 'utf8', (err) => {
  if (err) {
    console.error('An error occurred while appending to the file:', err);
  } else {
    console.log('Data has been appended successfully');
  }
});