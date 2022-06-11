import {path, fs_main as fs} from '../template.js'; //

async function copyDirectory(str, way){
  const fileNames = str.slice(3).split(' ');
  const sourceFileName = fileNames[0] || '';
  const source = path.join(way, sourceFileName);
  const destFolderName = fileNames[1] || '';
  const destination = path.join(way, destFolderName);

  if(fileNames.length === 1){
    console.log('Operation failed: you did not write one path name to copy.');
    console.log('You are currently in: ', way);
  }else{
    fs.stat(source, (err, pat)=>{
      if(err) {
        console.log('Operation failed: you write incorrect file name to copy.');
        console.log('You are currently in: ', way);
      } else{
        if(pat.isDirectory()){
          console.log('Operation failed: you write folder name, you need to write file name to copy.');
          console.log('You are currently in: ', way);
        }else{
          const readable = fs.createReadStream(source, 'utf-8');
          
          fs.access(destination, err=>{
            if(err){
              console.log('Operation failed: directory to copyFile not found');
              console.log('You are currently in: ', way);
            }else{
              const writeFilePath = path.join(destination, sourceFileName);
              const writable = fs.createWriteStream(writeFilePath);
              
              readable.pipe(writable).on('error', ()=>{
                console.log('Operation failed: you write incorrect file name to copy.');
                console.log('You are currently in: ', way);
              });
    
              console.log('File has been copied');
              console.log('You are currently in: ', way);
            }
          });
  
        }
      }
    });
  }

}

export {copyDirectory};

