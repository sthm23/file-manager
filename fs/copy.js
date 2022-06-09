

async function copyDirectory(str, way){
  const fileNames = str.slice(3).split(' ');
  const source = path.join(way, fileNames[0]);
  const destination = path.join(way, fileNames[1]);
  try {
    await fs.copyFile(source, destination);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to copy.');
    console.log('You are currently in: ', __dirname);
  }
}