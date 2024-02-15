import { readFile } from 'fs'; 
import { getDirName } from './util.js'; 
const __dirname = getDirName();


const readFilePromise = (filename) => {
  
  return new Promise((resolve, reject) => {
    
    readFile(filename, 'utf8', (err, data) => {
      
      if (err) {
          reject(err);
          return;
      }      
      
      resolve(data);
    });
  });
};

process.on('exit', (code) => {
    console.log(`'exit' event called. Process exited with code ${code}`);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Promise Rejection:', reason);
    console.log("'unhandledRejection' event called. Reason:", reason);
    process.exit(1);
});


readFilePromise(`${__dirname}/Poet.txt`)
  .then((data) => {
    console.log('File content:\n');
    console.log(data);
    throw new Error('my error');
    return 'Success';
  })
  .then((customData) => {
    console.log('customData:', customData);
  })
  .catch((error) => {
    console.error('Error reading the file:', error);
    throw new Error('Error occurred while processing file');
    process.exit(1);
});