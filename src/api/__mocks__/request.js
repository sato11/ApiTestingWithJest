import fs from 'fs';

const request = (url) => new Promise((resolve, reject) => {
  const lastSlash = url.lastIndexOf('/');
  const userId = url.substring(lastSlash + 1);
  fs.readFile(`./src/api/__mockData__/${userId}.json`, 'utf8', (err, data) => {
    if (err) reject(err);
    resolve({ entity: JSON.parse(data) });
  });
});

export default request;
