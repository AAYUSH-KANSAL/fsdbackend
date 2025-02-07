const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'MyFolder');

try {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log('Folder has been created successfully');
  } else {
    console.log('Folder already exists');
  }
} catch (err) {
  console.error('An error occurred while creating the folder:', err);
}