

async function showFileContent(way){
  const contentName = way.slice(4);
  const contentPath = path.join(__dirname, contentName);
  try {
    const content = await fs.readFile(contentPath, 'utf-8');
    console.log(content);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name.');
    console.log('You are currently in: ', __dirname);
  }
}