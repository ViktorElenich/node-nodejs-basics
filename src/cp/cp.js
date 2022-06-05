import { spawn  } from 'child_process';

export const spawnChildProcess = async (args) => {
  const child = spawn('find', args);

  child.stdout.on('data', data => {
    console.log(`stdout:\n${data}`);
  });

  child.stderr.on('data', data => {
    console.error(`stderr: ${data}`);
  });

  child.on('error', (error) => {
    console.error(`error: ${error.message}`);
  });
  
  child.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
};

spawnChildProcess()