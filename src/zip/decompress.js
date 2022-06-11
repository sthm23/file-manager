import { path, pipeline, createBrotliDecompress, fs_main as fs } from '../template.js';

async function decompressFile(str, __dirname){
  const arrFiles = str.slice(11).split(' ');
  let firstArg = arrFiles[0];
  const source = path.join(__dirname, firstArg);
  let secArg = arrFiles[1] || '';
  const destination = path.join(__dirname, secArg);

  if(arrFiles.length === 1){
    console.log('Operation failed: you need to write 2 argument name to decompress.');
    console.log('You are currently in: ', __dirname);
  }else{
    fs.stat(source, (err, pat)=>{
      if(err){
        console.log('Operation failed: you write incorrect file name to decompress.');
        console.log('You are currently in: ', __dirname);
      }else{
        if(pat.isDirectory()){
          console.log('Operation failed: you write folder name, you need to write file name to decompress.');
          console.log('You are currently in: ', __dirname);
        }else{
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
      }
    });
    
  }

}

export {decompressFile};