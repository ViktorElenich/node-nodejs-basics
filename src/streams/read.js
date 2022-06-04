import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { stdout } from 'process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  const stream = fs.createReadStream(path.join(__dirname, 'files', 'fileToRead.txt'));
  stream.on('data', function(chunk){
    stdout.write(chunk)
  })
};

read()