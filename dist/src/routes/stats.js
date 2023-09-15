"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.statsRouter = void 0;
const express_1 = __importDefault(require("express"));
const utils_1 = require("../utils");
const path_1 = __importDefault(require("path"));
const gameStats = (0, utils_1.readJSON)(path_1.default.join(__dirname, '../services/stats.json'));
exports.statsRouter = express_1.default.Router();
exports.statsRouter.get('/', (_req, res) => {
    try {
        res.json(gameStats);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});
