import React, { useState, useEffect, useRef } from 'react';
import { Star, ShieldCheck, ArrowRight, Clock, MapPin, CheckCircle } from 'lucide-react';
import { CLINIC_CONTACT, handleWhatsAppClick } from '../utils/tracking';
import { ImageWithFallback } from './ImageWithFallback';

interface StatCounterProps {
  end: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ end, prefix = '', suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1600;
          const steps = 40;
          const increment = end / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [end, hasAnimated]);

  const formattedCount = count.toLocaleString('es-CL');

  return (
    <div ref={elementRef} className="flex flex-col items-center md:items-start text-center md:text-left">
      <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1D4ED8] tracking-tight tabular-nums">
        {prefix}{formattedCount}{suffix}
      </span>
      <span className="text-xs sm:text-sm font-medium text-[#71717A] mt-1">
        {label}
      </span>
    </div>
  );
};

export const Hero: React.FC = () => {
  const scrollToUrgency = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('urgencias');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#EEF5FF] via-[#F8FBFF] to-white pt-8 pb-12 sm:pt-14 sm:pb-20 border-b border-[#E4E4E4]">
      {/* Decorative subtle background accents */}
      <div className="absolute top-0 right-0 -mr-32 -mt-32 w-96 h-96 rounded-full bg-[#1D4ED8]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 rounded-full bg-[#243E85]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Chip badge */}
            <a
              href={CLINIC_CONTACT.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#D0E2FA] shadow-xs text-xs sm:text-sm font-semibold text-[#243E85] mb-5 hover:border-[#1D4ED8] transition-colors"
            >
              <span className="flex text-[#FACC15]">
                <Star className="w-4 h-4 fill-current" />
              </span>
              <span>5,0 en Google</span>
              <span className="text-neutral-300" aria-hidden="true">·</span>
              <span className="text-[#71717A]">+5.000 reseñas</span>
            </a>

            {/* H1 Headline */}
            <h1 className="text-[32px] sm:text-[42px] lg:text-[54px] font-bold text-[#11181C] tracking-tight leading-[1.12] mb-5 text-balance">
              Implantes y casos dentales complejos resueltos por especialistas en Providencia
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#71717A] leading-relaxed mb-6 sm:mb-8 max-w-2xl text-pretty">
              Vuelve a comer y sonreír con confianza. Tu evaluación con especialista no tiene costo, el diagnóstico 3D se hace aquí mismo y recibes un presupuesto cerrado antes de empezar.
            </p>

            {/* Primary Action Button */}
            <div className="w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-4">
              <button
                onClick={() => handleWhatsAppClick('hero')}
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-base sm:text-lg font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus-visible:ring-4 focus-visible:ring-[#1D4ED8]/30"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.83.493 3.551 1.353 5.04L2 22l5.093-1.336a9.96 9.96 0 0 0 4.938 1.347h.004c5.518 0 10.005-4.486 10.005-10.005 0-5.52-4.487-10.006-10.009-10.006zm0 18.283h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.136.823.837-3.057-.197-.314a8.274 8.274 0 0 1-1.268-4.392c0-4.57 3.719-8.289 8.29-8.289 4.572 0 8.291 3.719 8.291 8.289 0 4.57-3.719 8.289-8.29 8.289z" />
                </svg>
                <span>Agenda tu evaluación por WhatsApp</span>
              </button>
            </div>

            {/* Under button reassurance */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs sm:text-sm text-[#71717A] mb-5">
              <span className="flex items-center gap-1.5 font-medium text-[#11181C]">
                <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                Te respondemos en minutos
              </span>
              <span className="text-neutral-300" aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#1D4ED8]" />
                A pasos de Metro Salvador
              </span>
            </div>

            {/* Secondary Urgency Link */}
            <div className="pt-2 border-t border-neutral-200/60 w-full sm:w-auto">
              <a
                href="#urgencias"
                onClick={scrollToUrgency}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#B71C1C] hover:text-[#8B1414] transition-colors py-1 group"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B71C1C] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#B71C1C]"></span>
                </span>
                <span>¿Tienes dolor hoy? Urgencias el mismo día</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual with Floating Cards */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-none">
              {/* Outer decorative glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1D4ED8]/10 to-[#243E85]/5 rounded-3xl transform rotate-1 scale-105" />

              {/* Main Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#D0E2FA]/80 bg-white">
                <ImageWithFallback
                  src="https://dentistasporchile.cl/_next/image?url=%2Fhome%2Fpor-que-elegir.webp&w=2400&q=75"
                  alt="Dentista de Dentistas por Chile acompañando a una paciente en la clínica de Providencia"
                  className="w-full h-80 sm:h-96 lg:h-[460px] object-cover"
                  loading="eager"
                  fallbackText="Dentistas por Chile en Providencia"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium drop-shadow-md">
                  Clínica Dentistas por Chile · Av. Salvador 95, Providencia
                </div>
              </div>

              {/* Floating Card 1: $0 Consultation */}
              <div className="animate-float absolute -top-4 -left-3 sm:-left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-[#D0E2FA] flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-[#EEF5FF] text-[#1D4ED8] flex items-center justify-center font-bold text-lg">
                  $0
                </div>
                <div>
                  <div className="text-xs text-[#71717A] font-medium leading-none mb-1">
                    Evaluación inicial
                  </div>
                  <div className="text-sm font-bold text-[#11181C] leading-tight">
                    Con especialista sin costo
                  </div>
                </div>
              </div>

              {/* Floating Card 2: 5.0 Google Rating */}
              <div className="animate-float-reverse absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-2xl shadow-lg border border-[#D0E2FA] flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center">
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-bold text-[#11181C]">5,0</span>
                    <div className="flex text-[#FACC15]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-xs text-[#71717A] font-medium">
                    +5.000 reseñas en Google
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Confidence Strip (4 Animated Stat Counters) */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-[#E4E4E4] grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <StatCounter
            end={10000}
            prefix="+"
            label="cirugías de implantes"
          />
          <StatCounter
            end={45000}
            prefix="+"
            label="pacientes atendidos"
          />
          <StatCounter
            end={15}
            suffix=" años"
            label="de experiencia en Providencia"
          />
          <StatCounter
            end={22}
            label="especialistas en el equipo"
          />
        </div>
      </div>
    </section>
  );
};
