import * as fs from 'fs';
import * as path from 'path';
import rl from 'readline';
import { Transform } from 'stream';

const readline = rl.createInterface({
  input: process.stdin
});


const createTransformStream = () => {
  return new Transform({
    decodeStrings: false,
    encoding: 'utf8',
    transform (chunk, enc, next) {
      next(null, chunk.split('').reverse().join(''));
    }
  })
}
const transformText = createTransformStream()
transformText.on('data', (data) => {
    console.log(data);
})

export const transform = async () => {
  console.log('Enter your text: ');
  readline.on('line', (input) => {
    transformText.write(input)
  })
};

transform()