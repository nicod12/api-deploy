"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = void 0;
const fs_1 = require("fs");
const readJSON = (path) => {
    try {
        const data = (0, fs_1.readFileSync)(path, 'utf-8');
        return JSON.parse(data);
    }
    catch (error) {
        console.error(error);
        throw new Error('Error reading JSON file');
    }
};
exports.readJSON = readJSON;
