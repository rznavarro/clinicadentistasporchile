import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { CLINIC_CONTACT, handleWhatsAppClick, handlePhoneClick } from '../utils/tracking';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Tratamientos', href: '#tratamientos' },
    { label: 'Urgencias', href: '#urgencias', isUrgency: true },
    { label: 'Precios', href: '#precios' },
    { label: 'Equipo', href: '#equipo' },
    { label: 'Ubicación', href: '#ubicacion' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#E4E4E4] py-2.5'
          : 'bg-white border-b border-[#E4E4E4] py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Brand Zone */}
          <a
            href="/"
            className="flex items-center gap-2 shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1D4ED8] rounded-lg"
            aria-label="Dentistas por Chile - Inicio"
          >
            <img
              src="https://dentistasporchile.cl/_next/image?url=%2FDPCLogo.webp&w=384&q=75"
              alt="Logo Clínica Dentistas por Chile"
              className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              loading="eager"
            />
          </a>

          {/* Desktop Nav Zone */}
          <nav
            aria-label="Navegación principal"
            className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-[#11181C]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`whitespace-nowrap transition-colors py-1 ${
                  link.isUrgency
                    ? 'text-[#B71C1C] font-semibold hover:text-[#991515] flex items-center gap-1.5'
                    : 'text-[#11181C] hover:text-[#1D4ED8]'
                }`}
              >
                {link.isUrgency && (
                  <span className="w-2 h-2 rounded-full bg-[#B71C1C] animate-red-pulse" aria-hidden="true" />
                )}
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Zone (Desktop CTA + Mobile Call/Hamburger) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Phone link on mobile & desktop */}
            <a
              href={CLINIC_CONTACT.phoneHref}
              onClick={() => handlePhoneClick('header')}
              aria-label="Llamar a la clínica al +56 2 2341 1881"
              className="flex items-center justify-center w-10 h-10 rounded-xl text-[#1D4ED8] bg-[#EEF5FF] hover:bg-[#DCE9FA] transition-colors md:hidden focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
            >
              <Phone className="w-5 h-5" />
            </a>

            {/* Desktop WhatsApp CTA */}
            <button
              onClick={() => handleWhatsAppClick('header')}
              className="hidden md:inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] shadow-sm hover:shadow-md transition-all whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1D4ED8]"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.83.493 3.551 1.353 5.04L2 22l5.093-1.336a9.96 9.96 0 0 0 4.938 1.347h.004c5.518 0 10.005-4.486 10.005-10.005 0-5.52-4.487-10.006-10.009-10.006zm0 18.283h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.136.823.837-3.057-.197-.314a8.274 8.274 0 0 1-1.268-4.392c0-4.57 3.719-8.289 8.29-8.289 4.572 0 8.291 3.719 8.291 8.289 0 4.57-3.719 8.289-8.29 8.289z" />
              </svg>
              <span>Agendar por WhatsApp</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-[#11181C] hover:bg-neutral-100 transition-colors focus-visible:ring-2 focus-visible:ring-[#1D4ED8]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E4E4E4] bg-white px-4 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  link.isUrgency
                    ? 'text-[#B71C1C] bg-[#FEF2F2] font-semibold flex items-center justify-between'
                    : 'text-[#11181C] hover:bg-[#EEF5FF] hover:text-[#1D4ED8]'
                }`}
              >
                <span>{link.label}</span>
                {link.isUrgency && (
                  <span className="text-xs bg-[#B71C1C] text-white px-2 py-0.5 rounded-full font-medium">
                    Atención hoy
                  </span>
                )}
              </a>
            ))}
          </nav>

          <div className="pt-2 border-t border-[#E4E4E4] space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleWhatsAppClick('header_mobile_menu');
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-white font-semibold bg-[#25D366] hover:bg-[#20ba5a] transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.83.493 3.551 1.353 5.04L2 22l5.093-1.336a9.96 9.96 0 0 0 4.938 1.347h.004c5.518 0 10.005-4.486 10.005-10.005 0-5.52-4.487-10.006-10.009-10.006zm0 18.283h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.136.823.837-3.057-.197-.314a8.274 8.274 0 0 1-1.268-4.392c0-4.57 3.719-8.289 8.29-8.289 4.572 0 8.291 3.719 8.291 8.289 0 4.57-3.719 8.289-8.29 8.289z" />
              </svg>
              <span>Agendar por WhatsApp</span>
            </button>

            <a
              href={CLINIC_CONTACT.phoneHref}
              onClick={() => {
                setMobileMenuOpen(false);
                handlePhoneClick('header_mobile_drawer');
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-medium text-[#243E85] bg-[#EEF5FF] hover:bg-[#DCE9FA] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#1D4ED8]" />
              <span>Llamar al {CLINIC_CONTACT.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
