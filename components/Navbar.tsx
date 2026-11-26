'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PackageCheck } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header className="bg-slate-950/95 backdrop-blur-md text-white border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex justify-between items-center">
        {/* Logotipo tipográfico con isotipo propio */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center font-black text-white text-sm tracking-tighter group-hover:bg-blue-500 transition">
            IBC
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight leading-none text-white">
              IBC Logística
            </span>
            <span className="text-[10px] uppercase tracking-widest text-slate-400 mt-0.5">
              Cargo & Freight
            </span>
          </div>
        </Link>

        {/* Navegación + Botón de Acceso Operativo */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Separador vertical sutil */}
          <div className="hidden sm:block h-4 w-px bg-slate-800" />

          {/* Botón destacado para la herramienta principal */}
          <Link
            href="/envios"
            className={`inline-flex items-center gap-2 text-xs md:text-sm font-semibold px-3.5 py-2 rounded-lg border transition ${
              pathname === '/envios'
                ? 'bg-blue-600 border-blue-500 text-white'
                : 'bg-slate-900 border-slate-700 text-slate-200 hover:border-blue-500 hover:text-white'
            }`}
          >
            <PackageCheck className="w-4 h-4 text-blue-400" />
            <span>Gestión de Envíos</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
