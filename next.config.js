const images = require('next-images');
const progressbar = require('next-progressbar');
const typescript = require('@zeit/next-typescript');
const withCompose = require('next-compose-plugins');
const css = require('@zeit/next-css');

module.exports = withCompose([
    typescript,
    images,
    progressbar,
    css
]);
