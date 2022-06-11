
import {os} from '../template.js';
export function checkEOL(__dirname){
  const checkEOL = JSON.stringify(os.EOL);
  console.log(`Default system End-Of-Line: ${checkEOL}`);
  console.log('You are currently in: ', __dirname);
}