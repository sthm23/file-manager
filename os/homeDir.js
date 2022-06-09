function homeDir(){
  const homeDir = os.homedir()
  console.log(homeDir);
  console.log('You are currently in: ', __dirname);
}