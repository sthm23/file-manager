import { path, __filename } from './template.js';


import { welcome } from './cli/welcome.js';
import { nextPath } from "./nwd/nextFolder.js";
import { prevPath } from "./nwd/prevFolder.js";
import { showContent } from "./nwd/list.js";
import {showFileContent} from './fs/readFile.js';
import {createFile} from './fs/create.js';
import {changeName} from './fs/changeName.js';
import { copyDirectory } from './fs/copy.js';
import { movePath } from './fs/moveFile.js';
import { deleteFile } from './fs/remove.js';


let __dirname = path.dirname(__filename);


// welcome(__dirname);

process.stdin.on('data', async data=>{
  const str = data.toString().trim();

  if(str === '.exit'){

    process.exit();

  }else if(str === 'up' || str === 'cd ..'){

    let res = await prevPath(__dirname);
    __dirname = res;

  }else if(str.includes('cd ') && str !== 'cd ..'){

    let res = await nextPath(str, __dirname);
    __dirname = res;

  }else if(str === 'ls'){

    showContent(__dirname);
    
  } else if(str.startsWith('cat ')){
    
    showFileContent(str, __dirname);
    
  }else if(str.startsWith('add ')){
    
    createFile(str, __dirname);
    
  }else if(str.startsWith('rn ')){

    changeName(str, __dirname);
    
  }else if(str.startsWith('cp ')){
    copyDirectory(str, __dirname);
    
  }else if(str.startsWith('mv ')){
    movePath(str, __dirname);
    
  }else if(str.startsWith('rm ')){
    deleteFile(str, __dirname);
    
  }else if(str.startsWith('os --cpus')){
    checkCpus();
    
  }else if(str.startsWith('os --EOL')){
    checkEOL();
    
  }else if(str.startsWith('os --homedir')){
    homeDir();
    
  }else if(str.startsWith('os --username')){
    checkUserName();
    
  }else if(str.startsWith('os --architecture')){
    checkProcessor();
    
  }else if(str.startsWith('hash ')){
    calculateHash(str);
    
  }else if(str.startsWith('compress ')){
    compressFile(str);
    
  }else if(str.startsWith('decompress ')){
    decompressFile(str);
    
  } else{
    console.log('Invalid input');
    console.log('You are currently in: ', __dirname);
  }

});


