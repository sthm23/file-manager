import {os} from '../template.js';

export function homeDir(__dirname){
  const homeDir = os.homedir()
  console.log(homeDir);
  console.log('You are currently in: ', __dirname);
}