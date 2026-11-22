import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-10 mt-auto border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <span className="text-white font-bold text-xl">IBC</span>
          <p className="text-sm mt-1">Por Tierra, Mar y Aire.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/servicios" className="hover:text-white transition">Servicios</Link>
          <Link href="/envios" className="hover:text-white transition">Gestión de Envíos</Link>
          <Link href="/contacto" className="hover:text-white transition">Contacto</Link>
        </div>
        <p className="text-xs text-slate-500">
          © 2026 IBC Logística. Proyecto final del curso.
        </p>
      </div>
    </footer>
  );
}
