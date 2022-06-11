import { path, pipeline, createBrotliCompress, fs_main as fs } from '../template.js';

async function compressFile(str, __dirname){
  const arrFiles = str.slice(9).split(' ');
  const source = path.join(__dirname, arrFiles[0]);
  let secArg = arrFiles[1] || '';
  const destination = path.join(__dirname, secArg);

  if(arrFiles.length === 1){
    console.log('Operation failed: you need to write 2 argument name to compress.');
    console.log('You are currently in: ', __dirname);
  }else{
    fs.stat(source, (err, pat)=>{
      if(err){
        console.log('Operation failed: you write incorrect file name to compress.');
        console.log('You are currently in: ', __dirname);
      }else{
        if(pat.isDirectory()){
          console.log('Operation failed: you write folder name, you need to write file name to compress.');
          console.log('You are currently in: ', __dirname);
        }else{
          const readable = fs.createReadStream(source);
          const brCompres = createBrotliCompress();
          const writable = fs.createWriteStream(destination);

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
      }
    })
  }
}

export {compressFile};