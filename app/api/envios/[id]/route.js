import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function GET() {
  try {
    const envios = db.prepare('SELECT * FROM envios ORDER BY id DESC').all();
    return NextResponse.json(envios);
  } catch (error) {
    return NextResponse.json({ error: 'Error al leer los envíos' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { codigo, cliente, tipo, origen, destino, estado } = await request.json();
    if (!codigo || !cliente || !tipo || !origen || !destino || !estado) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }
    const stmt = db.prepare(`
      INSERT INTO envios (codigo, cliente, tipo, origen, destino, estado)
      VALUES (?, ?, ?, ?, ?, ?)
    `);
    const info = stmt.run(codigo, cliente, tipo, origen, destino, estado);
    return NextResponse.json({ id: info.lastInsertRowid, message: 'Envío creado' }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al crear el envío' }, { status: 500 });
  }
}
