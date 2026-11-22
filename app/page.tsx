import Link from 'next/link';
import { Truck, Ship, Plane, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Barco, camión y avión de carga · Logística integral
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            IBC: por Tierra, Mar y Aire
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
            Movemos tu mercancía de forma segura y puntual, conectando tu negocio con el mundo a través de una red logística completa.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/servicios" className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg transition">
              Ver servicios
            </Link>
            <Link href="/contacto" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold px-6 py-3 rounded-lg transition">
              Solicitar cotización
            </Link>
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="bg-white border-b border-slate-200 py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-extrabold text-blue-600">25+</p>
            <p className="text-sm text-slate-600 mt-1">Años de experiencia</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">120</p>
            <p className="text-sm text-slate-600 mt-1">Destinos</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">15K</p>
            <p className="text-sm text-slate-600 mt-1">Envíos al año</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-blue-600">98%</p>
            <p className="text-sm text-slate-600 mt-1">Entregas a tiempo</p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
          Tres caminos, un solo socio
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <Truck className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Transporte Terrestre</h3>
            <p className="text-slate-600 text-sm">
              Distribución nacional e internacional por carretera.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <Ship className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Transporte Marítimo</h3>
            <p className="text-slate-600 text-sm">
              Envíos de gran volumen entre los principales puertos.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
            <Plane className="w-10 h-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">Transporte Aéreo</h3>
            <p className="text-slate-600 text-sm">
              La opción más rápida para mercancía urgente o de alto valor.
            </p>
          </div>
        </div>
        <div className="text-center mt-12">
          <Link href="/envios" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            Gestionar envíos <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
