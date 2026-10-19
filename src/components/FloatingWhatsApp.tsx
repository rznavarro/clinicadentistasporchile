import React, { useState, useEffect } from 'react';
import { handleWhatsAppClick } from '../utils/tracking';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past top hero (~350px)
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Contacto rápido" className="fixed bottom-5 right-5 z-50 md:hidden animate-in fade-in zoom-in-95 duration-200">
      <button
        onClick={() => handleWhatsAppClick('flotante')}
        className="animate-whatsapp-pulse flex items-center gap-2 px-4 py-3 rounded-full text-white font-bold bg-[#25D366] hover:bg-[#20ba5a] shadow-lg active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40 cursor-pointer"
        aria-label="Agendar evaluación por WhatsApp"
      >
        <svg
          className="w-5 h-5 fill-current shrink-0"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.511 2 2.025 6.486 2.025 12.006c0 1.83.493 3.551 1.353 5.04L2 22l5.093-1.336a9.96 9.96 0 0 0 4.938 1.347h.004c5.518 0 10.005-4.486 10.005-10.005 0-5.52-4.487-10.006-10.009-10.006zm0 18.283h-.003a8.27 8.27 0 0 1-4.22-1.157l-.303-.18-3.136.823.837-3.057-.197-.314a8.274 8.274 0 0 1-1.268-4.392c0-4.57 3.719-8.289 8.29-8.289 4.572 0 8.291 3.719 8.291 8.289 0 4.57-3.719 8.289-8.29 8.289z" />
        </svg>
        <span className="text-sm font-bold tracking-tight">Agendar</span>
      </button>
    </aside>
  );
};
