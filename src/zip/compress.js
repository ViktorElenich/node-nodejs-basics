import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = fs.createReadStream(path.join(__dirname, 'files', 'fileToCompress.txt'), 'utf-8');
const zl = zlib.createGzip();
const write = fs.createWriteStream(path.join(__dirname, 'files', 'archive.gz'));

export const compress = async () => {
  file.pipe(zl).pipe(write);
};
compress()