
async function changeName(str, way){
  const arrFile = str.slice(3).split(' ');
  const pathToFile = path.join(way, arrFile[0]);
  const pathToNewFile = path.join(way, arrFile[1]);
  try {
    const reNameFile = await fs.rename(pathToFile, pathToNewFile);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to rename.');
    console.log('You are currently in: ', __dirname);
  }
}