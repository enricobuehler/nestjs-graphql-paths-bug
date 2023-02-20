/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = function (options, webpack) {
  return {
    ...options,
    stats: 'verbose',
    output: {
      filename: 'main.js',
    },
    resolve: {
      ...options.resolve,
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: ['.ts', '.tsx', '.js'],
      // Add support for TypeScripts fully qualified ESM imports.
      extensionAlias: {
        '.js': ['.js', '.ts'],
        '.cjs': ['.cjs', '.cts'],
        '.mjs': ['.mjs', '.mts'],
      },
    },
  };
};
