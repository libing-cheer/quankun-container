"use strict";
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require("path");

module.exports = {
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*", // 允许所有域名的脚本访问该资源
    },
  },
};
