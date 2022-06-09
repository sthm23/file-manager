import { path, pipeline, createBrotliCompress, fs_main as fs } from '../template.js';

async function compressFile(str, __dirname){
  const arrFiles = str.slice(9).split(' ');
  const source = path.join(__dirname, arrFiles[0]);
  const destination = path.join(__dirname, arrFiles[1]);

  const readable = fs.createReadStream(source);
  const writable = fs.createWriteStream(destination);
  const brCompres = createBrotliCompress();

  pipeline(
    readable,
    brCompres,
    writable, 
    err => {
      if(err){
        console.log('Operation failed: you write incorrect file name to compress.');
        console.log('You are currently in: ', __dirname);
      }else{
        console.log('compress done!');
        console.log('You are currently in: ', __dirname);
      }
    }
  );
}

export {compressFile};