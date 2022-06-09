import {os} from '../template.js';
export function checkProcessor(__dirname){
  const proc = os.arch()
  console.log(proc);
  console.log('You are currently in: ', __dirname);
}