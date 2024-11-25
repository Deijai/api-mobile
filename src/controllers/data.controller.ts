import { Request, Response } from 'express';
import data from '../data/data.json';
import { Item } from '../models/data.model';

export const getAllData = (req: Request, res: Response): void => {
  const items: Item[] = data; // Tipagem opcional para o JSON
  res.json(items);
};
