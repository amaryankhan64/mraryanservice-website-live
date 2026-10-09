import React, { useState, useEffect } from 'react';
import { TopTickerRibbon } from './components/TopTickerRibbon';
import { HeaderNav } from './components/HeaderNav';
import { HeroSection } from './components/HeroSection';
import { CatalogSection } from './components/CatalogSection';
import { BeforeVsAfterSection } from './components/BeforeVsAfterSection';
import { HowItWorks50Advance } from './components/HowItWorks50Advance';
import { PoliciesSection } from './components/PoliciesSection';
import { FooterSection } from './components/FooterSection';
import { QuickViewModal } from './components/QuickViewModal';
import { PolicyModal, PolicyTab } from './components/PolicyModal';
import { ResumeDesignItem } from './types';
import { RESUME_DESIGNS, WHATSAPP_SUPPORT_PHONE } from './data/templates';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickViewDesign, setSelectedQuickViewDesign] = useState<ResumeDesignItem | null>(null);
  const [policyModalTab, setPolicyModalTab] = useState<PolicyTab | null>(null);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOrderDesignWhatsApp = (design: ResumeDesignItem) => {
    const message = `Hello Aryan bhai, I want to order Resume Design ${design.id}. Please share the next steps.`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const handleOrderP000 = () => {
    const p000 = RESUME_DESIGNS.find((d) => d.id === 'P000') || RESUME_DESIGNS[0];
    handleOrderDesignWhatsApp(p000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 w-full max-w-full overflow-x-hidden">
      
      {/* 1. Top Notice Ribbon */}
      <TopTickerRibbon />

      {/* 2. Main Navigation Bar with Search */}
      <HeaderNav
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onNavigate={scrollTo}
        onOpenPolicy={setPolicyModalTab}
      />

      <main className="flex-1">
        {/* 3. Hero Section with Fixed Official Profile */}
        <HeroSection
          onExploreDesigns={() => scrollTo('catalog')}
          onHowItWorks={() => scrollTo('how-it-works')}
          onOrderP000={handleOrderP000}
        />

        {/* 4. Catalog Section */}
        <CatalogSection
          searchQuery={searchQuery}
          onQuickView={(design) => setSelectedQuickViewDesign(design)}
          onOrderDesign={handleOrderDesignWhatsApp}
        />

        {/* 5. Before vs After Transformation Comparison */}
        <BeforeVsAfterSection />

        {/* 6. How It Works: Step-by-Step */}
        <HowItWorks50Advance />

        {/* 7. Delivery Policies & Terms */}
        <PoliciesSection onOpenPolicy={setPolicyModalTab} />
      </main>

      {/* 10. Footer Section */}
      <FooterSection
        onNavigate={scrollTo}
        onOpenPolicy={setPolicyModalTab}
      />

      {/* 11. Quick View Modal for A4 Layout Preview */}
      <QuickViewModal
        design={selectedQuickViewDesign}
        onClose={() => setSelectedQuickViewDesign(null)}
        onOrderNow={(design) => {
          handleOrderDesignWhatsApp(design);
          setSelectedQuickViewDesign(null);
        }}
      />

      {/* 12. Interactive Policy Modal (Privacy, Refund, Terms) */}
      <PolicyModal
        isOpen={policyModalTab !== null}
        activeTab={policyModalTab || 'privacy'}
        onTabChange={setPolicyModalTab}
        onClose={() => setPolicyModalTab(null)}
      />
    </div>
  );
}
