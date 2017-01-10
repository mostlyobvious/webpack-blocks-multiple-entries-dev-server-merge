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

merge = require('webpack-merge');
util  = require('util');

console.log(util.inspect({
  receivedEntry: { entry: config.entry },
  expectedEntry: merge.smart(
    { entry: { 'a': ['./a.js'], 'b': ['./b.js'] } },
    { entry: { 'a': ['webpack/hot/only-dev-server'], 'b': ['webpack/hot/only-dev-server'] } }
  )
}, false, null));

module.exports = config;


