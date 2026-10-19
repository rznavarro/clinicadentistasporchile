import React, { useState } from 'react';
import { Phone, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';
import { CLINIC_CONTACT, trackEvent, handlePhoneClick } from '../utils/tracking';

export const CtaSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('Implantes');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackEvent('envio_formulario', { tratamiento: need, nombre: name });
    trackEvent('click_whatsapp', { ubicacion: 'cta_final_formulario' });

    const message = `Hola, mi nombre es ${name.trim() || 'un paciente'}. Mi teléfono de contacto es ${phone.trim() || 'el de este chat'}. Quisiera consultar y agendar una hora para: ${need}.`;
    const whatsappUrl = `https://wa.me/56936274883?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-[#0B38B4] via-[#1D4ED8] to-[#243E85] text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-black/20 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold uppercase tracking-wider backdrop-blur-xs mb-4">
            <ShieldCheck className="w-4 h-4" />
            Evaluación con especialista $0
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 text-balance">
            Tu sonrisa no tiene por qué seguir esperando
          </h2>
          <p className="text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed text-pretty">
            Agenda tu evaluación con especialista sin costo y sal con un diagnóstico claro y un presupuesto cerrado.
          </p>
        </div>

        {/* 3-Field Quick Lead Capture Form */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-[#11181C] max-w-xl mx-auto border border-white/20">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="cta-name"
                className="block text-xs font-bold uppercase tracking-wider text-[#243E85] mb-1.5"
              >
                Tu Nombre
              </label>
              <input
                id="cta-name"
                type="text"
                required
                placeholder="Ej. Carolina Morales"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E4E4E4] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none text-sm transition-all text-[#11181C]"
              />
            </div>

            <div>
              <label
                htmlFor="cta-phone"
                className="block text-xs font-bold uppercase tracking-wider text-[#243E85] mb-1.5"
              >
                Tu WhatsApp o Teléfono
              </label>
              <input
                id="cta-phone"
                type="tel"
                required
                placeholder="+56 9 1234 5678"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E4E4E4] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none text-sm transition-all text-[#11181C]"
              />
            </div>

            <div>
              <label
                htmlFor="cta-need"
                className="block text-xs font-bold uppercase tracking-wider text-[#243E85] mb-1.5"
              >
                ¿Qué necesitas?
              </label>
              <select
                id="cta-need"
                value={need}
                onChange={(e) => setNeed(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-[#E4E4E4] focus:border-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]/20 outline-none text-sm transition-all bg-white text-[#11181C]"
              >
                <option value="Implantes">Implantes dentales o prótesis fija</option>
                <option value="Urgencia">Urgencia dental o dolor agudo hoy</option>
                <option value="Ortodoncia">Ortodoncia o alineadores invisibles</option>
                <option value="Estética">Estética dental, carillas o blanqueamiento</option>
                <option value="Limpieza">Limpieza dental total o control</option>
                <option value="Niños">Odontopediatría inclusiva (niños)</option>
                <option value="Otro">Otro tratamiento o consulta general</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full mt-2 inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.83.493 3.551 1.353 5.04L2 22l5.093-1.336a9.96 9.96 0 0 0 4.938 1.347h.004c5.518 0 10.005-4.486 10.005-10.005 0-5.52-4.487-10.006-10.009-10.006zm0 18.283h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.136.823.837-3.057-.197-.314a8.274 8.274 0 0 1-1.268-4.392c0-4.57 3.719-8.289 8.29-8.289 4.572 0 8.291 3.719 8.291 8.289 0 4.57-3.719 8.289-8.29 8.289z" />
              </svg>
              <span>Agenda tu evaluación por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {submitted && (
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200 animate-in fade-in">
                <CheckCircle className="w-4 h-4 shrink-0" />
                <span>Se abrió WhatsApp para coordinar tu hora con nuestro equipo.</span>
              </div>
            )}
          </form>

          {/* Secondary phone link */}
          <div className="mt-5 pt-4 border-t border-[#E4E4E4] text-center">
            <a
              href={CLINIC_CONTACT.phoneHref}
              onClick={() => handlePhoneClick('cta_final')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#243E85] hover:text-[#1D4ED8] transition-colors py-1"
            >
              <Phone className="w-4 h-4 text-[#1D4ED8]" />
              <span>o llámanos al {CLINIC_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
