'use client';

import { useState, useEffect } from 'react';
import { Pencil, Trash2, PlusCircle } from 'lucide-react';

export default function EnviosPage() {
  const [envios, setEnvios] = useState([]);
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({
    codigo: '',
    cliente: '',
    tipo: 'Terrestre',
    origen: '',
    destino: '',
    estado: 'Pendiente',
  });

  const cargarEnvios = async () => {
    const res = await fetch('/api/envios');
    const data = await res.json();
    if (Array.isArray(data)) setEnvios(data);
  };

  useEffect(() => {
    cargarEnvios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await fetch(`/api/envios/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setEditId(null);
    } else {
      await fetch('/api/envios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }
    setForm({ codigo: '', cliente: '', tipo: 'Terrestre', origen: '', destino: '', estado: 'Pendiente' });
    cargarEnvios();
  };

  const handleEdit = (envio) => {
    setEditId(envio.id);
    setForm({
      codigo: envio.codigo,
      cliente: envio.cliente,
      tipo: envio.tipo,
      origen: envio.origen,
      destino: envio.destino,
      estado: envio.estado,
    });
  };

  const handleDelete = async (id) => {
    if (!confirm('¿Seguro que deseas eliminar este envío?')) return;
    await fetch(`/api/envios/${id}`, { method: 'DELETE' });
    cargarEnvios();
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-8">Gestión de Envíos (CRUD)</h1>

      {/* Formulario Crear / Editar */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-10">
        <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <PlusCircle className="w-5 h-5 text-blue-600" />
          {editId ? 'Modificar Envío' : 'Registrar Nuevo Envío'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Código (ej. IBC-1004)"
            value={form.codigo}
            onChange={(e) => setForm({ ...form, codigo: e.target.value })}
            required
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Nombre del Cliente"
            value={form.cliente}
            onChange={(e) => setForm({ ...form, cliente: e.target.value })}
            required
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={form.tipo}
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="Terrestre">Terrestre</option>
            <option value="Marítimo">Marítimo</option>
            <option value="Aéreo">Aéreo</option>
          </select>
          <input
            type="text"
            placeholder="Ciudad de Origen"
            value={form.origen}
            onChange={(e) => setForm({ ...form, origen: e.target.value })}
            required
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <input
            type="text"
            placeholder="Ciudad de Destino"
            value={form.destino}
            onChange={(e) => setForm({ ...form, destino: e.target.value })}
            required
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
          <select
            value={form.estado}
            onChange={(e) => setForm({ ...form, estado: e.target.value })}
            className="border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="Pendiente">Pendiente</option>
            <option value="En tránsito">En tránsito</option>
            <option value="Entregado">Entregado</option>
          </select>
        </div>
        <div className="mt-4 flex gap-3">
          <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2 rounded-lg transition">
            {editId ? 'Guardar Cambios' : 'Añadir Envío'}
          </button>
          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setForm({ codigo: '', cliente: '', tipo: 'Terrestre', origen: '', destino: '', estado: 'Pendiente' });
              }}
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 text-sm font-semibold px-4 py-2 rounded-lg transition"
            >
              Cancelar
            </button>
          )}
        </div>
      </form>

      {/* Tabla de Registros */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700 text-xs uppercase border-b border-slate-200">
              <th className="py-3 px-4">Código</th>
              <th className="py-3 px-4">Cliente</th>
              <th className="py-3 px-4">Vía</th>
              <th className="py-3 px-4">Origen</th>
              <th className="py-3 px-4">Destino</th>
              <th className="py-3 px-4">Estado</th>
              <th className="py-3 px-4 text-right">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 text-sm">
            {envios.map((envio) => (
              <tr key={envio.id} className="hover:bg-slate-50">
                <td className="py-3 px-4 font-semibold text-blue-600">{envio.codigo}</td>
                <td className="py-3 px-4">{envio.cliente}</td>
                <td className="py-3 px-4">{envio.tipo}</td>
                <td className="py-3 px-4">{envio.origen}</td>
                <td className="py-3 px-4">{envio.destino}</td>
                <td className="py-3 px-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                    {envio.estado}
                  </span>
                </td>
                <td className="py-3 px-4 text-right flex justify-end gap-2">
                  <button onClick={() => handleEdit(envio)} className="p-1.5 text-amber-600 hover:bg-amber-50 rounded" title="Editar">
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleDelete(envio.id)} className="p-1.5 text-red-600 hover:bg-red-50 rounded" title="Eliminar">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
