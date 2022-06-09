
function checkCpus(){
  const operationSystem = os.cpus();
  console.log(operationSystem);
  console.log('You are currently in: ', __dirname);
}