import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { UrgencySection } from './components/UrgencySection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyUsSection } from './components/WhyUsSection';
import { SocialProofSection } from './components/SocialProofSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PricingSection } from './components/PricingSection';
import { TeamSection } from './components/TeamSection';
import { WarrantySection } from './components/WarrantySection';
import { FaqSection } from './components/FaqSection';
import { LocationSection } from './components/LocationSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#11181C] flex flex-col font-sans selection:bg-[#1D4ED8] selection:text-white">
      {/* 4.0 Header */}
      <Header />

      <main className="flex-1">
        {/* 4.1 Hero */}
        <Hero />

        {/* 4.2 Problema */}
        <ProblemSection />

        {/* 4.3 Urgencias el mismo día */}
        <UrgencySection />

        {/* 4.4 Tratamientos */}
        <TreatmentsSection />

        {/* 4.5 Por qué elegirnos */}
        <WhyUsSection />

        {/* 4.6 Prueba social & Testimonios en video */}
        <SocialProofSection />

        {/* 4.7 Cómo funciona */}
        <HowItWorksSection />

        {/* 4.8 Precios transparentes */}
        <PricingSection />

        {/* 4.9 Equipo & Fundador */}
        <TeamSection />

        {/* 4.10 Respaldo y Garantías */}
        <WarrantySection />

        {/* 4.11 Preguntas Frecuentes */}
        <FaqSection />

        {/* 4.12 Ubicación Providencia */}
        <LocationSection />

        {/* 4.13 CTA Final */}
        <CtaSection />
      </main>

      {/* 4.14 Footer */}
      <Footer />

      {/* Floating Mobile WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
