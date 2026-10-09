import React, { useState } from 'react';
import { ShieldCheck, FileCheck, Clock, RefreshCw, Lock, ArrowRight, CheckCircle2, ChevronRight, Eye } from 'lucide-react';
import { PolicyTab } from './PolicyModal';
import { PRIVACY_POLICY, TERMS_CONDITIONS, REFUND_POLICY } from '../data/policies';

interface PoliciesSectionProps {
  onOpenPolicy?: (tab: PolicyTab) => void;
}

export const PoliciesSection: React.FC<PoliciesSectionProps> = ({ onOpenPolicy }) => {
  const [activeInlineTab, setActiveInlineTab] = useState<PolicyTab>('privacy');

  const currentPolicy =
    activeInlineTab === 'privacy'
      ? PRIVACY_POLICY
      : activeInlineTab === 'refund'
      ? REFUND_POLICY
      : TERMS_CONDITIONS;

  const handleCardClick = (tab: PolicyTab) => {
    setActiveInlineTab(tab);
    if (onOpenPolicy) {
      onOpenPolicy(tab);
    }
  };

  return (
    <section id="policies" className="py-8 sm:py-14 bg-white border-b border-slate-200 text-left scroll-mt-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl mb-6 sm:mb-8 text-center sm:text-left">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB]">
            TRANSPARENT CLIENT PROTECTION
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Official Policies &amp; Legal Terms
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Complete transparency before you place an order. Read our authentic Privacy Policy, Terms &amp; Conditions, and Refund &amp; Revision Policy below.
          </p>
        </div>

        {/* 3 Prominent Policy Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          
          {/* Card 1: Privacy Policy */}
          <div
            onClick={() => handleCardClick('privacy')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
              activeInlineTab === 'privacy'
                ? 'border-blue-500 bg-blue-50/40 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-blue-300 hover:shadow-xs'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Privacy Policy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                100% Client career record confidentiality. Personal phone numbers &amp; CV details are strictly protected and never shared or sold.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Read Full Privacy Policy</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 2: Terms & Conditions */}
          <div
            onClick={() => handleCardClick('terms')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
              activeInlineTab === 'terms'
                ? 'border-indigo-500 bg-indigo-50/40 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-indigo-300 hover:shadow-xs'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-3">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Terms &amp; Conditions
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                24–48 Hours turnaround SLA, editable Word (.docx) &amp; PDF deliverables, realistic ATS linear formatting standards.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-indigo-600">
              <span>Read Full Terms</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Card 3: Refund & Revision Policy */}
          <div
            onClick={() => handleCardClick('refund')}
            className={`p-5 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
              activeInlineTab === 'refund'
                ? 'border-emerald-500 bg-emerald-50/40 shadow-sm'
                : 'border-slate-200 bg-slate-50 hover:border-emerald-300 hover:shadow-xs'
            }`}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-1">
                Refund &amp; Revision Policy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                14-day complimentary revisions. Dedicated drafting, personalized consultation, and full support until you are completely satisfied.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-emerald-700">
              <span>Read Refund &amp; Revision Rules</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

        </div>

        {/* 3 Interactive Policy Tabs on Page */}
        <div className="flex border-b border-slate-200 gap-2 overflow-x-auto pb-1 max-w-2xl no-scrollbar">
          <button
            onClick={() => setActiveInlineTab('privacy')}
            className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeInlineTab === 'privacy'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => setActiveInlineTab('terms')}
            className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeInlineTab === 'terms'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Lock className="w-4 h-4" />
            <span>Terms &amp; Conditions</span>
          </button>

          <button
            onClick={() => setActiveInlineTab('refund')}
            className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeInlineTab === 'refund'
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <RefreshCw className="w-4 h-4" />
            <span>Refund Policy</span>
          </button>
        </div>

        {/* Full On-Page Policy Reader Box */}
        <div className="mt-4 bg-slate-50 rounded-3xl border border-slate-200 p-5 sm:p-8 shadow-xs">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-slate-200 gap-2">
            <div>
              <h3 className="text-lg sm:text-2xl font-black text-slate-900 flex items-center gap-2">
                <span>{currentPolicy.title}</span>
                <span className="text-[10px] sm:text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  Authentic 2026 Terms
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Last updated: {currentPolicy.lastUpdated} • Mr Aryan Service
              </p>
            </div>

            {onOpenPolicy && (
              <button
                onClick={() => onOpenPolicy(activeInlineTab)}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer bg-white px-3 py-1.5 rounded-lg border border-slate-200 shadow-2xs hover:shadow-xs"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Open in Pop-up Modal</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Policy Summary */}
          <div className="p-4 bg-white border border-slate-200 rounded-2xl mb-6 text-xs sm:text-sm text-slate-700 italic shadow-2xs">
            {currentPolicy.summary}
          </div>

          {/* Full Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPolicy.sections.map((sec, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/80 shadow-2xs space-y-2">
                <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{sec.heading}</span>
                </h4>
                <div className="space-y-1.5 text-xs text-slate-600 leading-relaxed">
                  {sec.content.map((bullet, bIdx) => (
                    <p key={bIdx}>{bullet}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
