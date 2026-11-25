import { NextResponse } from 'next/server';
import db from '@/lib/db';

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const { codigo, cliente, tipo, origen, destino, estado } = await request.json();

    if (!codigo || !cliente || !tipo || !origen || !destino || !estado) {
      return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    const stmt = db.prepare(`
      UPDATE envios 
      SET codigo = ?, cliente = ?, tipo = ?, origen = ?, destino = ?, estado = ?
      WHERE id = ?
    `);
    const info = stmt.run(codigo, cliente, tipo, origen, destino, estado, id);

    if (info.changes === 0) {
      return NextResponse.json({ error: 'Envío no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Envío actualizado correctamente' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al actualizar el envío' }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;

    const stmt = db.prepare('DELETE FROM envios WHERE id = ?');
    const info = stmt.run(id);

    if (info.changes === 0) {
      return NextResponse.json({ error: 'Envío no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Envío eliminado correctamente' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Error al eliminar el envío' }, { status: 500 });
  }
}
