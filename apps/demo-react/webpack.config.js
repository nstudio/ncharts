const webpack = require('@nativescript/webpack');
const path = require('path');

module.exports = (env) => {
  webpack.init(env);
  webpack.useConfig('react');

  // Configure webpack to handle @nstudio package TypeScript/TSX files
  webpack.chainWebpack((config) => {
    // For @nstudio packages (symlinked to dist/packages/), use a separate ts-loader instance
    config.module
      .rule('nstudio-ts')
      .test(/\.(ts|tsx)$/)
      .include.add(/dist[\\/]packages[\\/](nstreamdown|ncharts)/)
      .end()
      .use('ts-loader')
      .loader('ts-loader')
      .options({
        instance: 'nstudio',
        configFile: path.resolve(__dirname, 'tsconfig.nstudio.json'),
        transpileOnly: true,
        onlyCompileBundledFiles: true,
      });

    // Make sure the main ts rule excludes @nstudio packages
    if (config.module.rules.has('ts')) {
      config.module.rule('ts').exclude.add(/dist[\\/]packages[\\/](nstreamdown|ncharts)/);
    }
  });

  return webpack.resolveConfig();
};
