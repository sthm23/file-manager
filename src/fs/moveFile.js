import { fs_main as fs, path } from "../template.js";

async function movePath(str, way){
  const fileNames = str.slice(3).split(' ');
  const sourceFileName = fileNames[0] || '';
  const source = path.join(way, sourceFileName);
  const destFolderName = fileNames[1] || '';
  const destination = path.join(way, destFolderName);
  
  if(fileNames.length === 1){
    console.log('Operation failed: you did not write path name to move.');
    console.log('You are currently in: ', way);

  }else{
    
    fs.stat(source, (err, pat)=>{
      if(err) {
        console.log('Operation failed: you write incorrect file name to move.');
        console.log('You are currently in: ', way);
      } else{
        if(pat.isDirectory()){
          console.log('Operation failed: you write folder name, you need to write file name to move.');
          console.log('You are currently in: ', way);
        }else{
          const readable = fs.createReadStream(source, 'utf-8');
          
          fs.access(destination, err=>{
            if(err){
              console.log('Operation failed: directory not found to move');
              console.log('You are currently in: ', way);
            }else{
              const writeFilePath = path.join(destination, sourceFileName);
              const writable = fs.createWriteStream(writeFilePath);
              
              readable.pipe(writable).on('error', ()=>{
                console.log('Operation failed: some error with moving file.');
                console.log('You are currently in: ', way);
              });
              fs.rm(source, err=>{
                if(err){
                  console.log('Operation failed: some error to move.');
                  console.log('You are currently in: ', way);
                }else{
                  console.log('File has been moved');
                  console.log('You are currently in: ', way);
                }
              });
              
            }
          });
  
        }
      }
    });
  }

  

  }


export {movePath};