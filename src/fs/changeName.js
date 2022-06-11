import {path, fs} from '../template.js';

async function changeName(str, way){
  const arrFile = str.slice(3).split(' ');
  const pathToFile = path.join(way, arrFile[0]);
  const secArg = arrFile[1] || '';
  const pathToNewFile = path.join(way, secArg);
  try {
    const reNameFile = await fs.rename(pathToFile, pathToNewFile);
    console.log('file ', arrFile[0], ' renamed to ', arrFile[1]);
    console.log('You are currently in: ', way);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to rename.');
    console.log('You are currently in: ', way);
  }
}
export {changeName}