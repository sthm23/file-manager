const welcomeText = 'Welcome to the File Manager, ';
const byeText = 'Thank you for using File Manager, ';
let arg = process.argv.slice(2);
const userName = arg[0].split('=')[1];

console.log(welcomeText + userName + '!');



process.stdin.on('data', data=>{
  const str = data.toString().trim();
  if(str === '.exit') process.exit();

  
  console.log('Invalid input');
});
process.on('error', ()=>console.log('Operation failed'));
process.on('SIGINT', () => process.exit());
process.on('exit', ()=>console.log(byeText + userName + '!'));


// function 