import {path, fs} from '../template.js';

async function nextPath(way, __dirname){
  const correctWay = way.slice(3);
  const nextWay = path.join(__dirname, correctWay);
  
  try {
    const checkF = await fs.stat(nextWay);
    const checkWay = await fs.access(nextWay);
    if(checkWay === undefined && checkF.isDirectory()){
      console.log('You are currently in: ', nextWay);
      return nextWay;
    }else{
      console.log('Operation failed: Your write incorrect way.');
      console.log('You are currently in: ', nextWay);
    }
  } catch (error) {
    console.log('Operation failed: Your write incorrect way.');
    console.log('You are currently in: ', nextWay);
  }
}

export {nextPath};