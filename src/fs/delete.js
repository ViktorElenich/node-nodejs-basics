import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const remove = async () => {
  fs.unlink(path.join(__dirname, 'files', 'fileToRemove.txt'), (err) => {
    if (err) {
      throw err;
    }
    console.log("File is deleted.");
  })
};
