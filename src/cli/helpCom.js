import {path, __filename, fs_main as fs} from '../template.js';

async function helper(dir){
  let str = '';
  const filePath = path.join(path.dirname(__filename), 'instruction.txt');
  const readable = fs.createReadStream(filePath);
  readable.on('data', data=>str+=data.toString());
  readable.on('error', ()=>{
    console.log('Operation failed: you write incorrect file name to read.')
    console.log('You are currently in: ', dir);
  });
  readable.on('end', ()=>{
    console.log(str);
    console.log('You are currently in: ', dir);
  });
}

export {helper};