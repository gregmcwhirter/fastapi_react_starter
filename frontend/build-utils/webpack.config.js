const path = require('path');
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const { merge } = require('webpack-merge');

const commonConfig = require(path.resolve(__dirname, './webpack.common.js'));

const getAddons = (addonsArgs) => {
  const addons = Array.isArray(addonsArgs)
    ? addonsArgs
    : [addonsArgs];

  return addons
    .filter(Boolean)
    .map((name) => require(path.resolve(__dirname, `./addons/webpack.${name}.js`)));
};

module.exports = ({ env, addon }) => {
  const envConfig = require(path.resolve(__dirname, `./webpack.${env}.js`));

  return merge(commonConfig, envConfig, ...getAddons(addon));
};
