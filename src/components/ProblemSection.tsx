import React from 'react';
import { Smile, Bone, AlertCircle, HeartHandshake, ArrowRight } from 'lucide-react';
import { handleWhatsAppClick } from '../utils/tracking';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: Smile,
      title: 'Dientes perdidos o masticación incómoda',
      description: 'Te falta uno o más dientes y evitas sonreír o masticar de un lado.',
    },
    {
      icon: Bone,
      title: 'Poco hueso para implantes',
      description: 'Te dijeron que no tienes hueso suficiente para un implante.',
    },
    {
      icon: AlertCircle,
      title: 'Tratamientos previos que fallaron',
      description: 'Tienes un tratamiento anterior que falló y no sabes en quién confiar.',
    },
    {
      icon: HeartHandshake,
      title: 'Miedo o fobia dental',
      description: 'Te da miedo ir al dentista y lo has postergado por años.',
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Diagnóstico sincero y sin juzgar
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#11181C] tracking-tight mt-2 text-balance">
            ¿Te reconoces en alguna de estas situaciones?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-[#FAFAFA] hover:bg-[#EEF5FF] border border-[#E4E4E4] hover:border-[#1D4ED8]/40 rounded-2xl p-6 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E4E4E4] flex items-center justify-center text-[#1D4ED8] group-hover:scale-105 transition-transform mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-semibold text-[#11181C] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#71717A] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing text and CTA */}
        <div className="bg-[#EEF5FF] border border-[#D0E2FA] rounded-2xl p-6 sm:p-8 text-center max-w-3xl mx-auto">
          <p className="text-base sm:text-lg text-[#243E85] font-medium leading-relaxed mb-6">
            Son justamente los casos que resolvemos todos los días. Aquí te explicamos todo con calma, con precios claros desde el primer día.
          </p>
          <button
            onClick={() => handleWhatsAppClick('seccion_problema')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] shadow-sm hover:shadow-md transition-all group focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
          >
            <span>Quiero que evalúen mi caso</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};
