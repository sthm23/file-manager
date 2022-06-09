

async function createFile(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  const content = await fs.writeFile(contentPath, '');
  console.log('You are currently in: ', __dirname);
}