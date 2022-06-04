export const parseArgs = () => {
  const flagIndex = process.argv.indexOf('--propName');
  if (flagIndex !== -1) {
    const message = process.argv.slice(2);
    console.log(`propName is ${message[flagIndex - 1]}, prop2Name is ${message[flagIndex + 1]}`);
  }
};

parseArgs()