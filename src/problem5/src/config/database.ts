import sqlite3 from 'sqlite3';

const db = new sqlite3.Database('database.sqlite', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  }
  console.log('Connected to SQLite database');
});

// Create resources table
db.run(`
  CREATE TABLE IF NOT EXISTS resources (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`);

export default db;