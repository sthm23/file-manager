import { path, pipeline, createBrotliDecompress, fs_main as fs } from '../template.js';

async function decompressFile(str, __dirname){
  const arrFiles = str.slice(11).split(' ');
  const source = path.join(__dirname, arrFiles[0]);
  const destination = path.join(__dirname, arrFiles[1]);

  const readable = fs.createReadStream(source);
  const writable = fs.createWriteStream(destination);
  const brCompres = createBrotliDecompress();

  pipeline(
    readable,
    brCompres,
    writable, 
    err => {
      if(err){
        console.log('Operation failed: you write incorrect file name to decompress.');
        console.log('You are currently in: ', __dirname);
      }else{
        console.log('Decompress done!');
        console.log('You are currently in: ', __dirname);
      }
    }
  );

}

export {decompressFile};