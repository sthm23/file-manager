import {fs} from '../template.js';

async function  showContent(way) {
  let contentList = await fs.readdir(way);
  console.log(contentList);
  console.log('You are currently in: ', way);
}
export {showContent};