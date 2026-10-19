import React from 'react';
import { ArrowUpRight, Sparkles, Smile, Shield, Activity, Heart, Eye, Stethoscope } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/tracking';

export const TreatmentsSection: React.FC = () => {
  const treatments = [
    {
      id: 'implantes',
      title: 'Implantes, cirugía e injertos óseos',
      description: 'Reemplaza dientes perdidos con una solución fija y definitiva, incluso si te dijeron que no tienes hueso.',
      priceTag: 'Desde $337.500 fase quirúrgica',
      icon: Shield,
      isMarquee: true,
      whatsappText: 'Hola, quiero agendar una evaluación para implantes dentales',
    },
    {
      id: 'rehabilitacion',
      title: 'Rehabilitación y estética dental',
      description: 'Coronas de zirconio, carillas de alta precisión y blanqueamiento para recuperar una sonrisa natural.',
      priceTag: 'Carillas desde $95.000',
      icon: Sparkles,
      whatsappText: 'Hola, quiero agendar una evaluación para estética y rehabilitación dental',
    },
    {
      id: 'ortodoncia',
      title: 'Ortodoncia y alineadores',
      description: 'Brackets tradicionales, cerámicos estéticos o alineadores invisibles a cualquier edad.',
      priceTag: 'Evaluación y plan a medida',
      icon: Smile,
      whatsappText: 'Hola, quiero consultar por ortodoncia y alineadores invisibles',
    },
    {
      id: 'endodoncia',
      title: 'Endodoncia',
      description: 'Elimina el dolor agudo y salva tu diente natural con tecnología mecanizada.',
      priceTag: 'Desde $175.000',
      icon: Activity,
      whatsappText: 'Hola, quiero agendar una hora para tratamiento de endodoncia',
    },
    {
      id: 'periodoncia',
      title: 'Periodoncia',
      description: 'Tratamos encías inflamadas o que sangran para proteger el soporte óseo y que tus dientes no se suelten.',
      priceTag: 'Cuidado y mantención periodontal',
      icon: Heart,
      whatsappText: 'Hola, quiero consultar con un especialista en periodoncia',
    },
    {
      id: 'limpieza',
      title: 'Odontología general y limpieza',
      description: 'Destartraje supragingival, profilaxis profunda y control preventivo para evitar patologías mayores.',
      priceTag: 'Limpieza total desde $45.000',
      icon: Stethoscope,
      whatsappText: 'Hola, quiero agendar una limpieza dental total',
    },
    {
      id: 'odontopediatria',
      title: 'Odontopediatría inclusiva',
      description: 'Atención con paciencia, empatía y adaptación especializada para niños, incluidos pacientes neurodivergentes.',
      priceTag: 'Espacio adaptado para niños',
      icon: Smile,
      whatsappText: 'Hola, quiero agendar una hora de odontopediatría inclusiva',
    },
    {
      id: 'radiologia',
      title: 'Radiología 2D y 3D en la clínica',
      description: 'Panorámicas y tomografía computarizada cone beam en la misma consulta, sin derivaciones ni esperas.',
      priceTag: 'Diagnóstico 3D inmediato',
      icon: Eye,
      whatsappText: 'Hola, necesito realizarme una radiografía o escáner 3D',
    },
  ];

  const openWhatsAppForTreatment = (treatment: (typeof treatments)[0]) => {
    const encoded = encodeURIComponent(treatment.whatsappText);
    const url = `https://wa.me/56936274883?text=${encoded}`;
    handleWhatsAppClick(`tratamiento_${treatment.id}`, url);
  };

  return (
    <section id="tratamientos" className="scroll-mt-20 py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Todas las especialidades en un solo lugar
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
            Todos tus tratamientos dentales en un solo lugar en Providencia
          </h2>
          <p className="text-base text-[#71717A] mt-3">
            Sin tener que trasladarte entre distintos centros: especialistas coordinados, pabellón y diagnóstico 3D en Av. Salvador 95.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => {
            const Icon = t.icon;
            return (
              <div
                key={t.id}
                className={`group bg-white rounded-2xl border transition-all duration-200 flex flex-col justify-between p-6 sm:p-7 hover:-translate-y-1 hover:shadow-md ${
                  t.isMarquee
                    ? 'md:col-span-2 lg:col-span-2 border-[#1D4ED8]/40 bg-gradient-to-br from-white via-white to-[#EEF5FF]'
                    : 'border-[#E4E4E4] hover:border-[#1D4ED8]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        t.isMarquee
                          ? 'bg-[#1D4ED8] text-white shadow-sm'
                          : 'bg-[#EEF5FF] text-[#1D4ED8] group-hover:bg-[#1D4ED8] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    {t.isMarquee && (
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#1D4ED8]/10 text-[#1D4ED8]">
                        Especialidad principal
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#11181C] group-hover:text-[#1D4ED8] transition-colors mb-2">
                    {t.title}
                  </h3>

                  <p className="text-sm text-[#71717A] leading-relaxed mb-4">
                    {t.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3 mt-auto">
                  <span className="text-xs font-semibold text-[#243E85] tracking-tight">
                    {t.priceTag}
                  </span>

                  <button
                    onClick={() => openWhatsAppForTreatment(t)}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-[#1D4ED8] hover:text-[#0B38B4] group/link py-1"
                  >
                    <span>Consultar</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Sedation Band */}
        <div className="mt-8 bg-gradient-to-r from-[#EEF5FF] via-white to-[#EEF5FF] border border-[#D0E2FA] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-[#D0E2FA] text-[#1D4ED8] flex items-center justify-center shrink-0">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#11181C]">
                ¿Miedo o ansiedad ante el dentista?
              </h4>
              <p className="text-xs sm:text-sm text-[#71717A]">
                Contamos con sedación consciente monitoreada para que puedas realizar tus tratamientos con total tranquilidad.
              </p>
            </div>
          </div>

          <button
            onClick={() => handleWhatsAppClick('banner_sedacion', 'https://wa.me/56936274883?text=Hola%2C%20quiero%20consultar%20por%20tratamientos%20con%20sedaci%C3%B3n%20consciente')}
            className="shrink-0 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-[#1D4ED8] bg-white border border-[#1D4ED8]/30 hover:bg-[#1D4ED8] hover:text-white transition-all shadow-xs"
          >
            Consultar por sedación
          </button>
        </div>
      </div>
    </section>
  );
};
