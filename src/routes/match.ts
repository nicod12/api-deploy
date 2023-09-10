import express from 'express';
import { readJSON } from '../utils';
import { Match } from '../services/match.types';
import path from 'path';

const matchData: Match = readJSON(path.join(__dirname, '../services/match.json'));

export const matchRouter = express.Router();

matchRouter.get('/', (_req, res) => {
  try {
    res.json(matchData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});