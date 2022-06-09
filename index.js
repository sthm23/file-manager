import { path, __filename } from './template.js';
import {checkCliComand} from './cli/cliComand.js';
import {welcome} from './cli/welcome.js';
let __dirname = path.dirname(__filename);

welcome(__dirname);

process.stdin.on('data', async data=>{
  const str = data.toString().trim();

  let res = await checkCliComand(str, __dirname);
  __dirname = res;

});