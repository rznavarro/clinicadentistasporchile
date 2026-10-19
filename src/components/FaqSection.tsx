import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs: FaqItem[] = [
    {
      question: '¿Cuánto cuesta la evaluación?',
      answer:
        'La consulta con el especialista no tiene costo. Solo pagas la radiografía o el escáner 3D que tu caso necesite, y se hace en la misma clínica en Providencia.',
    },
    {
      question: '¿Atienden urgencias dentales el mismo día?',
      answer:
        'Sí. Atendemos urgencias el mismo día en Av. Salvador 95, Providencia. La consulta de urgencia cuesta $45.000 e incluye evaluación, manejo del dolor y radiografía panorámica si es necesaria. Escríbenos por WhatsApp para coordinar un sobrecupo.',
    },
    {
      question: '¿Me pueden poner implantes si me falta hueso?',
      answer:
        'En muchos casos sí. Nos especializamos en implantes con injertos y regeneración ósea. El especialista lo confirma en tu evaluación con escáner 3D.',
    },
    {
      question: '¿Trabajan con Fonasa o Isapre?',
      answer:
        'Atendemos por libre elección; no tenemos convenio con Fonasa ni Isapre. Te entregamos boleta y la documentación para pedir reembolso a tu Isapre o seguro complementario. Puedes pagar hasta en 12 cuotas.',
    },
    {
      question: '¿Cuál es su horario y dónde están?',
      answer:
        'Lunes a jueves de 8:30 a 18:30, viernes de 8:30 a 17:30 y sábado de 9:00 a 17:00. Estamos en Av. Salvador 95, piso 4, oficina 402, Providencia, a pasos de Metro Salvador, con estacionamiento sin costo.',
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="scroll-mt-20 py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E4E4E4]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Respuestas claras a tus dudas
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
            Preguntas frecuentes sobre nuestra clínica dental en Providencia
          </h2>
          <p className="text-base text-[#71717A] mt-3">
            Todo lo que necesitas saber antes de tu primera visita a la clínica.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white border border-[#E4E4E4] rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-[#11181C] hover:text-[#1D4ED8] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#EEF5FF] text-[#1D4ED8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#1D4ED8] text-white' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 animate-in fade-in duration-200">
                    <div className="pt-2 border-t border-neutral-100 text-sm sm:text-base text-[#71717A] leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
