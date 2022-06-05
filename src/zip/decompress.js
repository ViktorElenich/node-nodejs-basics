import * as fs from 'fs';
import * as path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const file = fs.createReadStream(path.join(__dirname, 'files', 'archive.gz'));
const zl = zlib.createGunzip();
const write = fs.createWriteStream(path.join(__dirname, 'files', 'fileToCompress.txt'));

export const decompress = async () => {
  file.pipe(zl).pipe(write);
};

decompress()