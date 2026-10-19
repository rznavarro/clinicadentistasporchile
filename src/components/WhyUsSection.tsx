import React from 'react';
import { Award, Building2, Stethoscope, Scan, Cpu, HeartHandshake, ExternalLink } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/tracking';
import { ImageWithFallback } from './ImageWithFallback';

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      icon: Award,
      title: 'Especialistas registrados',
      description: 'Todos nuestros profesionales están acreditados en el Registro de la Superintendencia de Salud.',
    },
    {
      icon: Building2,
      title: 'Pabellones de cirugía acreditados',
      description: 'Salas quirúrgicas autorizadas por SEREMI para procedimientos de implantes con máxima asepsia.',
    },
    {
      icon: Stethoscope,
      title: 'Respaldo clínico y enfermería',
      description: 'Personal de enfermería dedicado, monitoreo continuo de signos vitales y equipamiento para emergencias.',
    },
    {
      icon: Scan,
      title: 'Radiografías y escáner 3D aquí mismo',
      description: 'Diagnóstico por imágenes tomográficas en el 4to piso de Av. Salvador 95, sin necesidad de salir a otro centro.',
    },
    {
      icon: Cpu,
      title: 'Laboratorio dental propio',
      description: 'Mayor precisión milimétrica, ajustes inmediatos de coronas y tiempos de espera significativamente menores.',
    },
    {
      icon: HeartHandshake,
      title: 'Acompañamiento continuo',
      description: 'Te guiamos antes, durante y después de tu procedimiento con controles regulares y seguimiento de tu evolución.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image with clinical accreditation overlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-lg border border-[#E4E4E4] bg-neutral-100">
              <ImageWithFallback
                src="https://dentistasporchile.cl/_next/image?url=%2Fhome%2Fpor-que-elegir.webp&w=2400&q=75"
                alt="Dentista de Dentistas por Chile acompañando a una paciente en la clínica de Providencia"
                className="w-full h-80 sm:h-[460px] object-cover"
                loading="lazy"
                fallbackText="Pabellones y especialistas en Providencia"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D0E2FA]">
                  Infraestructura propia
                </span>
                <p className="text-sm sm:text-base font-bold mt-1">
                  Pabellones autorizados SEREMI y centro de imagenología 3D en Providencia
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Points + Accreditation Link & CTA */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
              Respaldo clínico riguroso
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 mb-6 text-balance">
              Un equipo completo para casos que otras clínicas derivan
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#1D4ED8] flex items-center justify-center shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#11181C] mb-1">
                        {pt.title}
                      </h3>
                      <p className="text-xs text-[#71717A] leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4 border-t border-[#E4E4E4]">
              <button
                onClick={() => handleWhatsAppClick('por_que_elegirnos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
              >
                <span>Agenda tu evaluación por WhatsApp</span>
              </button>

              <a
                href="https://dentistasporchile.cl/nosotros/autorizaciones-y-registros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] hover:text-[#0B38B4] transition-colors py-2"
              >
                <span>Ver autorizaciones y registros</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
