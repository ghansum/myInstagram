module.exports = {
  db: process.env.db || 'localhost',
  clientSecret: process.env.clientSecret || '3b3a375a9192475aaa031a04b953141b',
  tokenSecret: process.env.tokenSecret || 'pick a hard to guess string'
};