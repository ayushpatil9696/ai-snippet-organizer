const fs = require('fs');
const path = require('path');

const schema = [
  'src/config',
  'src/models',
  'src/routes',
  'src/controllers',
  'src/middleware',
  'src/utils'
];

schema.forEach(dir => {
  // The { recursive: true } option is the key to creating nested paths
  fs.mkdir(path.join(process.cwd(), dir), { recursive: true }, (err) => {
    if (err) {
      console.error(`Error creating directory ${dir}:`, err);
    } else {
      console.log(`Directory created: ${dir}`);
    }
  });
});