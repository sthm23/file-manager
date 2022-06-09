import {path} from '../template.js';

async function prevPath(way){
  let dirname = path.join(way, '../');
  console.log('You are currently in: ', dirname);
  return dirname;
}

export {prevPath};