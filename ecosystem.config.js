'use strict';

module.exports = {
  name: 'openfabric',
  script: 'app.js',
  instances: '1',
  exec_mode: 'cluster',
  watch: true,
  ignore_watch: ['package-lock.json', 'node_modules', 'logs', '.git'],
  max_memory_restart: '1G',
  autorestart: true,
  env: {
    NODE_ENV: 'development',
    PORT: '80',
    DB_URI:
      'mongodb+srv://openfabric:uXg7T2YEuYwSC0sk@openfabric.syqnzja.mongodb.net/test',
    JWT_SECRET: 'maytheforcebewithyou',
  },
};
