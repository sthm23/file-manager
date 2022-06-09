function checkUserName(){
  const user = os.userInfo().username;
  console.log(user);
  console.log('You are currently in: ', __dirname);
}