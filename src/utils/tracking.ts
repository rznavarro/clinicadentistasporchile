/**
 * Tracking and dataLayer utilities for GTM-5KRR8MM
 */

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export const CLINIC_CONTACT = {
  phoneDisplay: '+56 2 2341 1881',
  phoneHref: 'tel:+56223411881',
  whatsappNumber: '+56 9 3627 4883',
  whatsappRaw: '56936274883',
  email: 'contacto@dentistasporchile.cl',
  address: 'Av. Salvador 95, Piso 4, Oficina 402, Providencia, Santiago',
  addressShort: 'Av. Salvador 95, Providencia (Metro Salvador)',
  googleMapsUrl: 'https://www.google.com/maps/dir/?api=1&destination=-33.4349257%2C-70.6263731',
  wazeUrl: 'https://waze.com/ul?ll=-33.4349257%2C-70.6263731&navigate=yes',
  googleReviewsUrl: 'https://www.google.cl/maps/place/Clinica+Dentistas+por+Chile/@-33.4349212,-70.6289534,17z',
  defaultWhatsAppUrl: 'https://wa.me/56936274883?text=Hola%2C%20quiero%20agendar%20una%20evaluaci%C3%B3n',
  urgencyWhatsAppUrl: 'https://wa.me/56936274883?text=Hola%2C%20tengo%20una%20urgencia%20dental%20y%20necesito%20hora%20hoy',
};

export function trackEvent(eventName: string, params: Record<string, unknown> = {}) {
  try {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      });
    }
  } catch (err) {
    console.debug('Error pushing to dataLayer:', err);
  }
}

export function handleWhatsAppClick(location: string, customUrl?: string) {
  trackEvent('click_whatsapp', { ubicacion: location });
  const targetUrl = customUrl || CLINIC_CONTACT.defaultWhatsAppUrl;
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
}

export function handlePhoneClick(location: string) {
  trackEvent('click_telefono', { ubicacion: location });
}

export function handleDirectionsClick(platform: 'google_maps' | 'waze') {
  trackEvent('click_como_llegar', { plataforma: platform });
}
