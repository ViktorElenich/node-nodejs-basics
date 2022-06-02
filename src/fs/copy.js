import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const copy = async () => {
  fs.rm(path.join(__dirname, 'files-copy'), { recursive: true, force:true}, (err) => {
    if (err) throw new Error('FS operation failed');
    fs.mkdir(path.join(__dirname, 'files-copy'), { recursive: true }, (err) => {
        if (err) throw new Error('FS operation failed');});
        fs.readdir(path.join(__dirname, 'files'), (err, files) => {
            files.forEach(el => {
            fs.appendFile(path.join(__dirname, `files-copy/${el}`),'',(err) => {if (err) throw new Error('FS operation failed');});
            fs.copyFile(path.join(__dirname, 'files', `${el}`), path.join(__dirname, 'files-copy', `${el}`), (err) => {if (err) throw new Error('FS operation failed');});
        });
    });
  });
};
