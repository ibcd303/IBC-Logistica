import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-slate-900 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-400">
          <Globe className="w-7 h-7" />
          <span>IBC</span>
        </Link>
        <nav className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Inicio</Link>
          <Link href="/servicios" className="hover:text-blue-400 transition">Servicios</Link>
          <Link href="/envios" className="hover:text-blue-400 transition">Gestión de Envíos</Link>
          <Link href="/contacto" className="hover:text-blue-400 transition">Contacto</Link>
        </nav>
      </div>
    </header>
  );
}
