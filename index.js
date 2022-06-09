import {checkCliComand} from './cli/cliComand.js';
import { path, os, fs, createHash, pathFolder } from './template.js';

let __dirname = path.join(pathFolder);

import { nextPath } from "./nwd/nextFolder.js";
import { prevPath } from "./nwd/prevFolder.js";
import { showContent } from "./nwd/list.js";


process.stdin.on('data', async data=>{
  const str = data.toString().trim();

  if(str === '.exit'){
    process.exit();
  }else if(str === 'up' || str === 'cd ..'){
    __dirname = (await prevPath(__dirname)).toString();
    
  }else if(str.includes('cd ') && str !== 'cd ..'){
    __dirname = (await nextPath(str, __dirname)).toString();
    
  }else if(str === 'ls'){
    showContent(__dirname);
    
  } /*else if(str.startsWith('cat ')){
    showFileContent(str, __dirname);
    
  }else if(str.startsWith('add ')){
    createFile(str);
    
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
    
  } */else{
    console.log('Invalid input');
    console.log('You are currently in: ', __dirname);
  }

});


