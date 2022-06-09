import { createHash, path, fs_main as fs} from "../template.js";

export async function calculateHash(str, __dirname){
  const hashItem = str.slice(5);
  const pathTofile = path.join(__dirname, hashItem);


    let body = '';
    const text = fs.createReadStream(pathTofile);
    text.on('data', chunk=>body+=chunk.toString());
    text.on('error', ()=>{
      console.log('Operation failed: you write incorrect file name to hash.');
      console.log('You are currently in: ', __dirname);
    });
    text.on('end', ()=>{
      const hash = createHash('sha256');
      const resaltHash = hash.update(body).digest('hex');
      console.log(resaltHash);
      console.log('You are currently in: ', __dirname);
    });
}