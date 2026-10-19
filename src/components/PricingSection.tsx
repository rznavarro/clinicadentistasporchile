import React from 'react';
import { CreditCard, Banknote, ShieldAlert, Car, ExternalLink, CalendarDays } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const PricingSection: React.FC = () => {
  const treatmentsPricing = [
    {
      treatment: 'Urgencia dental inmediata',
      price: '$45.000',
      detail: 'Incluye evaluación, dolor, receta y radiografía panorámica si se requiere',
      highlight: true,
    },
    {
      treatment: 'Limpieza dental total',
      price: '$45.000',
      detail: 'Destartraje supragingival completo y profilaxis profunda',
    },
    {
      treatment: 'Implante dental (fase quirúrgica)',
      price: '$337.500',
      detail: 'Instalación de fijación de titanio grado médico en pabellón acreditado',
    },
    {
      treatment: 'Corona sobre implante',
      price: '$337.500',
      detail: 'Pilar protésico y corona fija de alta estética y ajuste oclusal',
    },
    {
      treatment: 'Endodoncia mecanizada',
      price: 'desde $175.000',
      detail: 'Tratamiento de conducto para preservar la pieza dental',
    },
    {
      treatment: 'Corona libre de metal (CEREC zirconio/disilicato)',
      price: '$349.000',
      detail: 'Tecnología CAD/CAM digital y máxima biocompatibilidad',
    },
    {
      treatment: 'Carilla de resina directa',
      price: '$95.000',
      detail: 'Diseño anatómico directo pieza a pieza de alta resolución estética',
    },
  ];

  const exams = [
    {
      title: 'Radiografía panorámica',
      image: 'https://dentistasporchile.cl/_next/image?url=%2Fhome%2Fradiografia-panoramica.webp&w=2400&q=75',
      price: '[FALTA: precio]',
      desc: 'Visión general de piezas y maxilares para diagnóstico inicial.',
    },
    {
      title: 'Escáner 3D por maxilar',
      image: 'https://dentistasporchile.cl/_next/image?url=%2Fhome%2Fradiografia-maxilar-superior.webp&w=2400&q=75',
      price: '[FALTA: precio]',
      desc: 'Tomografía computarizada cone beam de alta resolución para un maxilar.',
    },
    {
      title: 'Escáner 3D bimaxilar',
      image: 'https://dentistasporchile.cl/_next/image?url=%2Fhome%2Fradiografia-craneo-completo.webp&w=2400&q=75',
      price: '[FALTA: precio]',
      desc: 'Estudio volumétrico tridimensional completo de ambos maxilares.',
    },
  ];

  const facilities = [
    { icon: CreditCard, title: 'Débito y crédito' },
    { icon: Banknote, title: 'Transferencia y efectivo' },
    { icon: CalendarDays, title: 'Hasta 12 cuotas con tarjetas' },
    { icon: ShieldAlert, title: 'Boleta para reembolso Isapre/Seguro' },
    { icon: Car, title: 'Estacionamiento sin costo' },
  ];

  return (
    <section id="precios" className="scroll-mt-20 py-16 sm:py-24 bg-white border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Transparencia total
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
            Precios claros desde el primer día
          </h2>
          <p className="text-base text-[#71717A] mt-3">
            Nunca empezamos un tratamiento sin que conozcas y apruebes el valor exacto.
          </p>
        </div>

        {/* Pricing List Table / Cards */}
        <div className="bg-[#FAFAFA] border border-[#E4E4E4] rounded-2xl overflow-hidden mb-12">
          <div className="divide-y divide-[#E4E4E4]">
            {treatmentsPricing.map((item, idx) => (
              <div
                key={idx}
                className={`p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors ${
                  item.highlight ? 'bg-[#FEF2F2]/60' : 'hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm sm:text-base font-bold text-[#11181C]">
                      {item.treatment}
                    </h3>
                    {item.highlight && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-[#B71C1C] text-white px-2 py-0.5 rounded-full">
                        Atención hoy
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#71717A] mt-0.5">
                    {item.detail}
                  </p>
                </div>
                <div className="sm:text-right shrink-0">
                  <span
                    className={`text-lg sm:text-xl font-bold tabular-nums ${
                      item.highlight ? 'text-[#B71C1C]' : 'text-[#1D4ED8]'
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-neutral-100/70 border-t border-[#E4E4E4] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#71717A]">
            <span>
              * Valores referenciales; el precio final se confirma en tu evaluación según tu caso clínico particular.
            </span>
            <a
              href="https://dentistasporchile.cl/tratamientos-adultos/aranceles-dentistas-por-chile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#1D4ED8] hover:text-[#0B38B4] shrink-0"
            >
              <span>Ver arancel completo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Imaging Exams Sub-Section */}
        <div className="mb-14">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#11181C]">
              Centro radiológico 2D y escáner 3D en la clínica
            </h3>
            <p className="text-xs sm:text-sm text-[#71717A]">
              Tu evaluación clínica con especialista no tiene costo ($0). Si tu diagnóstico requiere exámenes de imagen, se realizan aquí mismo:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exams.map((ex, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E4E4E4] rounded-2xl overflow-hidden shadow-xs flex flex-col justify-between"
              >
                <div className="relative h-44 bg-neutral-900 overflow-hidden">
                  <ImageWithFallback
                    src={ex.image}
                    alt={ex.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    fallbackText={ex.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-3 text-white text-xs font-semibold">
                    Tecnología Cone Beam 3D
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-[#11181C] mb-1">
                      {ex.title}
                    </h4>
                    <p className="text-xs text-[#71717A] leading-relaxed mb-4">
                      {ex.desc}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                    <span className="text-xs text-[#71717A]">Arancel:</span>
                    <span className="text-xs font-bold text-[#B71C1C] bg-[#FEF2F2] px-2.5 py-1 rounded-md">
                      {ex.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Facilities Row */}
        <div className="bg-[#EEF5FF] border border-[#D0E2FA] rounded-2xl p-6 sm:p-8">
          <h4 className="text-center text-sm font-bold text-[#243E85] uppercase tracking-wider mb-6">
            Facilidades de pago y atención
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {facilities.map((fac, idx) => {
              const Icon = fac.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-3.5 border border-[#D0E2FA] flex flex-col items-center text-center shadow-2xs"
                >
                  <Icon className="w-5 h-5 text-[#1D4ED8] mb-2" />
                  <span className="text-xs font-medium text-[#11181C] leading-snug">
                    {fac.title}
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-[#71717A] mt-5 max-w-2xl mx-auto">
            Atención por libre elección (sin convenio directo Fonasa/Isapre). Emitimos boleta oficial con detalle de prestaciones para tramitar el reembolso en tu Isapre o seguro de salud complementario.
          </p>
        </div>
      </div>
    </section>
  );
};
