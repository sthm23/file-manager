import * as all from '../template.js';

async function checkCliComand(str, __dirname){
  if(str === '.exit'){
    all.process.exit();

  }else if(str === 'up' || str === 'cd ..'){
    let res = await all.prevPath(__dirname);
    return res;

  }else if(str.includes('cd ') && str !== 'cd ..'){
    let res = await all.nextPath(str, __dirname);
    return res;

  }else if(str === 'ls'){
    all.showContent(__dirname);
    return __dirname;

  } else if(str.startsWith('cat ')){    
    all.showFileContent(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('add ')){    
    all.createFile(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('rn ')){
    all.changeName(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('cp ')){
    all.copyDirectory(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('mv ')){
    all.movePath(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('rm ')){
    all.deleteFile(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('os --cpus')){
    all.checkCpus(__dirname);
    return __dirname;
    
  }else if(str.startsWith('os --EOL')){
    all.checkEOL(__dirname);
    return __dirname;
    
  }else if(str.startsWith('os --homedir')){
    all.homeDir(__dirname);
    return __dirname;
    
  }else if(str.startsWith('os --username')){
    all.checkUserName(__dirname);
    return __dirname;
    
  }else if(str.startsWith('os --architecture')){
    all.checkProcessor(__dirname);
    return __dirname;
    
  }else if(str.startsWith('hash ')){
    all.calculateHash(str, __dirname);
    return __dirname;
    
  }else if(str.startsWith('compress ')){
    all.compressFile(str);
    return __dirname;
    
  }else if(str.startsWith('decompress ')){
    all.decompressFile(str);
    return __dirname;
    
  } else{
    console.log('Invalid input');
    console.log('You are currently in: ', __dirname);
    return __dirname;
  }
}

export {checkCliComand};