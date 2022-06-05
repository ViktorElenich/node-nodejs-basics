export const spawnChildProcess = async (args) => {
  process.stdin.pipe(args.stdin)
};