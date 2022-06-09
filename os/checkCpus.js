import {os} from '../template.js';

export function checkCpus(__dirname){
  const operationSystem = os.cpus();
  console.log(operationSystem);
  console.log('You are currently in: ', __dirname);
}