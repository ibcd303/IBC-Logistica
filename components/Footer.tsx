import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-800/80">
          {/* Columna 1: Identidad de marca */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-flex items-center gap-2.5 mb-3">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center font-black text-white text-xs tracking-tighter">
                IBC
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                IBC Logística
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Operador especializado en transporte nacional e internacional por carretera, vía marítima y carga aérea. Soluciones integrales puerta a puerta.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Plataforma
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-white transition">
                  Servicios de transporte
                </Link>
              </li>
              <li>
                <Link href="/envios" className="hover:text-white transition">
                  Gestión de envíos
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-white transition">
                  Solicitar cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3: Datos operativos */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-200 mb-3">
              Atención operativa
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-blue-500 shrink-0" />
                <span>Zona de Actividades Logísticas · España</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-blue-500 shrink-0" />
                <span>+34 900 123 456</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-500 shrink-0" />
                <span>operaciones@ibclogistica.es</span>
              </li>
            </ul>
          </div>
        </div>

        {/*  copyright  */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>© 2026 IBC Logística. Todos los derechos reservados.</p>
          <p>Desarrollado por Ibeth Calvo · Proyecto Final de Curso</p>
        </div>
      </div>
    </footer>
  );
}
