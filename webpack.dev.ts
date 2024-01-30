import { merge } from 'webpack-merge';
import { Configuration } from 'webpack';
import common from './webpack.common';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'webpack-dev-server';

export default merge<Configuration>(common, {
  mode: 'development',

  devtool: 'source-map',

  devServer: {
    hot: true,
    open: true,
    historyApiFallback: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
        runtimeErrors: true,
      },
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-refresh/babel'].filter(Boolean),
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                localIdentName: '[folder]__[local]',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },

  plugins: [new ReactRefreshWebpackPlugin({ overlay: false })],
});
