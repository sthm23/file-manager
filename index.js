import path from 'path';
import os from 'os';
import fs from 'fs/promises';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
let __dirname = path.dirname(__filename);

const welcomeText = 'Welcome to the File Manager, ';
const byeText = 'Thank you for using File Manager, ';
let arg = process.argv.slice(2);
// const userName = arg[0].split('=')[1];

// console.log(welcomeText + userName + '!');
console.log('You are currently in: ',__dirname);

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
process.on('error', ()=>console.log('Operation failed'));
process.on('SIGINT', () => process.exit());
// process.on('exit', ()=>console.log(byeText + userName + '!'));

//path oparation
async function prevPath(way){
  __dirname = path.join(way, '../');
  console.log('You are currently in: ', __dirname);
}

async function nextPath(way){
  const correctWay = way.slice(3);
  const nextWay = path.join(__dirname, correctWay);

  try {
    const checkF = await fs.stat(nextWay);
    const checkWay = await fs.access(nextWay);
    if(checkWay === undefined && checkF.isDirectory()){
      __dirname = nextWay;
      console.log('You are currently in: ', __dirname);
    }else{
      console.log('Operation failed: Your write incorrect way.');
      console.log('You are currently in: ', __dirname);
    }
  } catch (error) {
    console.log('Operation failed: Your write incorrect way.');
    console.log('You are currently in: ', __dirname);
  }
}

//file system 
async function  showContent(way) {
  const up = path.join(way);
  let a = await fs.readdir(up);
  console.log(a);
  console.log('You are currently in: ', __dirname);
}

async function showFileContent(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  try {
    const content = await fs.readFile(contentPath, 'utf-8');
    console.log(content);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name.');
    console.log('You are currently in: ', __dirname);
  }
}

async function createFile(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  const content = await fs.writeFile(contentPath, '');
  console.log('You are currently in: ', __dirname);
}
async function changeName(str, way){
  const arrFile = str.slice(3).split(' ');
  const pathToFile = path.join(way, arrFile[0]);
  const pathToNewFile = path.join(way, arrFile[1]);
  try {
    const reNameFile = await fs.rename(pathToFile, pathToNewFile);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to rename.');
    console.log('You are currently in: ', __dirname);
  }
}

async function copyDirectory(str, way){
  const fileNames = str.slice(3).split(' ');
  const source = path.join(way, fileNames[0]);
  const destination = path.join(way, fileNames[1]);
  try {
    await fs.copyFile(source, destination);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to copy.');
    console.log('You are currently in: ', __dirname);
  }
}

async function movePath(str, way){
  const fileNames = str.slice(3).split(' ');
  const source = path.join(way, fileNames[0]);
  const destination = path.join(way, fileNames[1]);
  try {
    await fs.copyFile(source, destination);
    await fs.rm(source);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to move.');
    console.log('You are currently in: ', __dirname);
  }
}

async function deleteFile(str, way){
  const fileNames = str.slice(3);
  const source = path.join(way, fileNames);
  try {
    await fs.rm(source);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to delete.');
    console.log('You are currently in: ', __dirname);
  }
}

//operation system
function checkCpus(){
  const operationSystem = os.cpus();
  console.log(operationSystem);
  console.log('You are currently in: ', __dirname);
}
function checkEOL(){
  const checkEOL = JSON.stringify(os.EOL);
  console.log(`Default system End-Of-Line: ${checkEOL}`);
  console.log('You are currently in: ', __dirname);
}

function homeDir(){
  const homeDir = os.homedir()
  console.log(homeDir);
  console.log('You are currently in: ', __dirname);
}

function checkUserName(){
  const user = os.userInfo().username;
  console.log(user);
  console.log('You are currently in: ', __dirname);
}

function checkProcessor(){
  const proc = os.arch()
  console.log(proc);
  console.log('You are currently in: ', __dirname);
}
//change to HASH
async function calculateHash(str){
  const hashItem = str.slice(5);
  const pathTofile = path.join(__dirname, hashItem);

  try {
    const text = await fs.readFile(pathTofile);
    const hash = createHash('sha256');
    const resaltHash = hash.update(text).digest('hex');
    console.log(resaltHash);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to hash.');
    console.log('You are currently in: ', __dirname);
  }

}

// async function compressFile(str){
//   const arrFiles = 'compress path_to_file path_to_destination'.slice(9).split(' ');
//   const source = path.join(__dirname, arrFiles[0]);
//   const destination = path.join(__dirname, arrFiles[1]);

//   try {
//     const 
//   } catch (error) {
//     console.log('Operation failed: you write incorrect file name to compress.');
//     console.log('You are currently in: ', __dirname);
//   }
// }

// async function decompressFile(str){

// }


