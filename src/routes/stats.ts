import express from 'express';
import { readJSON } from '../utils';
import { TeamStats } from '../services/stats.types';
import path from 'path';

const gameStats: TeamStats  = readJSON(path.join(__dirname, '../services/stats.json'));

export const statsRouter = express.Router();

statsRouter.get('/', (_req, res) => {
  try {
    res.json(gameStats);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});