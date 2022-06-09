import {path, fs_main as fs} from '../template.js';

async function createFile(way, __dirname){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  const content = fs.createWriteStream(contentPath);
  console.log(contentName, ' has created')
  console.log('You are currently in: ', __dirname);
}
export { createFile };