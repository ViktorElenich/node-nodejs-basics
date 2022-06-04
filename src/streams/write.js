import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import rl from 'readline';

const readline = rl.createInterface({
  input: process.stdin
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const write = async () => {
  console.log('Enter your text: ');
  readline.on('line', (input) => {
    fs.appendFile(path.join(__dirname, 'files', 'fileToWrite.txt'), `${input}\n`, ()=>{
      console.log(`Your enter: ${input}`);
    })
  })
};

write()