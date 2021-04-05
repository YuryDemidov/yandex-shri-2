const path = require(`path`);
const HtmlWebpackPlugin = require(`html-webpack-plugin`);
const CopyWebpackPlugin = require(`copy-webpack-plugin`);
const TerserWebpackPlugin = require(`terser-webpack-plugin`);
const ESLintPlugin = require('eslint-webpack-plugin');
const { BundleAnalyzerPlugin } = require(`webpack-bundle-analyzer`);

// Setting development flag via Node JS
const isDev = process.env.NODE_ENV === `development`;

const PATHS = {
  src: path.join(__dirname, `../src`),
  build: path.join(__dirname, `../build`)
};

const filename = (dir, ext) => isDev ? `${dir}[name].${ext}` : `${dir}[name].[contenthash:8].${ext}`;

const plugins = () => {
  const base = [
    new HtmlWebpackPlugin({
      template: path.join(PATHS.src, 'index.html')
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: `${PATHS.src}/data`, to: `${PATHS.build}/data` }
      ]
    }),

    new ESLintPlugin()
  ];

  if (!isDev) {
    base.push(new BundleAnalyzerPlugin());
  }

  return base;
};

const babelOptions = (preset, plugin) => {
  const opts = {
    presets: [
      [
        `@babel/preset-env`,
        {
          useBuiltIns: `usage`,
          corejs: 3.9
        }
      ]
    ]
  };

  if (preset) {
    opts.presets.push(preset);
  }
  if (plugin) {
    opts.plugins.push(plugin);
  }

  return opts;
};

const jsLoaders = () => {
  return [
    {
      loader: `babel-loader`,
      options: babelOptions()
    }
  ];
};

const optimization = () => {
  const config = {
    runtimeChunk: `single`,
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: `vendor`,
          test: /node_modules/,
          chunks: `all`,
          enforce: true
        }
      }
    }
  };

  if (!isDev) {
    config.minimizer = [
      new TerserWebpackPlugin({
        terserOptions: {
          parse: {
            // we want terser to parse ecma 8 code. However, we don`t want it
            // to apply any minification steps that turns valid ecma 5 code
            // into invalid ecma 5 code. This is why the `compress` and `output`
            // sections only apply transformations that are ecma 5 safe
            // https://github.com/facebook/create-react-app/pull/4234
            ecma: 8
          },
          compress: {
            ecma: 5,
            warnings: false,
            // Disabled because of an issue with Uglify breaking seemingly valid code:
            // https://github.com/facebook/create-react-app/issues/2376
            // Pending further investigation:
            // https://github.com/mishoo/UglifyJS2/issues/2011
            comparisons: false
          },
          mangle: true,
          output: {
            ecma: 5,
            comments: false,
            // Turned on because emoji and regex is not minified properly using default
            // https://github.com/facebook/create-react-app/issues/2488
            ascii_only: true
          }
        }
      })
    ];
  }

  return config;
};

module.exports = {
  externals: {
    paths: PATHS
  },
  entry: {
    index: `${PATHS.src}/index.js`
  },
  output: {
    filename: filename(``, `js`),
    path: PATHS.build,
    publicPath: `/`,
  },
  optimization: optimization(),
  plugins: plugins(),
  target: `web`,
  module: {
    rules: [{
      test: /\.html$/,
      use: [
        {
          loader: `html-loader`
        }
      ]
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      use: jsLoaders()
    }]
  },
  resolve: {
    fallback: {
      buffer: false,
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      util: false
    }
  }
};
