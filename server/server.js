/**
 * @file server.js
 * @description Index file for server
 * @copyright Clarity LLC, 2018
 * @license MIT
 */
 
const express = require('express');
const app = express();
global.router = express.Router();
const YAML = require('yamljs'); // this is to parse our YML-based filters later.

const PORT = process.env.PORT || 8080;


app.use(express.json());

app.listen(PORT, () => console.log(`Sayonika Server listening on port ${PORT}`));