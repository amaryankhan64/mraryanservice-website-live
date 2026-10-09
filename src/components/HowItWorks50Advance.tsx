import React from 'react';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_SUPPORT_PHONE } from '../data/templates';

export const HowItWorks50Advance: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Design & ID Selection',
      desc: 'Browse our 63 catalog designs and choose your preferred Content ID (e.g. P000, 1001, PR001). Click "Chat to Order" to connect on WhatsApp.',
      badge: 'Step 1',
    },
    {
      num: '02',
      title: 'Share Profile & Career Goals',
      desc: 'Send your existing CV or employment history. Aryan Khan directly reviews your profile, target industry, and career objectives.',
      badge: 'Consultation',
    },
    {
      num: '03',
      title: 'First Draft in 24–48 Hours',
      desc: 'Receive your complete re-written draft with clear linear section headers and bullet points. Review line-by-line and request any refinements.',
      badge: 'Fast Turnaround',
    },
    {
      num: '04',
      title: 'Final Word & PDF Handover',
      desc: 'Once you approve the draft, receive both editable Microsoft Word (.docx) for ongoing future updates and print-ready high-resolution PDF.',
      badge: 'Final Delivery',
    },
  ];

  const handleStartOrder = () => {
    const text = encodeURIComponent(
      'Hello Mr. Aryan, I want to start my resume writing process. Please share the details and intake steps.'
    );
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="how-it-works" className="py-6 sm:py-12 bg-white border-b border-slate-200 text-center">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl mx-auto mb-5 sm:mb-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB]">
            SIMPLE 4-STEP PROCESS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            How It Works: Step-by-Step
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Aasan aur professional process. Apne pasandeeda design ID ke sath WhatsApp par connect karein aur apna ATS-friendly resume banwayein.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-left max-w-6xl mx-auto">
          {steps.map((st) => (
            <div
              key={st.num}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-3xl font-black text-[#2563EB]">
                    {st.num}
                  </span>
                  <span className="text-[11px] font-bold bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full">
                    {st.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {st.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Crafted by Mr Aryan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Box */}
        <div className="mt-6 sm:mt-8">
          <button
            onClick={handleStartOrder}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-base shadow-md transition-all cursor-pointer active:scale-98 max-w-full text-center"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Connect on WhatsApp with Mr Aryan</span>
          </button>
        </div>

      </div>
    </section>
  );
};
