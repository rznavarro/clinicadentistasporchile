import React, { useState } from 'react';
import { Star, Play, ExternalLink, AlertCircle, Quote } from 'lucide-react';
import { CLINIC_CONTACT } from '../utils/tracking';

export const SocialProofSection: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const reviews = [
    {
      name: 'Lilian Soto A.',
      date: '01/08/2026',
      rating: 5,
      doctor: 'Dra. Gabriela Vega',
      summary: 'Destaca la explicación clara y cercana de la Dra. Gabriela Vega, logrando que perdiera por completo el miedo al dentista tras postergarlo por años.',
    },
    {
      name: 'Patsy Sánchez',
      date: '30/07/2026',
      rating: 5,
      doctor: 'Dr. Felipe Pérez',
      summary: 'Destaca el trato sumamente humano y empático del Dr. Felipe Pérez durante su evaluación inicial y la transparencia al explicarle cada paso.',
    },
    {
      name: 'Felipe Moreno Toro',
      date: '26/06/2026',
      rating: 5,
      doctor: 'Equipo de Especialistas',
      summary: 'Destaca que cada procedimiento quirúrgico fue totalmente cómodo, sin dolor imprevisto y explicado con detalle radiológico paso a paso.',
    },
    {
      name: 'Nicolás Rojas',
      date: '24/06/2026',
      rating: 5,
      doctor: 'Dra. Paulina Adasme',
      summary: 'Llegó recomendado por un familiar; destaca la claridad absoluta de la Dra. Paulina Adasme con la cotización cerrada y los tiempos de tratamiento.',
    },
    {
      name: 'Ignacio González',
      date: '28/03/2026',
      rating: 5,
      doctor: 'Dra. Valentina Aracena',
      summary: 'Agendó en minutos por WhatsApp, valora la atención los días sábados en Providencia y la transparencia de costos con la Dra. Valentina Aracena.',
    },
  ];

  const videoCases = [
    {
      youtubeId: 'kjCPQxv40Co',
      title: 'Prótesis fija: antes y después',
      thumbnail: 'https://i.ytimg.com/vi/kjCPQxv40Co/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=kjCPQxv40Co',
    },
    {
      youtubeId: '1NjrypcLsdw',
      title: 'No le gustaba su sonrisa… mira el cambio',
      thumbnail: 'https://i.ytimg.com/vi/1NjrypcLsdw/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=1NjrypcLsdw',
    },
    {
      youtubeId: 'k-g-b_Lkpas',
      title: 'Síndrome del cuidador: perdió su salud y su sonrisa… hoy todo cambió',
      thumbnail: 'https://i.ytimg.com/vi/k-g-b_Lkpas/hqdefault.jpg',
      url: 'https://www.youtube.com/watch?v=k-g-b_Lkpas',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#E4E4E4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Google Score */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#1D4ED8]">
              Experiencia comprobada por la comunidad
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#11181C] tracking-tight mt-2 text-balance">
              Más de 5.000 pacientes nos recomiendan en Google
            </h2>
          </div>

          {/* Google Score Badge */}
          <a
            href={CLINIC_CONTACT.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-white border border-[#D0E2FA] shadow-xs hover:border-[#1D4ED8] transition-all shrink-0"
          >
            {/* Google G icon */}
            <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-base font-bold text-[#11181C]">5,0</span>
                <div className="flex text-[#FACC15]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <span className="text-xs text-[#71717A] font-medium">
                +5.000 opiniones verificadas · Ver en Google →
              </span>
            </div>
          </a>
        </div>

        {/* 5 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-[#E4E4E4] p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#FACC15]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-xs text-[#71717A] tabular-nums">
                    {rev.date}
                  </span>
                </div>

                <Quote className="w-5 h-5 text-[#1D4ED8]/30 mb-2" />
                <p className="text-sm text-[#11181C] leading-relaxed mb-4">
                  {rev.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#11181C]">
                    {rev.name}
                  </div>
                  <div className="text-[11px] text-[#71717A]">
                    Atendido por {rev.doctor}
                  </div>
                </div>
                <span className="text-[10px] uppercase font-semibold text-[#1D4ED8] bg-[#EEF5FF] px-2 py-0.5 rounded-md">
                  Google
                </span>
              </div>
            </div>
          ))}

          {/* Missing reviews note block */}
          <div className="bg-[#FFFBEB] border border-[#FDE68A] rounded-2xl p-6 flex flex-col justify-center">
            <div className="flex items-start gap-2.5 text-xs text-[#92400E]">
              <AlertCircle className="w-5 h-5 shrink-0 text-[#D97706]" />
              <div>
                <strong className="block font-semibold mb-1">
                  [FALTA: copiar el texto textual de estas 5 reseñas desde Google]
                </strong>
                <span>
                  Las reseñas mostradas resumen fidedignamente testimonios reales de pacientes de Dentistas por Chile.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Missing Photos / Facilities Marker */}
        <div className="mb-14 p-4 rounded-xl bg-neutral-100 border border-neutral-200 text-xs text-[#71717A] flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-neutral-500 shrink-0" />
          <span>
            [FALTA: 3 fotos reales de instalaciones (pabellón, centro radiológico, laboratorio) y 4–6 fotos antes/después de implantes con consentimiento del paciente]
          </span>
        </div>

        {/* Video Testimonials Sub-Block (Lazy Click to Play) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#11181C]">
                Casos reales en video
              </h3>
              <p className="text-xs sm:text-sm text-[#71717A]">
                Conoce la experiencia directa de pacientes que recuperaron su función y estética.
              </p>
            </div>
            <a
              href="https://www.youtube.com/@dentistasporchile"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#1D4ED8] hover:text-[#0B38B4]"
            >
              <span>Ver más casos en YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videoCases.map((video) => {
              const isPlaying = activeVideoId === video.youtubeId;

              return (
                <div
                  key={video.youtubeId}
                  className="bg-white rounded-2xl border border-[#E4E4E4] overflow-hidden shadow-xs hover:shadow-md transition-shadow group flex flex-col"
                >
                  <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                    {isPlaying ? (
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
                        title={video.title}
                        className="w-full h-full border-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <button
                        onClick={() => setActiveVideoId(video.youtubeId)}
                        className="w-full h-full relative cursor-pointer group focus-visible:outline-none"
                        aria-label={`Reproducir video: ${video.title}`}
                      >
                        <img
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-[#1D4ED8] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0B38B4] transition-all">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between">
                    <h4 className="text-sm font-bold text-[#11181C] line-clamp-2 mb-2">
                      {video.title}
                    </h4>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#1D4ED8] hover:underline inline-flex items-center gap-1"
                    >
                      <span>Abrir en YouTube</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-4 sm:hidden text-center">
            <a
              href="https://www.youtube.com/@dentistasporchile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D4ED8]"
            >
              <span>Ver más casos en YouTube</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
