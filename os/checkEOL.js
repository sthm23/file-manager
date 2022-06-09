function checkEOL(){
  const checkEOL = JSON.stringify(os.EOL);
  console.log(`Default system End-Of-Line: ${checkEOL}`);
  console.log('You are currently in: ', __dirname);
}