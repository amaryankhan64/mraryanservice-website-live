import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight, Zap, X, ShieldCheck } from 'lucide-react';
import { WHATSAPP_SUPPORT_PHONE } from '../data/templates';

export const BeforeVsAfterSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'comparison' | 'interactive'>('comparison');

  const handleTransformWhatsApp = () => {
    const text = encodeURIComponent(
      'Hello Mr. Aryan, I saw the Before vs After ATS comparison. I want to upgrade my unoptimized resume to your ATS-friendly linear format. Please share details.'
    );
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="before-after" className="py-6 sm:py-12 bg-slate-50 border-b border-slate-200 text-center">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl mx-auto mb-5 sm:mb-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB]">
            STRUCTURE COMPARISON
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Layout &amp; Structure Comparison
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Compare complex multi-column graphic templates with a clean, single-column ATS-friendly linear layout designed for applicant tracking software.
          </p>
        </div>

        {/* Side-by-Side Comparison Grid (2 Boxes Ek Sath Side-by-Side) */}
        <div className="grid grid-cols-2 gap-2 sm:gap-6 text-left max-w-5xl mx-auto">
          
          {/* Before: Multi-Column Graphic Layout */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-6 border-2 border-red-200 shadow-2xs flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1 pb-2 border-b border-red-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />
                  <span className="font-extrabold text-slate-900 text-[11px] sm:text-base">GRAPHIC FORMAT</span>
                </div>
                <span className="text-[9px] sm:text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-1.5 py-0.5 rounded-full whitespace-nowrap">
                  COMPLEX LAYOUT
                </span>
              </div>

              <div className="bg-red-50/50 rounded-lg sm:rounded-xl p-2 sm:p-3.5 space-y-2 text-[10px] sm:text-xs text-slate-700">
                <div className="font-bold text-red-700">Multi-Column / Graphic Layout:</div>
                <ul className="space-y-1 text-slate-600">
                  <li className="flex items-center gap-1">
                    <X className="w-3 h-3 text-red-500 shrink-0" />
                    <span>Multi-column tables may disrupt text flow</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <X className="w-3 h-3 text-red-500 shrink-0" />
                    <span>Complex graphics and non-standard icons</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <X className="w-3 h-3 text-red-500 shrink-0" />
                    <span>Inconsistent header hierarchy</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 text-[9px] sm:text-xs text-slate-500 italic">
              Note: May cause parsing order issues in automated ATS filters.
            </div>
          </div>

          {/* After: Linear ATS-Friendly Layout */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-2.5 sm:p-6 border-2 border-emerald-400 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-1 pb-2 border-b border-emerald-100">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" />
                  <span className="font-extrabold text-slate-900 text-[11px] sm:text-base">LINEAR FORMAT</span>
                </div>
                <span className="text-[9px] sm:text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>ATS-FRIENDLY</span>
                </span>
              </div>

              <div className="bg-emerald-50/50 rounded-lg sm:rounded-xl p-2 sm:p-3.5 space-y-2 text-[10px] sm:text-xs text-slate-800">
                <div className="font-bold text-emerald-800">Mr Aryan Linear Structure:</div>
                <ul className="space-y-1 text-slate-700">
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Single-column chronological layout</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Clear section titles &amp; bulleted impact</span>
                  </li>
                  <li className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                    <span>Fully text-searchable PDF and Word .docx</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-2 text-[9px] sm:text-xs text-emerald-700 font-bold">
              Result: Clean, easily readable structure for both recruiters &amp; software.
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="mt-4 sm:mt-6 text-center">
          <button
            onClick={handleTransformWhatsApp}
            className="inline-flex items-center gap-1.5 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-95"
          >
            <span>Upgrade to ATS Linear Format on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
