Steps to reproduce:

```
$ yarn start

yarn start v0.18.1
$ NODE_ENV=development webpack-dev-server --config webpack.config.js
{ receivedEntry:
   { entry:
      { a: [ './a.js', 'webpack/hot/only-dev-server' ],
        b: [ './a.js', 'webpack/hot/only-dev-server' ] } },
  expectedEntry:
   { entry:
      { a: [ './a.js', 'webpack/hot/only-dev-server' ],
        b: [ './b.js', 'webpack/hot/only-dev-server' ] } } }
 http://localhost:8080/
webpack result is served from http://localhost:8080/javascripts/
content is served from /Users/pawel/Code/webpack-blocks-multiple-entries-dev-server-merge
404s will fallback to /index.html
chunk    {0} a.js (a) 222 kB [rendered]
chunk    {1} b.js (b) 222 kB [rendered]
webpack: bundle is now VALID.
```

See then how entries are defined in config:
```
createConfig([
  entryPoint({
    'a': './a.js',
    'b': './b.js',
  })
]);
```

¯\_(ツ)_/¯
