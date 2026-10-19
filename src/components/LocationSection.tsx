import React, { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Mail, Clock, Car, Navigation, AlertCircle } from 'lucide-react';
import { CLINIC_CONTACT, handlePhoneClick, handleWhatsAppClick, handleDirectionsClick } from '../utils/tracking';
import { ImageWithFallback } from './ImageWithFallback';

export const LocationSection: React.FC = () => {
  const [loadMap, setLoadMap] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadMap(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    if (mapContainerRef.current) {
      observer.observe(mapContainerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="ubicacion" className="scroll-mt-20 py-16 sm:py-24 bg-white border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
            Fácil acceso y conectividad
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
            Visítanos en Providencia, a pasos de Metro Salvador
          </h2>
          <p className="text-base text-[#71717A] mt-3">
            Ubicados en pleno polo médico de Santiago oriente, con estacionamiento sin costo para tu consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-8">
          {/* Left Column: Contact details & building photo */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Building Photo */}
            <div className="relative rounded-2xl overflow-hidden border border-[#E4E4E4] bg-neutral-100 shadow-xs h-56 sm:h-64">
              <ImageWithFallback
                src="https://dentistasporchile.cl/_next/image?url=%2Fhome%2Ffachada-aerea.webp&w=2400&q=75"
                alt="Edificio de la clínica en Av. Salvador 95, Providencia, junto a Metro Salvador"
                className="w-full h-full object-cover"
                loading="lazy"
                fallbackText="Edificio Av. Salvador 95, Providencia"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-semibold">
                Edificio Salvador · Piso 4, Oficina 402
              </div>
            </div>

            {/* Practical information */}
            <div className="bg-[#FAFAFA] border border-[#E4E4E4] rounded-2xl p-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#11181C]">Dirección</h3>
                  <p className="text-xs sm:text-sm text-[#71717A]">
                    Av. Salvador 95, Piso 4, Oficina 402, Providencia, Santiago.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#1D4ED8] font-medium mt-1">
                    <Car className="w-3.5 h-3.5" /> Estacionamiento sin costo en el edificio
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div className="w-full">
                  <h3 className="text-sm font-bold text-[#11181C]">Horario de atención</h3>
                  <div className="text-xs sm:text-sm text-[#71717A] space-y-0.5 mt-0.5">
                    <div>Lunes a Jueves: 8:30 a 18:30</div>
                    <div>Viernes: 8:30 a 17:30</div>
                    <div>Sábado: 9:00 a 17:00</div>
                  </div>
                  {/* Missing marker note */}
                  <div className="mt-2 text-[11px] text-[#B71C1C] bg-[#FEF2F2] p-2 rounded-lg flex items-start gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                    <span>
                      [FALTA: confirmar horario del sábado; la página de urgencias dice 9:00 a 13:30]
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#11181C]">Teléfonos directos</h3>
                  <div className="space-y-1 mt-1 text-xs sm:text-sm">
                    <div>
                      Central:{' '}
                      <a
                        href={CLINIC_CONTACT.phoneHref}
                        onClick={() => handlePhoneClick('ubicacion')}
                        className="font-semibold text-[#1D4ED8] hover:underline"
                      >
                        {CLINIC_CONTACT.phoneDisplay}
                      </a>
                    </div>
                    <div>
                      WhatsApp:{' '}
                      <button
                        onClick={() => handleWhatsAppClick('ubicacion')}
                        className="font-semibold text-[#1D4ED8] hover:underline"
                      >
                        {CLINIC_CONTACT.whatsappNumber}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-[#11181C]">Correo electrónico</h3>
                  <a
                    href={`mailto:${CLINIC_CONTACT.email}`}
                    className="text-xs sm:text-sm text-[#1D4ED8] hover:underline"
                  >
                    {CLINIC_CONTACT.email}
                  </a>
                </div>
              </div>
            </div>

            {/* GPS Direction Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <a
                href={CLINIC_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleDirectionsClick('google_maps')}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-[#1D4ED8] hover:bg-[#0B38B4] transition-colors shadow-xs"
              >
                <Navigation className="w-4 h-4" />
                <span>Cómo llegar en Google Maps</span>
              </a>

              <a
                href={CLINIC_CONTACT.wazeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleDirectionsClick('waze')}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#11181C] bg-[#EEF5FF] hover:bg-[#DCE9FA] border border-[#D0E2FA] transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#1D4ED8]" />
                <span>Abrir en Waze</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Map */}
          <div
            ref={mapContainerRef}
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E4E4E4] bg-neutral-100 min-h-[350px] lg:min-h-[500px] relative shadow-xs"
          >
            {loadMap ? (
              <iframe
                title="Ubicación de Clínica Dentistas por Chile en Providencia"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3329.539324622159!2d-70.6289534!3d-33.4349212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9662cf6365a6f8b9%3A0xb3026330ce123bc6!2sCl%C3%ADnica%20Dentistas%20por%20Chile!5e0!3m2!1ses!2scl!4v1715000000000!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] lg:min-h-full"
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center text-[#71717A] min-h-[350px]">
                <MapPin className="w-8 h-8 text-[#1D4ED8] animate-bounce mb-2" />
                <span className="text-sm font-medium">Cargando mapa interactivo...</span>
                <span className="text-xs text-[#71717A] mt-1">Av. Salvador 95, Providencia</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
