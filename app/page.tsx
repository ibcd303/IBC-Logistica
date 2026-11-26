import Link from 'next/link';
import { Truck, Ship, Plane, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      {/* Hero Asimétrico en 2 Columnas */}
      <section className="bg-slate-950 text-white py-16 md:py-24 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Texto alineado a la izquierda */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 bg-slate-900 border border-slate-700 text-slate-300 text-xs font-medium px-3 py-1.5 rounded-md mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              Operador logístico internacional · Importación y exportación
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Transporte de carga por{' '}
              <span className="text-blue-400">Tierra, Mar y Aire</span>
            </h1>

            <p className="text-base md:text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
              Gestionamos tus operaciones de mercancía nacional e internacional con trazabilidad completa, despacho aduanero y cumplimiento de plazos en cada ruta.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/envios"
                className="bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-lg transition inline-flex items-center gap-2"
              >
                Panel de envíos <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contacto"
                className="bg-transparent hover:bg-slate-900 text-slate-200 border border-slate-700 font-semibold px-6 py-3.5 rounded-lg transition"
              >
                Solicitar cotización
              </Link>
            </div>
          </div>

          {/* Columna Derecha: Fotografía real con marco editorial */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">

              <img
                src="fondocb.jpg"
                alt="Terminal logística de contenedores y transporte de carga"
                className="w-full h-[360px] md:h-[420px] object-cover"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6">
                <p className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                  Red operativa continua
                </p>
                <p className="text-sm text-slate-200 mt-1">
                  Cobertura multimodal conectando puertos, aeropuertos y rutas terrestres.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barra de Datos Compacta (en lugar de 4 cajas gigantes) */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:divide-x md:divide-slate-200">
            <div className="md:px-6 first:pl-0">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">25+ años</p>
              <p className="text-xs text-slate-500 mt-1">Trayectoria en comercio exterior</p>
            </div>
            <div className="md:px-6">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">120 países</p>
              <p className="text-xs text-slate-500 mt-1">Red de corresponsales activos</p>
            </div>
            <div className="md:px-6">
              <p className="text-2xl md:text-3xl font-bold text-slate-900">15.000+</p>
              <p className="text-xs text-slate-500 mt-1">Expediciones gestionadas al año</p>
            </div>
            <div className="md:px-6">
              <p className="text-2xl md:text-3xl font-bold text-blue-600">98,4%</p>
              <p className="text-xs text-slate-500 mt-1">Entregas cumplidas en plazo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios con Fotografía y Diseño Editorial */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">
              Modalidades de transporte
            </p>
            <h2 className="text-3xl font-bold text-slate-900">
              Soluciones adaptadas a cada carga
            </h2>
          </div>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-700 hover:text-blue-600 transition"
          >
            Explorar todos los servicios <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Tarjeta 1: Terrestre */}
          <article className="bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition">
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/camion.jpg"
                  alt="Camión de transporte terrestre en ruta"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white p-2 rounded-lg">
                  <Truck className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Transporte Terrestre</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Distribución nacional e internacional por carretera con opciones de carga completa (FTL) y grupaje (LTL).
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Seguimiento GPS en ruta
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Mercancía paletizada y refrigerada
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              <Link href="/servicios" className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1">
                Ver condiciones terrestres <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Tarjeta 2: Marítimo */}
          <article className="bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition">
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/barco.jpg"
                  alt="Buque portacontenedores en puerto marítimo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white p-2 rounded-lg">
                  <Ship className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Transporte Marítimo</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Operaciones de contenedores completos (FCL) y carga consolidada (LCL) entre los principales puertos comerciales.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Gestión documental y despacho aduanero
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Fletes optimizados para gran volumen
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              <Link href="/servicios" className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1">
                Ver rutas marítimas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>

          {/* Tarjeta 3: Aéreo */}
          <article className="bg-white rounded-xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition">
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="/images/avion.jpeg"

                alt="Avión de carga en pista de aeropuerto"
                className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white p-2 rounded-lg">
                  <Plane className="w-5 h-5 text-blue-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Transporte Aéreo</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Tránsitos prioritarios para mercancía urgente, perecedera o de alto valor con entrega puerta a puerta.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Salidas diarias internacionales
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    Control prioritario en terminal
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
              <Link href="/servicios" className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1">
                Ver conexiones aéreas <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}

