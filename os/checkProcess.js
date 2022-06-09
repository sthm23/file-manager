
function checkProcessor(){
  const proc = os.arch()
  console.log(proc);
  console.log('You are currently in: ', __dirname);
}