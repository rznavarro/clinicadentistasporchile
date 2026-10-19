import React from 'react';
import { ShieldCheck, ExternalLink, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/tracking';
import { ImageWithFallback } from './ImageWithFallback';

export const WarrantySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Image */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-md border border-[#E4E4E4] bg-neutral-100">
              <ImageWithFallback
                src="https://dentistasporchile.cl/_next/image?url=%2Fhome%2Frespaldo.webp&w=2400&q=75"
                alt="Dentista revisando con una paciente el presupuesto de su tratamiento"
                className="w-full h-80 sm:h-[420px] object-cover"
                loading="lazy"
                fallbackText="Respaldo y garantías en Dentistas por Chile"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#D0E2FA]">
                  Compromiso ético y profesional
                </span>
                <p className="text-sm sm:text-base font-bold mt-0.5">
                  Claridad antes de empezar y seguimiento riguroso posterior
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Links */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEF5FF] text-[#1D4ED8] text-xs font-semibold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantía y tranquilidad</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mb-4 text-balance">
              Tu tratamiento tiene nuestro respaldo
            </h2>

            <p className="text-base sm:text-lg text-[#71717A] leading-relaxed mb-6">
              Te acompañamos también después de tu atención. Si algo no resulta como esperabas, te escuchamos, evaluamos tu caso y buscamos contigo una solución.
            </p>

            <div className="bg-[#FAFAFA] border border-[#E4E4E4] rounded-2xl p-5 mb-8 w-full space-y-2 text-xs sm:text-sm text-[#71717A]">
              <p className="flex items-center gap-2 text-[#11181C] font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                Seguimiento en controles periódicos
              </p>
              <p>
                Cada implante, corona y tratamiento rehabilitador cuenta con protocolos de mantención y revisión para cuidar tu inversión a largo plazo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleWhatsAppClick('seccion_garantias')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] shadow-sm hover:shadow-md transition-all text-sm sm:text-base"
              >
                <span>Agenda tu evaluación por WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://dentistasporchile.cl/tramites/garantias"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] hover:text-[#0B38B4] py-2 transition-colors"
              >
                <span>Conoce nuestras garantías</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
