import {path, fs} from '../template.js';

async function deleteFile(str, way){
  const fileNames = str.slice(3);
  const source = path.join(way, fileNames);
  try {
    await fs.rm(source);
    console.log('file ', fileNames, ' has removed');
    console.log('You are currently in: ', way);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to delete.');
    console.log('You are currently in: ', way);
  }
}

export {deleteFile}