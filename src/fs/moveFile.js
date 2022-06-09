import { fs, path } from "../template.js";

async function movePath(str, way){
  const fileNames = str.slice(3).split(' ');
  const source = path.join(way, fileNames[0]);
  const destination = path.join(way, fileNames[1]);
  try {
    await fs.copyFile(source, destination);
    await fs.rm(source);
    console.log('file ',  fileNames[0], ' moved ', fileNames[1]);
    console.log('You are currently in: ', way);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to move.');
    console.log('You are currently in: ', way);
  }
}

export {movePath};