import React from 'react';
import { ResumeDesignItem } from '../types';
import { X, MessageSquare } from 'lucide-react';
import { LuxuryTemplatePoster } from './LuxuryTemplatePoster';

interface QuickViewModalProps {
  design: ResumeDesignItem | null;
  onClose: () => void;
  onOrderNow: (design: ResumeDesignItem) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  design,
  onClose,
  onOrderNow,
}) => {
  if (!design) return null;

  const photoSrc =
    (design.id === 'I004' ? '/templates/1004.png' : undefined) ||
    design.imageUrl ||
    `/templates/${design.id}.png`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl w-full max-w-3xl max-h-[95vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-black px-3 py-1 rounded-md bg-[#0b1727] text-amber-300 border border-amber-400/60 shadow-xs uppercase tracking-wider">
              ID: {design.id}
            </span>
            <div>
              <h2 className="text-base sm:text-lg font-serif font-bold text-slate-900">
                Professional Resume {design.id}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: ONLY PHOTO / TEMPLATE SHOWCASE (NO TEXT DETAILS) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-[#f5f2eb] flex flex-col items-center justify-center">
          
          {photoSrc ? (
            /* 1. Real Uploaded Template Photo in Full HD */
            <div className="w-full max-w-[620px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
              <img
                src={photoSrc}
                alt={`Resume Template ${design.id}`}
                className="w-full max-h-[75vh] object-contain"
              />
            </div>
          ) : (
            /* 2. Luxury Template Poster */
            <div className="w-full max-w-[580px] flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white">
                <LuxuryTemplatePoster design={design} />
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer with Clean WhatsApp Action Button (No Price, No Advance) */}
        <div className="px-5 py-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-left w-full sm:w-auto">
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              📄 Professional ATS Format • Direct Custom Tailoring
            </span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => onOrderNow(design)}
              className="flex-1 sm:flex-initial py-3 px-6 rounded-xl bg-[#10b981] hover:bg-[#059669] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md active:scale-95 transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Get on WhatsApp (ID: {design.id})</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
