import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const TeamSection: React.FC = () => {
  const specialties = [
    { name: 'Implantología y Cirugía', count: 10 },
    { name: 'Endodoncia', count: 3 },
    { name: 'Periodoncia', count: 3 },
    { name: 'Odontología General', count: 4 },
    { name: 'Ortodoncia', count: 1 },
    { name: 'Odontopediatría Inclusiva', count: 1 },
  ];

  return (
    <section id="equipo" className="scroll-mt-20 py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Cuerpo clínico multidisciplinario
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
            22 especialistas coordinados en tu caso
          </h2>
          <p className="text-base text-[#71717A] mt-3">
            Cada plan de tratamiento es revisado de forma colaborativa por los especialistas necesarios para garantizar un resultado predecible y duradero.
          </p>
        </div>

        {/* Group Photo */}
        <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#E4E4E4] bg-white mb-12">
          <ImageWithFallback
            src="https://dentistasporchile.cl/_next/image?url=%2Fnosotros%2Fdoctores.webp&w=2400&q=75"
            alt="Equipo de especialistas de Dentistas por Chile en Providencia"
            className="w-full h-64 sm:h-96 lg:h-[480px] object-cover"
            loading="lazy"
            fallbackText="Equipo de especialistas de Dentistas por Chile en Providencia"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D0E2FA]">
                En Av. Salvador 95, Providencia
              </span>
              <p className="text-base sm:text-xl font-bold">
                Más de 20 cirujanos dentistas y especialistas acreditados
              </p>
            </div>
            <a
              href="https://dentistasporchile.cl/nosotros/equipo-humano"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 w-fit"
            >
              <span>Conoce a todo el equipo</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Specialty distribution & Founder Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Founder Spotlight */}
          <div className="lg:col-span-5 bg-white border border-[#E4E4E4] rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-[#D0E2FA] shrink-0 bg-neutral-100">
                <ImageWithFallback
                  src="https://dentistasporchile.cl/_next/image?url=%2Fquienes-somos%2Fhistoria.png&w=2400&q=75"
                  alt="Dr. Julio Guerra Duhalde, fundador de Dentistas por Chile"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  fallbackText="Dr. Julio Guerra Duhalde"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#1D4ED8] uppercase tracking-wider">
                  Fundador y Director
                </span>
                <h3 className="text-lg font-bold text-[#11181C] leading-snug">
                  Dr. Julio Guerra Duhalde
                </h3>
                <p className="text-xs text-[#71717A] mt-0.5">
                  Cirujano Dentista (UNAB) · Implantología y Rehabilitación Oral
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed">
              Fundó la clínica en 2011 en Providencia con la convicción de ofrecer odontología de alta complejidad con calidez, honestidad diagnóstica y accesibilidad. Atiende casos de alta dificultad y guía al equipo clínico.
            </p>
          </div>

          {/* Specialties breakdown */}
          <div className="lg:col-span-7 bg-white border border-[#E4E4E4] rounded-2xl p-6 sm:p-7 shadow-xs">
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-[#1D4ED8]" />
              <h3 className="text-base font-bold text-[#11181C]">
                Composición del equipo por especialidad
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {specialties.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#FAFAFA] border border-[#E4E4E4]"
                >
                  <span className="text-xs sm:text-sm font-medium text-[#11181C]">
                    {spec.name}
                  </span>
                  <span className="text-xs font-bold text-[#1D4ED8] bg-[#EEF5FF] px-2 py-0.5 rounded-md tabular-nums">
                    {spec.count} {spec.count === 1 ? 'especialista' : 'especialistas'}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#71717A] mt-4">
              Todos con inscripción vigente en el Registro Nacional de Prestadores Individuales de Salud (Superintendencia de Salud de Chile).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
