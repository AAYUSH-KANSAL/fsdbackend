const fs = require('fs');

const filePath = 'data.txt';

try {
  fs.unlinkSync(filePath);
  console.log('File has been deleted successfully');
} catch (err) {
  console.error('An error occurred while deleting the file:', err);
}