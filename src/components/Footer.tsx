import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { CLINIC_CONTACT, handlePhoneClick, handleWhatsAppClick } from '../utils/tracking';
import { ImageWithFallback } from './ImageWithFallback';

export const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@dentistasporchile',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/dentistasporchile/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/ClinicaDentistasChile',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@dentistasporchile_of',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-1.01-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/dentistaspor-chile/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#11181C] text-neutral-300 pt-16 pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="inline-block" aria-label="Inicio Dentistas por Chile">
              <ImageWithFallback
                src="https://dentistasporchile.cl/_next/image?url=%2FGrupo-46.webp&w=384&q=75"
                alt="Clínica Dentistas por Chile"
                className="h-10 w-auto object-contain brightness-0 invert"
                loading="lazy"
                fallbackText="Dentistas por Chile"
              />
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Comprometidos con tu salud dental. Más de 15 años resolviendo casos complejos y rehabilitación con implantes en Providencia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-neutral-800 hover:bg-[#1D4ED8] text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
                  aria-label={`Visitar ${s.name} de Dentistas por Chile`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* SEREMI Logo Accreditation */}
            <div className="pt-2">
              <div className="inline-flex items-center gap-3 p-2.5 rounded-xl bg-neutral-900 border border-neutral-800">
                <ImageWithFallback
                  src="https://dentistasporchile.cl/_next/image?url=%2Flogo-seremi.webp&w=256&q=75"
                  alt="Autorización SEREMI de Salud Región Metropolitana"
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                  fallbackText="SEREMI Salud RM"
                />
                <span className="text-[11px] text-neutral-400 font-medium leading-tight">
                  Pabellones y clínica autorizados por SEREMI de Salud RM
                </span>
              </div>
            </div>
          </div>

          {/* Quick Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Contacto y Ubicación
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1D4ED8] shrink-0 mt-0.5" />
                <span>Av. Salvador 95, Piso 4, Oficina 402, Providencia, Santiago (Metro Salvador)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <a
                  href={CLINIC_CONTACT.phoneHref}
                  onClick={() => handlePhoneClick('footer')}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_CONTACT.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="w-4 h-4 text-[#25D366] shrink-0 flex items-center justify-center font-bold">
                  W
                </span>
                <button
                  onClick={() => handleWhatsAppClick('footer')}
                  className="hover:text-white transition-colors text-left"
                >
                  {CLINIC_CONTACT.whatsappNumber}
                </button>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1D4ED8] shrink-0" />
                <a
                  href={`mailto:${CLINIC_CONTACT.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CLINIC_CONTACT.email}
                </a>
              </div>
            </div>
          </div>

          {/* Hours & Legal */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Horario de Atención
            </h4>
            <div className="space-y-1.5 text-xs text-neutral-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Lunes a Jueves: 8:30 a 18:30 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Viernes: 8:30 a 17:30 hrs</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#1D4ED8]" />
                <span>Sábado: 9:00 a 17:00 hrs</span>
              </div>
            </div>

            <div className="pt-3">
              <h5 className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-2">
                Enlaces Institucionales
              </h5>
              <ul className="space-y-1.5 text-xs">
                <li>
                  <a
                    href="https://dentistasporchile.cl/nosotros/autorizaciones-y-registros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Autorizaciones y registros sanitarios
                  </a>
                </li>
                <li>
                  <a
                    href="https://dentistasporchile.cl/tramites/garantias"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Garantías y protocolos clínicos
                  </a>
                </li>
                <li>
                  <a
                    href="https://dentistasporchile.cl/politicas-de-privacidad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Políticas de privacidad
                  </a>
                </li>
                <li>
                  <a
                    href="https://dentistasporchile.cl/politicas-de-cookies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Políticas de cookies
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:contacto@dentistasporchile.cl?subject=Postulacion%20Equipo%20Clinico"
                    className="hover:text-white transition-colors"
                  >
                    Trabaja con nosotros
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 Clínica Dentistas por Chile. Todos los derechos reservados.</p>
          <p>Av. Salvador 95, Providencia, Santiago · Metro Salvador Línea 1</p>
        </div>
      </div>
    </footer>
  );
};
