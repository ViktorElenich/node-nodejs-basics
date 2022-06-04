import { env } from 'node:process';

export const parseEnv = () => {
  const rss = {
    RSS_name1: process.env.RSS_name1,
    RSS_name2: process.env.RSS_name2,
  };
  console.log(`RSS_name1=${rss.RSS_name1}; RSS_name2=${rss.RSS_name2}`);
};

parseEnv()