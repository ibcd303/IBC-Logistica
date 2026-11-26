'use client';

import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactoPage() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    servicio: 'Transporte Terrestre',
    mensaje: '',
  });
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
      setEstado({
        tipo: 'ok',
        texto: 'Solicitud recibida. Nuestro equipo de operaciones te responderá en breve.',
      });
      setForm({ nombre: '', email: '', servicio: 'Transporte Terrestre', mensaje: '' });
    } else {
      setEstado({
        tipo: 'error',
        texto: 'No se pudo enviar la solicitud en este momento. Inténtalo de nuevo más tarde.',
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-[calc(100vh-4rem)] py-16 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-start">
        
        {/* Columna Izquierda: Información directa y canales de atención */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              Atención al cliente y cotizaciones
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Contacta con nuestro equipo operativo
            </h1>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Indícanos origen, destino, tipo de mercancía y volumen aproximado. Prepararemos una propuesta logística ajustada a tus plazos.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-5">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Teléfono directo
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">
                  +34 900 123 456
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Atención urgente para cargas en tránsito
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Correo electrónico
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">
                  operaciones@ibclogistica.es
                </p>
                <p className="text-xs text-slate-500 mt-0.5">
                  Respuesta habitual en menos de 24 horas laborables
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Base logística
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">
                  Zona de Actividades Logísticas · Polígono Industrial Norte, 46015 Valencia, España
                </p>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Horario de oficina
                </p>
                <p className="text-sm font-semibold text-slate-900 mt-0.5">
                  Lunes a Viernes · 08:00 a 18:30
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de solicitud */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl border border-slate-200 space-y-5"
          >
            <div className="border-b border-slate-100 pb-4 mb-2">
              <h2 className="text-lg font-bold text-slate-900">
                Solicitar presupuesto de transporte
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Todos los campos son obligatorios para tramitar la cotización.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Nombre o Empresa
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Distribuciones Sur S.L."
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                  Correo Corporativo
                </label>
                <input
                  type="email"
                  required
                  placeholder="nombre@empresa.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Modalidad de Transporte
              </label>
              <select
                value={form.servicio}
                onChange={(e) => setForm({ ...form, servicio: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:border-blue-600"
              >
                <option>Transporte Terrestre</option>
                <option>Transporte Marítimo</option>
                <option>Transporte Aéreo</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 mb-1.5">
                Detalles de la carga (Origen, destino, peso/volumen)
              </label>
              <textarea
                rows="4"
                required
                placeholder="Ej. 4 palets europeos desde Valencia hasta Tánger, peso total 1.800 kg..."
                value={form.mensaje}
                onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                className="w-full border border-slate-300 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-600"
              />
            </div>

            <button
              type="submit"
              disabled={enviando}
              className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-400 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 transition"
            >
              <Send className="w-4 h-4" />
              {enviando ? 'Enviando solicitud...' : 'Enviar solicitud de cotización'}
            </button>

            {estado && (
              <p
                className={`text-sm p-3.5 rounded-lg border ${
                  estado.tipo === 'ok'
                    ? 'bg-green-50 text-green-800 border-green-200'
                    : 'bg-red-50 text-red-800 border-red-200'
                }`}
              >
                {estado.texto}
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}
