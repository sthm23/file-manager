import { createHash, __dirname } from "../template.js";

export async function calculateHash(str){
  const hashItem = str.slice(5);
  const pathTofile = path.join(__dirname, hashItem);

  try {
    const text = await fs.readFile(pathTofile);
    const hash = createHash('sha256');
    const resaltHash = hash.update(text).digest('hex');
    console.log(resaltHash);
    console.log('You are currently in: ', __dirname);
  } catch (error) {
    console.log('Operation failed: you write incorrect file name to hash.');
    console.log('You are currently in: ', __dirname);
  }

}