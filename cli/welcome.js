

export function welcome(__dirname){
  const welcomeText = 'Welcome to the File Manager, ';
  const byeText = 'Thank you for using File Manager, ';
  let arg = process.argv.slice(2);
  const userName = arg[0].split('=')[1];

  console.log(welcomeText + userName + '!');
  console.log('You are currently in: ', __dirname);

  process.on('error', ()=>console.log('Operation failed'));
  process.on('SIGINT', () => process.exit());
  process.on('exit', ()=>console.log(byeText + userName + '!'));
}