import {os} from '../template.js';

export function checkCpus(__dirname){
  const operationSystem = os.cpus();
  let arr = operationSystem.map(item=>{
    let obj = {};
    obj.model = item.model;
    obj.speed = (item.speed/1000).toFixed(2) + 'GHz';
    return obj;
  });
  console.log(arr);
  console.log('You are currently in: ', __dirname);
}