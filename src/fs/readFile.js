import {path, fs_main as fs} from '../template.js';

async function showFileContent(way, __dirname){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);

    let str = '';
    const content = fs.createReadStream(contentPath);
    
    content.on('data', data=>str+=data.toString())
    
    content.on('end', ()=>{
      console.log(str) 
      console.log('You are currently in: ', __dirname);});
    
    content.on('error', ()=>{
      console.log('Operation failed: you write incorrect file name to read.')
      console.log('You are currently in: ', __dirname);
    });
}

export {showFileContent}