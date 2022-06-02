import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const read = async () => {
  fs.readFile(path.join(__dirname, 'files', 'fileToRead.txt'), 'utf8',  (err, data) => {
    if (err) throw new Error('FS operation failed');
    console.log(data);
  })
};
