'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: '', email: '', servicio: 'Transporte Terrestre', mensaje: '' });
  const [estado, setEstado] = useState(null);
  const [enviando, setEnviando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    setEstado(null);

    const res = await fetch('/api/contacto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    setEnviando(false);
    if (res.ok) {
      setEstado({ tipo: 'ok', texto: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.' });
      setForm({ nombre: '', email: '', servicio: 'Transporte Terrestre', mensaje: '' });
    } else {
      setEstado({ tipo: 'error', texto: 'Error al enviar el correo. Revisa la configuración de .env.local.' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold text-slate-900 mb-3">Solicitar Cotización / Contacto</h1>
      <p className="text-slate-600 mb-8">
        Cuéntanos qué necesitas transportar y nuestro equipo te responderá por correo electrónico.
      </p>

      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Nombre o Empresa</label>
          <input
            type="text"
            required
            value={form.nombre}
            onChange={(e) => setForm({ ...form, nombre: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tipo de Transporte</label>
          <select
            value={form.servicio}
            onChange={(e) => setForm({ ...form, servicio: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          >
            <option>Transporte Terrestre</option>
            <option>Transporte Marítimo</option>
            <option>Transporte Aéreo</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Detalles de la carga</label>
          <textarea
            rows="4"
            required
            value={form.mensaje}
            onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <button
          type="submit"
          disabled={enviando}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <Send className="w-4 h-4" />
          {enviando ? 'Enviando...' : 'Enviar solicitud'}
        </button>

        {estado && (
          <p className={`text-sm p-3 rounded-lg ${estado.tipo === 'ok' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {estado.texto}
          </p>
        )}
      </form>
    </div>
  );
}
