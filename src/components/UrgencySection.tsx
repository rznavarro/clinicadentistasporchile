import React from 'react';
import { AlertTriangle, Clock, Check, Phone } from 'lucide-react';
import { CLINIC_CONTACT, handleWhatsAppClick, handlePhoneClick } from '../utils/tracking';

export const UrgencySection: React.FC = () => {
  const urgencySymptoms = [
    'Dolor agudo o punzante',
    'Aumento de volumen en la cara o encía',
    'Diente roto, fracturado o perdido',
    'Corona, prótesis o tapadura suelta',
    'Dolor persistente después de una extracción',
    'Implante suelto o desajustado',
  ];

  return (
    <section id="urgencias" className="scroll-mt-20 py-12 sm:py-16 bg-[#FFF8F8] border-y border-[#FECDCD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#B71C1C] shadow-md p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Urgency Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF2F2] border border-[#FECDCD] text-[#B71C1C] text-xs sm:text-sm font-bold tracking-wide uppercase mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B71C1C] animate-red-pulse" aria-hidden="true" />
            <span>Sobrecupos de urgencia disponibles hoy</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mb-4 text-balance">
                ¿Dolor, diente roto o la cara hinchada? Te atendemos hoy.
              </h2>
              <p className="text-base sm:text-lg text-[#71717A] leading-relaxed mb-6">
                Atención de urgencia el mismo día en Providencia. Escríbenos y te coordinamos un sobrecupo de inmediato.
              </p>

              {/* Urgency symptoms checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {urgencySymptoms.map((symptom, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-[#11181C] font-medium">
                    <div className="w-5 h-5 rounded-full bg-[#FEF2F2] text-[#B71C1C] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{symptom}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Price Box and Urgency CTAs */}
            <div className="lg:col-span-5 bg-[#FEF2F2] border border-[#FECDCD] rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-[#B71C1C] uppercase tracking-wider block mb-1">
                  Arancel transparente
                </span>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-3xl sm:text-4xl font-bold text-[#B71C1C] tabular-nums">
                    $45.000
                  </span>
                  <span className="text-sm font-semibold text-[#11181C]">
                    Urgencia dental
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#71717A] leading-relaxed mb-6">
                  Incluye evaluación clínica completa, manejo del dolor, receta médica si corresponde y radiografía panorámica si es necesaria. (No incluye tratamientos definitivos).
                </p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppClick('urgencias', CLINIC_CONTACT.urgencyWhatsAppUrl)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-white bg-[#B71C1C] hover:bg-[#991515] shadow-sm hover:shadow-md transition-all text-base focus-visible:ring-4 focus-visible:ring-[#B71C1C]/30"
                >
                  <Clock className="w-5 h-5 shrink-0" />
                  <span>Pedir hora de urgencia hoy</span>
                </button>

                <div className="text-center">
                  <a
                    href={CLINIC_CONTACT.phoneHref}
                    onClick={() => handlePhoneClick('urgencias_secundario')}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#71717A] hover:text-[#11181C] transition-colors py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#1D4ED8]" />
                    <span>Llamar al {CLINIC_CONTACT.phoneDisplay}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Small safety warning */}
          <div className="mt-8 pt-4 border-t border-neutral-200 flex items-start gap-2.5 text-xs text-[#71717A]">
            <AlertTriangle className="w-4 h-4 text-[#B71C1C] shrink-0 mt-0.5" />
            <p>
              <strong>Aviso de seguridad:</strong> Si tienes sangrado abundante que no se detiene, dificultad para respirar o has sufrido un golpe de alta energía en la cabeza o mandíbula, acude de inmediato al servicio de urgencia hospitalario más cercano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
