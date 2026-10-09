import React, { useEffect } from 'react';
import { X, ShieldCheck, RefreshCw, Lock, CheckCircle2, MessageSquare } from 'lucide-react';
import { PRIVACY_POLICY, TERMS_CONDITIONS, REFUND_POLICY, PolicySectionData } from '../data/policies';
import { WHATSAPP_SUPPORT_PHONE } from '../data/templates';

export type PolicyTab = 'privacy' | 'refund' | 'terms';

interface PolicyModalProps {
  isOpen: boolean;
  activeTab: PolicyTab;
  onTabChange: (tab: PolicyTab) => void;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({
  isOpen,
  activeTab,
  onTabChange,
  onClose,
}) => {
  // Lock background scrolling and handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  let policyData: PolicySectionData = PRIVACY_POLICY;
  if (activeTab === 'refund') policyData = REFUND_POLICY;
  if (activeTab === 'terms') policyData = TERMS_CONDITIONS;

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent(
      `Hello Aryan bhai, I have a question regarding your ${policyData.title}. Please clarify.`
    );
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
      onClick={onClose}
      className="fixed inset-0 z-[9999] overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl w-full max-w-3xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200 text-left relative"
      >
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200 flex items-center justify-center font-bold shrink-0">
              {activeTab === 'privacy' && <ShieldCheck className="w-5 h-5 text-blue-600" />}
              {activeTab === 'refund' && <RefreshCw className="w-5 h-5 text-emerald-600" />}
              {activeTab === 'terms' && <Lock className="w-5 h-5 text-indigo-600" />}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 id="policy-modal-title" className="text-base sm:text-xl font-black text-slate-900 tracking-tight">
                  {policyData.title}
                </h2>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified Legal Terms
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Mr Aryan Service • Last Updated: {policyData.lastUpdated}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close policy modal"
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-slate-200 bg-slate-100/80 p-1.5 gap-1.5 text-xs sm:text-sm font-semibold">
          <button
            onClick={() => onTabChange('privacy')}
            className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-blue-700 shadow-xs font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>Privacy Policy</span>
          </button>

          <button
            onClick={() => onTabChange('terms')}
            className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-indigo-700 shadow-xs font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <Lock className="w-4 h-4 text-indigo-600" />
            <span>Terms &amp; Conditions</span>
          </button>

          <button
            onClick={() => onTabChange('refund')}
            className={`flex-1 py-2 sm:py-2.5 px-3 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
              activeTab === 'refund'
                ? 'bg-white text-emerald-700 shadow-xs font-bold border border-slate-200'
                : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
            }`}
          >
            <RefreshCw className="w-4 h-4 text-emerald-600" />
            <span>Refund Policy</span>
          </button>
        </div>

        {/* Tab Summary Callout */}
        <div className="bg-slate-50 px-6 py-3 border-b border-slate-200/80 text-xs sm:text-sm text-slate-700">
          <p className="italic text-slate-600 leading-relaxed">
            {policyData.summary}
          </p>
        </div>

        {/* Tab Body with Full Legal Sections */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-xs sm:text-sm text-slate-700 leading-relaxed">
          {policyData.sections.map((sec, idx) => (
            <div key={idx} className="space-y-2 border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
              <h3 className="font-extrabold text-slate-900 text-sm sm:text-base flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                <span>{sec.heading}</span>
              </h3>
              <div className="space-y-1.5 pl-3 sm:pl-4">
                {sec.content.map((bullet, bIdx) => (
                  <p key={bIdx} className="text-slate-600 leading-relaxed">
                    {bullet}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer with Direct Inquiry */}
        <div className="px-5 py-3.5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-slate-500">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Authentic &amp; Enforceable Policy • Mr Aryan Service</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppHelp}
              className="py-2 px-3.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Questions? WhatsApp Us</span>
            </button>

            <button
              onClick={onClose}
              className="py-2 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs cursor-pointer transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
