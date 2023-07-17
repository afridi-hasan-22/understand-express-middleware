const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const middleWare = [morgan("dev"), cors(), express.json()];

module.exports = middleWare;