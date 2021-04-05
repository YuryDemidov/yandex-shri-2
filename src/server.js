import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
const config = require(`../webpack/dev.config.js`);

const app = express();
const compiler = webpack(config);

const INDEX_FILE = path.join(__dirname, `index.html`);
const data = require(`./data/input.json`);

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.get(`/`, (req, res, next) => {
  res.set(`content-type`, `text/html`);
  res.send(INDEX_FILE);
  res.end();
});

app.get(`/api/data`, (req, res) => {
  res.set(`content-type`, `application/json`);
  res.send(data);
  res.end();
});


const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`)
  console.log(`Press Ctrl+C to quit.`)
})
