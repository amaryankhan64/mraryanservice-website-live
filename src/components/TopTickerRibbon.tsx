import React from 'react';
import { ShieldCheck, FileText, Globe, Zap, Clock, CheckCircle2 } from 'lucide-react';

const TICKER_ITEMS = [
  {
    icon: <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse inline-block" />,
    label: '1-ON-1 RESUME SPECIALIST',
    detail: 'Direct drafting & personalized consultation with Aryan Khan',
    highlight: true,
  },
  {
    icon: <FileText className="w-3.5 h-3.5 text-blue-300 shrink-0" />,
    label: 'FINAL DELIVERY',
    detail: 'Editable Word (.docx) + Print-Ready PDF with ATS Font Embeds',
    highlight: false,
  },
  {
    icon: <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />,
    label: 'ATS-FRIENDLY FORMATTING',
    detail: 'Clean linear layouts designed for automated applicant parsing',
    highlight: false,
  },
  {
    icon: <Clock className="w-3.5 h-3.5 text-amber-300 shrink-0" />,
    label: '24–48H FAST TURNAROUND',
    detail: 'Priority drafting & direct 1-on-1 revision support',
    highlight: false,
  },
  {
    icon: <Globe className="w-3.5 h-3.5 text-blue-300 shrink-0" />,
    label: 'GLOBAL ATS FORMATS',
    detail: 'India IT/Core, Gulf / UAE EPC & European Europass formats',
    highlight: false,
  },
  {
    icon: <Zap className="w-3.5 h-3.5 text-yellow-300 shrink-0" />,
    label: '63 CURATED DESIGNS',
    detail: 'Professional executive layouts curated for diverse industries',
    highlight: false,
  },
];

export const TopTickerRibbon: React.FC = () => {
  return (
    <div className="w-full bg-[#1e40af] text-white text-[11px] sm:text-xs font-semibold tracking-wide py-2 overflow-hidden shadow-xs select-none relative group border-b border-blue-900/30">
      
      {/* Left & Right Subtle Fade Gradients */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#1e40af] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#1e40af] to-transparent z-10 pointer-events-none" />

      {/* Continuously Running Marquee Track (Repeated twice for seamless infinite loop) */}
      <div className="animate-ticker-marquee flex items-center">
        
        {/* Set 1 */}
        <div className="flex items-center shrink-0 space-x-8 pr-8">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`ticker-1-${idx}`} className="flex items-center gap-2 shrink-0">
              {item.icon}
              <span className={`uppercase font-bold tracking-wider ${item.highlight ? 'text-white' : 'text-blue-100'}`}>
                {item.label}
              </span>
              <span className="text-blue-300 font-normal hidden sm:inline">
                • {item.detail}
              </span>
              <span className="text-blue-400/50 mx-2">|</span>
            </div>
          ))}
        </div>

        {/* Set 2 (Identical Clone for 100% Seamless Infinite Scrolling) */}
        <div className="flex items-center shrink-0 space-x-8 pr-8" aria-hidden="true">
          {TICKER_ITEMS.map((item, idx) => (
            <div key={`ticker-2-${idx}`} className="flex items-center gap-2 shrink-0">
              {item.icon}
              <span className={`uppercase font-bold tracking-wider ${item.highlight ? 'text-white' : 'text-blue-100'}`}>
                {item.label}
              </span>
              <span className="text-blue-300 font-normal hidden sm:inline">
                • {item.detail}
              </span>
              <span className="text-blue-400/50 mx-2">|</span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
