import React from 'react';
import { MessageSquare, Scan, FileCheck, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/tracking';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Escríbenos por WhatsApp',
      description: 'Cuéntanos qué te pasa o qué buscas y te damos hora de inmediato, incluso días sábados.',
      icon: MessageSquare,
      highlight: 'Respuesta en minutos',
    },
    {
      number: '02',
      title: 'Evaluación con especialista sin costo',
      description: 'Revisamos tu caso con radiografía o escáner 3D aquí mismo en Providencia. La consulta clínica es $0; solo pagas el examen que tu caso requiera.',
      icon: Scan,
      highlight: 'Consulta $0',
    },
    {
      number: '03',
      title: 'Presupuesto cerrado y a tu ritmo',
      description: 'Te explicamos alternativas reales, etapas clínicas y el precio exacto final antes de iniciar. Puedes pagar hasta en 12 cuotas con tarjeta.',
      icon: FileCheck,
      highlight: 'Sin costos sorpresa',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Paso a paso claro y transparente
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
            Empezar es simple
          </h2>
          <p className="text-base text-[#71717A] mt-3">
            Sin trámites complicados ni largas listas de espera: agenda directo con nuestro equipo.
          </p>
        </div>

        {/* 3 Steps with visual connection */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-[#1D4ED8]/20 via-[#1D4ED8] to-[#1D4ED8]/20 -translate-y-8 z-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {steps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.number}
                  className="bg-white border border-[#E4E4E4] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-[#1D4ED8] transition-colors relative"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl sm:text-3xl font-bold text-[#1D4ED8] font-mono">
                        {st.number}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#EEF5FF] text-[#1D4ED8] flex items-center justify-center">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    <span className="inline-block text-[11px] font-semibold tracking-wider uppercase text-[#243E85] bg-[#EEF5FF] px-2.5 py-0.5 rounded-full mb-3">
                      {st.highlight}
                    </span>

                    <h3 className="text-lg font-bold text-[#11181C] mb-2 leading-snug">
                      {st.title}
                    </h3>

                    <p className="text-sm text-[#71717A] leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <button
            onClick={() => handleWhatsAppClick('como_funciona')}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] shadow-sm hover:shadow-md transition-all text-base focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <span>Agenda tu evaluación por WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
