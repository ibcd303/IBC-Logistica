import Link from 'next/link';
import { Truck, Ship, Plane, CheckCircle2, ArrowRight, Clock, ShieldCheck, Globe2 } from 'lucide-react';

export default function ServiciosPage() {
  const servicios = [
    {
      id: 'terrestre',
      codigo: 'MOD-01 · CARRETERA',
      titulo: 'Transporte Terrestre',
      icono: <Truck className="w-5 h-5 text-blue-400" />,
      imagen: 'https://unsplash.com',
      alt: 'Camión de transporte de mercancías en autopista',
      descripcion:
        'Operaciones nacionales e internacionales por carretera mediante camiones completos (FTL) y partidas de grupaje (LTL) con salidas regulares.',
      tiempoEstimado: '24 – 72 h (Europa)',
      capacidad: 'Hasta 24 t / 33 palets EUR',
      ventajas: [
        'Trazabilidad GPS continua durante todo el trayecto',
        'Servicio puerta a puerta sin manipulaciones intermedias',
        'Unidades preparadas para carga paletizada y temperatura controlada',
      ],
    },
    {
      id: 'maritimo',
      codigo: 'MOD-02 · FLETE MARÍTIMO',
      titulo: 'Transporte Marítimo',
      icono: <Ship className="w-5 h-5 text-blue-400" />,
      imagen: 'https://unsplash.com',
      alt: 'Buque portacontenedores operando en terminal portuaria',
      descripcion:
        'Gestión integral de embarques en contenedor completo (FCL 20’/40’) y carga consolidada (LCL) conectando los principales puertos comerciales.',
      tiempoEstimado: 'Según ruta oceánica',
      capacidad: 'FCL / LCL / Carga de proyecto',
      ventajas: [
        'Tramitación documental completa (Bill of Lading y despacho aduanero)',
        'Contenedores Dry Van, High Cube y Reefer refrigerados',
        'Optimización de costes para mercancía de gran volumen',
      ],
    },
    {
      id: 'aereo',
      codigo: 'MOD-03 · CARGA AÉREA',
      titulo: 'Transporte Aéreo',
      icono: <Plane className="w-5 h-5 text-blue-400" />,
      imagen: 'https://unsplash.com',
      alt: 'Avión comercial de carga en aeropuerto internacional',
      descripcion:
        'Soluciones prioritarias para expediciones urgentes, muestras comerciales, componentes industriales o mercancía de alto valor añadido.',
      tiempoEstimado: '24 – 48 h internacionales',
      capacidad: 'Carga general y prioritaria',
      ventajas: [
        'Salidas diarias desde los principales aeropuertos de carga',
        'Control estricto en terminal y manipulación aeroportuaria segura',
        'Coordinación de recogida y entrega urgente en destino',
      ],
    },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Cabecera editorial sobria */}
      <section className="bg-slate-950 text-white py-14 px-4 border-b border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">
              Catálogo operativo
            </p>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Modalidades de Transporte y Logística
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Seleccionamos la ruta y el medio más eficientes según la urgencia, el volumen y los requisitos aduaneros de cada expedición.
            </p>
          </div>
          <Link
            href="/envios"
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 text-sm font-semibold px-4 py-2.5 rounded-lg transition self-start md:self-auto"
          >
            Ir al panel de envíos <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>
      </section>

      {/* Fichas horizontales de servicios */}
      <section className="max-w-6xl mx-auto py-16 px-4 space-y-10">
        {servicios.map((s) => (
          <article
            key={s.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden grid lg:grid-cols-12 shadow-sm hover:border-slate-300 transition"
          >
            {/* Columna Imagen (4 columnas) */}
            <div className="lg:col-span-4 relative min-h-[240px] lg:min-h-full">
              <img
                src={s.imagen}
                alt={s.alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-slate-950/85 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg inline-flex items-center gap-2 border border-slate-800">
                {s.icono}
                <span className="text-[11px] font-bold tracking-wider uppercase">
                  {s.codigo}
                </span>
              </div>
            </div>

            {/* Columna Contenido Técnico (8 columnas) */}
            <div className="lg:col-span-8 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h2 className="text-2xl font-bold text-slate-900">{s.titulo}</h2>
                  <div className="flex flex-wrap gap-3 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                      <Clock className="w-3.5 h-3.5 text-blue-600" />
                      {s.tiempoEstimado}
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-slate-100 px-2.5 py-1 rounded-md font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                      {s.capacidad}
                    </span>
                  </div>
                </div>

                <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6">
                  {s.descripcion}
                </p>

                <div className="border-t border-slate-100 pt-5 mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Especificaciones incluidas
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-2.5">
                    {s.ventajas.map((v) => (
                      <li key={v} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-500 inline-flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                  Cobertura aduanera y seguro de mercancía disponibles
                </span>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition"
                >
                  Solicitar tarifa <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
