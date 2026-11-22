import Link from 'next/link';
import { Truck, Ship, Plane, CheckCircle } from 'lucide-react';

export default function ServiciosPage() {
  const servicios = [
    {
      titulo: 'Transporte Terrestre',
      icono: <Truck className="w-12 h-12 text-blue-600" />,
      descripcion: 'Flota moderna para cargas completas (FTL) y grupaje (LTL) en toda Europa.',
      ventajas: ['Seguimiento GPS 24/7', 'Entrega puerta a puerta', 'Rutas expresas nacionales'],
    },
    {
      titulo: 'Transporte Marítimo',
      icono: <Ship className="w-12 h-12 text-blue-600" />,
      descripcion: 'Gestión integral de contenedores FCL y LCL en los principales puertos internacionales.',
      ventajas: ['Despacho de aduanas incluido', 'Carga refrigerada y especial', 'Tarifas competitivas en gran volumen'],
    },
    {
      titulo: 'Transporte Aéreo',
      icono: <Plane className="w-12 h-12 text-blue-600" />,
      descripcion: 'Conexiones aéreas prioritarias para mercancía urgente, farmacéutica o tecnológica.',
      ventajas: ['Tránsito en 24-48 horas', 'Máxima seguridad aeroportuaria', 'Cobertura global en 120 destinos'],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold text-slate-900 mb-4">Nuestros Servicios Logísticos</h1>
      <p className="text-slate-600 mb-12 max-w-2xl">
        Adaptamos cada ruta a las necesidades de tiempo, volumen y presupuesto de tu empresa.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {servicios.map((s) => (
          <div key={s.titulo} className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-between">
            <div>
              <div className="mb-4">{s.icono}</div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">{s.titulo}</h2>
              <p className="text-slate-600 text-sm mb-6">{s.descripcion}</p>
              <ul className="space-y-2 mb-8">
                {s.ventajas.map((v) => (
                  <li key={v} className="flex items-center gap-2 text-sm text-slate-700">
                    <CheckCircle className="w-4 h-4 text-green-600 shrink-0" /> {v}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/contacto" className="block text-center bg-slate-900 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition">
              Cotizar este servicio
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
