import { Request, Response } from 'express';
import db from '../config/database';
import { Resource } from '../models/resource';

export const createResource = (req: Request, res: Response) => {
  const { name, description } = req.body;
  const sql = 'INSERT INTO resources (name, description) VALUES (?, ?)';
  
  db.run(sql, [name, description], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    res.json({ id: this.lastID, name, description });
  });
};

export const getResources = (req: Request, res: Response) => {
  const { name } = req.query;
  let sql = 'SELECT * FROM resources';
  let params: any[] = [];

  if (name) {
    sql += ' WHERE name LIKE ?';
    params.push(`%${name}%`);
  }

  db.all(sql, params, (err, rows) => {
    if (err) return res.status(400).json({ error: err.message });
    res.json(rows);
  });
};

export const getResourceById = (req: Request, res: Response) => {
  const sql = 'SELECT * FROM resources WHERE id = ?';
  db.get(sql, [req.params.id], (err, row) => {
    if (err) return res.status(400).json({ error: err.message });
    if (!row) return res.status(404).json({ error: 'Resource does not exist' });
    res.json(row);
  });
};

export const updateResource = (req: Request, res: Response) => {
  const { name, description } = req.body;
  const sql = 'UPDATE resources SET name = ?, description = ? WHERE id = ?';
  
  db.run(sql, [name, description, req.params.id], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Resource does not exist' });
    res.json({ id: req.params.id, name, description });
  });
};

export const deleteResource = (req: Request, res: Response) => {
  const sql = 'DELETE FROM resources WHERE id = ?';
  
  db.run(sql, [req.params.id], function(err) {
    if (err) return res.status(400).json({ error: err.message });
    if (this.changes === 0) return res.status(404).json({ error: 'Resource does not exist' });
    res.json({ message: 'Resource has been deleted' });
  });
};