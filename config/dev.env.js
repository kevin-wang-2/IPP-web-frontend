'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  MAP_API_ROOT: '"http://127.0.0.1:8000"',
  AUTH_API_ROOT: '"http://127.0.0.1:8005"',
  BUSINESS_API_ROOT: '"http://127.0.0.1:8003"'
});
