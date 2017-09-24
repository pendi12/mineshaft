/**
 * Base webpack config used across other specific configs
 */

import path from 'path';
import webpack from 'webpack';
import { dependencies as externals } from './app/package.json';

export default {
  externals: Object.keys(externals || {}),

  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      }
    },
      {
        test: /\.svg$/,
        loader: 'raw-loader',
      },
      {
        test: /\.wasm$/,
        loaders: ['wasm-loader']
      },
      {
        test: /\.graphql|gql$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'graphql-tag/loader'
          },
        ]
      },
    ]
  },

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'renderer.dev.js',
    // https://github.com/webpack/webpack/issues/1114
    libraryTarget: 'commonjs2'
  },

  /**
   * Determine the array of extensions that should be used to resolve modules.
   */
  resolve: {
     alias: {
      /*--- Core ---*/
      content: path.resolve(__dirname, 'app/content'),
      interface: path.resolve(__dirname, 'app/interface'),
      wasm: path.resolve(__dirname, 'app/wasm'),
      ss: path.resolve(__dirname, 'app/css'),

      /*--- Assets ---*/
      assets: path.resolve(__dirname, 'app/assets'),

      /*--- Higher-Order ---*/
      containers: path.resolve(__dirname, 'app/interface/containers'),
      foundry: path.resolve(__dirname, 'app/interface/foundry'),
      forms: path.resolve(__dirname, 'app/interface/forms'),
      templates: path.resolve(__dirname, 'app/interface/components/templates'),

      /*--- Interface ---*/
      components: path.resolve(__dirname, 'app/interface/components'),
      library: path.resolve(__dirname, 'app/interface/components/library'),
      providers: path.resolve(__dirname, 'app/interface/components/providers'),
      atomic: path.resolve(__dirname, 'app/interface/components/atomic'),
      blocks: path.resolve(__dirname, 'app/interface/components/blocks'),
      quarks: path.resolve(__dirname, 'app/interface/components/atomic/quarks'),
      particles: path.resolve(__dirname, 'app/interface/components/atomic/particles'),
      atoms: path.resolve(__dirname, 'app/interface/components/atomic/atoms'),
      molecules: path.resolve(__dirname, 'app/interface/components/atomic/molecules'),
      organisms: path.resolve(__dirname, 'app/interface/components/atomic/organisms'),
      fusion: path.resolve(__dirname, 'app/interface/components/fusion'),
      sentience: path.resolve(__dirname, 'app/interface/components/sentience'),

      /*--- Factory ---*/
      factory: path.resolve(__dirname, 'app/interface/factory'),
      workshop: path.resolve(__dirname, 'app/interface/workshop'),
      pages: path.resolve(__dirname, 'app/interface/workshop/pages'),
    
      /*--- Store ---*/
      store: path.resolve(__dirname, 'app/store'),
      apollo: path.resolve(__dirname, 'app/store/apollo'),
      apolloQuery: path.resolve(__dirname, 'app/store/apollo/query'),

      /*--- Theme ---*/
      theme: path.resolve(__dirname, 'app/interface/theme'),
      layout: path.resolve(__dirname, 'app/interface/theme/layout'),

      /*--- Logic ---*/
      logic: path.resolve(__dirname, 'app/logic'),
      services: path.resolve(__dirname, 'app/logic/services'),

      /*--- Secrets ---*/
      secrets: path.resolve(__dirname, 'app/secrets'),
    },
    extensions: ['.js', '.jsx', '.json'],
    modules: [
      path.join(__dirname, 'app'),
      'node_modules',
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production')
    }),

    new webpack.NamedModulesPlugin(),
  ],
};
