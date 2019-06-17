const images = require('next-images');
const progressbar = require('next-progressbar');
const typescript = require('@zeit/next-typescript');
const withCompose = require('next-compose-plugins');

module.exports = withCompose([
  typescript,
  images,
  progressbar
]);
