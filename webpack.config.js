"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function default_1(_, argv) {
    const createExpoWebpackConfigAsync = require("@expo/webpack-config");
    const config = await createExpoWebpackConfigAsync(_, argv);
    return config;
}
exports.default = default_1;
