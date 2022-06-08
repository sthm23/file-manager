import path from 'path';
import os from 'os';
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
    
  }else if(str.includes('cd ') && str !== 'cd ..'){
    nextPath(str);
    
  }else if(str === 'ls'){
    showContent(__dirname);
    
  }else if(str.startsWith('cat ')){
    showFileContent(str);
    
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
    checkOS();
    
  } else{
    console.log('Invalid input');
    console.log('Your position is: ', __dirname);
  }

 
  
  
});
process.on('error', ()=>console.log('Operation failed'));
process.on('SIGINT', () => process.exit());
// process.on('exit', ()=>console.log(byeText + userName + '!'));

//path oparation
async function prevPath(way){
  __dirname = path.join(way, '../');
  console.log('Your position is: ', __dirname);
}

async function nextPath(way){
  const correctWay = way.slice(3);
  const nextWay = path.join(__dirname, correctWay);

  try {
    const ways = await fs.access(nextWay);
    if(!ways)  __dirname = nextWay;
    console.log('Your position is: ', __dirname);
  } catch (error) {
    console.log('Your write incorrect way, Please write correct way. ');
    console.log('Your position is: ', __dirname);
  }
}

//file system 
async function  showContent(way) {
  const up = path.join(way);
  let a = await fs.readdir(up);
  console.log(a);
  console.log('Your position is: ', __dirname);
}

async function showFileContent(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  const content = await fs.readFile(contentPath, 'utf-8');
  console.log(content);
  console.log('Your position is: ', __dirname);
}

async function createFile(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  const content = await fs.writeFile(contentPath, '');
  console.log('Your position is: ', __dirname);
}
async function changeName(str, way){
  const arrFile = str.slice(3).split(' ');
  const pathToFile = path.join(way, arrFile[0]);
  const pathToNewFile = path.join(way, arrFile[1]);
  const reNameFile = await fs.rename(pathToFile, pathToNewFile);
  console.log('Your position is: ', __dirname);
}

async function copyDirectory(str, way){
  const fileNames = str.slice(3).split(' ');
  const source = path.join(way, fileNames[0]);
  const destination = path.join(way, fileNames[1]);
  await fs.copyFile(source, destination);
  console.log('Your position is: ', __dirname);
}

async function movePath(str, way){
  const fileNames = str.slice(3).split(' ');
  const source = path.join(way, fileNames[0]);
  const destination = path.join(way, fileNames[1]);
  await fs.copyFile(source, destination);
  await fs.rm(source);
  console.log('Your position is: ', __dirname);
}

async function deleteFile(str, way){
  const fileNames = str.slice(3);
  const source = path.join(way, fileNames);
  await fs.rm(source);
  console.log('Your position is: ', __dirname);
}

//operation system
function checkOS(){
  const operationSystem = os.cpus();
  console.log(operationSystem);
  console.log('Your position is: ', __dirname);
}
