import Database from 'better-sqlite3';
import path from 'path';

const dbPath = path.join(process.cwd(), 'ibc_logistica.sqlite');
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS envios (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    codigo TEXT NOT NULL,
    cliente TEXT NOT NULL,
    tipo TEXT NOT NULL,
    origen TEXT NOT NULL,
    destino TEXT NOT NULL,
    estado TEXT NOT NULL
  )
`);

const count = db.prepare('SELECT COUNT(*) as total FROM envios').get();
if (count.total === 0) {
  const insert = db.prepare(`
    INSERT INTO envios (codigo, cliente, tipo, origen, destino, estado)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
  insert.run('IBC-1001', 'TechGlobal S.A.', 'Aéreo', 'Madrid', 'Nueva York', 'En tránsito');
  insert.run('IBC-1002', 'AgroExport Sur', 'Marítimo', 'Algeciras', 'Rotterdam', 'Entregado');
  insert.run('IBC-1003', 'LogiPeninsula', 'Terrestre', 'Granada', 'París', 'Pendiente');
}

export default db;
