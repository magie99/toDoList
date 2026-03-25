 import { merge } from 'webpack-merge';
 import common from './webpack.common.js';

 export default merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
   devServer: {
    allowedHosts: 'all',
    client: {
      webSocketURL: 'auto://0.0.0.0/ws',
    },
    port: 8080,
  },
 });