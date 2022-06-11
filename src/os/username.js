import {os} from '../template.js';

export function checkUserName(__dirname){
  const user = os.userInfo().username;
  console.log(user);
  console.log('You are currently in: ', __dirname);
}