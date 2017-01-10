const
  { createConfig,
    env,
    entryPoint,
    setOutput,
    defineConstants,
    customConfig,
  } = require('@webpack-blocks/webpack');

const devServer = require('@webpack-blocks/dev-server');
const webpack   = require('webpack');

const config = createConfig([
  defineConstants({ 'process.env.NODE_ENV': process.env.NODE_ENV }),
  entryPoint({
    'a': './a.js',
    'b': './b.js',
  }),
  env('development', [
    devServer({ stats: 'minimal' }),
    setOutput({
      filename: '[name].js',
      publicPath: "http://localhost:8080/javascripts/",
    }),
  ]),
]);

console.log({
  entry: config.entry
});

module.exports = config;


