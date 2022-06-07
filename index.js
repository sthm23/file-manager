import path from 'path';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const welcomeText = 'Welcome to the File Manager, ';
const byeText = 'Thank you for using File Manager, ';
let arg = process.argv.slice(2);
// const userName = arg[0].split('=')[1];


// console.log(welcomeText + userName + '!');
console.log('Your position is: ',__dirname);
process.stdin.on('data', data=>{
  const str = data.toString().trim();

  if(str === '.exit'){
    process.exit();
  }else if(str === 'up' || str === 'cd ..'){
    prevPath(__dirname);
    console.log('Your position is: ', __dirname);
  }else if(str.includes('cd ') && str !== 'cd ..'){
    nextPath(str);
    console.log('Your position is: ', __dirname);
  }else if(str === 'ls'){
    showContent(__dirname);
    console.log('Your position is: ', __dirname);
  }else if(str.startsWith('cat ')){
    showFileContent(str);
    console.log('Your position is: ', __dirname);
  }else if(str.startsWith('add ')){
    createFile(str);
    console.log('Your position is: ', __dirname);
  }else if(str.startsWith('rn ')){
    createFile(str);
    console.log('Your position is: ', __dirname);
  } else{
    console.log('Invalid input');
    console.log('Your position is: ', __dirname);
  }

 
  
  
});
process.on('error', ()=>console.log('Operation failed'));
process.on('SIGINT', () => process.exit());
// process.on('exit', ()=>console.log(byeText + userName + '!'));

async function prevPath(way){
  return __dirname = path.join(way, '../');
}

async function nextPath(way){
  const correctWay = way.slice(3);
  return __dirname = path.join(__dirname, correctWay);
}

async function  showContent(way) {
  const up = path.join(way);
  let a = await fs.readdir(up);
  return console.log(a);
}

async function showFileContent(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  const content = await fs.readFile(contentPath, 'utf-8');
  return console.log(content);
}

async function createFile(way){
  const contentName = way.slice(3);
  const contentPath = path.join(__dirname, contentName);
  const content = await fs.writeFile(contentPath, '');

}

