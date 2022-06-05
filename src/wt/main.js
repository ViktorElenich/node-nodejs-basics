import { Worker } from 'worker_threads';
import { cpus } from 'os';

export const performCalculations = async () => {
  const promises = [];
  const cp = cpus().length;
  let res = [];
  for (let i = 0; i < cp; i++) {
    promises.push(new Promise((resolve, rejects) => {
      let num = 10 + i;
      const worker = new Worker('./src/wt/worker.js', { workerData: { num: num } });
      let output = {
        status: '',
        data: ''
      };
      worker.on('message', (data) => resolve({
        status: 'resolved',
        data: 'data'
      }));
      worker.on('error', (err) => resolve({
        status: 'error',
        data: null
      }));
    }))
  }
  await Promise.all(promises).then((val) => {
    console.log(val);
  })
};

performCalculations()