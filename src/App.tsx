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
import { installMetaPixel, installSiteTracking, trackTemplateOrder, trackTemplatePreview } from './analytics';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuickViewDesign, setSelectedQuickViewDesign] = useState<ResumeDesignItem | null>(null);
  const [policyModalTab, setPolicyModalTab] = useState<PolicyTab | null>(null);

  useEffect(() => {
    installMetaPixel();
    installSiteTracking();
  }, []);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderDesignWhatsApp = (design: ResumeDesignItem) => {
    trackTemplateOrder(design.id);
    const message = `Hello Aryan bhai, I want to order Resume Design ${design.id}. Please share the next steps.`;
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  };

  const handleOrderP000 = () => {
    const p000 = RESUME_DESIGNS.find((d) => d.id === 'P000') || RESUME_DESIGNS[0];
    handleOrderDesignWhatsApp(p000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900 w-full max-w-full overflow-x-hidden">
      <TopTickerRibbon />
      <HeaderNav searchQuery={searchQuery} onSearchChange={setSearchQuery} onNavigate={scrollTo} onOpenPolicy={setPolicyModalTab} />
      <main className="flex-1">
        <HeroSection onExploreDesigns={() => scrollTo('catalog')} onHowItWorks={() => scrollTo('how-it-works')} onOrderP000={handleOrderP000} />
        <CatalogSection
          searchQuery={searchQuery}
          onQuickView={(design) => {
            trackTemplatePreview(design.id);
            setSelectedQuickViewDesign(design);
          }}
          onOrderDesign={handleOrderDesignWhatsApp}
        />
        <BeforeVsAfterSection />
        <HowItWorks50Advance />
        <PoliciesSection onOpenPolicy={setPolicyModalTab} />
      </main>
      <FooterSection onNavigate={scrollTo} onOpenPolicy={setPolicyModalTab} />
      <QuickViewModal
        design={selectedQuickViewDesign}
        onClose={() => setSelectedQuickViewDesign(null)}
        onOrderNow={(design) => {
          handleOrderDesignWhatsApp(design);
          setSelectedQuickViewDesign(null);
        }}
      />
      <PolicyModal isOpen={policyModalTab !== null} activeTab={policyModalTab || 'privacy'} onTabChange={setPolicyModalTab} onClose={() => setPolicyModalTab(null)} />
    </div>
  );
}
