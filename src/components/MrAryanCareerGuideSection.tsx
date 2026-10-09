import React, { useState } from 'react';
import { MessageSquare } from 'lucide-react';
import { WHATSAPP_SUPPORT_PHONE } from '../data/templates';

interface MrAryanCareerGuideSectionProps {
  onApplyNow?: () => void;
}

export const MrAryanCareerGuideSection: React.FC<MrAryanCareerGuideSectionProps> = () => {
  const [imgError, setImgError] = useState(false);
  const photoSrc = '/aryan-khan.png';

  const handleApplyWhatsApp = () => {
    const msg = `Hello Mr. Aryan sir, maine aapka profile dekha. Mujhe apna resume ATS-friendly transform karwana hai. Please details share kijiye.`;
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  const handleChatWhatsApp = () => {
    const msg = `Hello Mr. Aryan sir, mujhe aapse apne resume review, ATS score aur career guidance ke baare me baat karni hai.`;
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-8 sm:py-14 bg-gradient-to-b from-[#0a1120] to-[#040812] text-left border-y border-slate-800">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Fixed Founder Office Showcase Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-tr from-slate-800 to-slate-900 rounded-3xl p-3 sm:p-4 shadow-2xl border-2 border-slate-700/80 relative">
              
              <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-700 bg-slate-950 relative">
                
                <div className="relative w-full h-[380px] sm:h-[460px] overflow-hidden bg-slate-900">
                  {!imgError ? (
                    <img
                      src={photoSrc}
                      alt="Mr. Aryan - Founder & Lead ATS Resume Architect"
                      onError={() => setImgError(true)}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#020617] flex flex-col items-center justify-center p-6 text-center text-white relative">
                      <div className="w-28 h-28 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-black text-4xl flex items-center justify-center shadow-xl border-4 border-slate-700 mb-4">
                        AK
                      </div>
                      <div className="text-amber-400 font-bold text-base tracking-wide">MR ARYAN SERVICE</div>
                      <div className="text-slate-400 text-xs mt-1">Resume | CV | Cover Letter | LinkedIn</div>
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Title, Quote, 4 Feature Cards & CTA Buttons */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#064e3b]/80 border border-emerald-500/40 text-emerald-400 text-xs font-black tracking-wider uppercase shadow-xs">
              <span className="text-emerald-400">✓</span>
              <span>100% ATS PARSER COMPLIANCE • DIRECT CONSULTATION</span>
            </div>

            {/* Main Heading in Devanagari Hindi matching screenshot */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-tight tracking-tight">
              Mr. Aryan से मिलिए — <br />
              <span className="text-[#fbbf24]">आपके ATS Resume &amp; Career Specialist</span>
            </h2>

            {/* Mission Quote */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
              "नमस्ते, मैं <strong className="text-white font-bold">Aryan</strong> हूँ। हमारा मुख्य उद्देश्य भारत और विदेश (Gulf/Europe) के फ्रेशर्स और प्रोफेशनल्स के लिए ATS-फ्रेंडली, रिक्रूटर-रेडी रिज्यूमे तैयार करके उन्हें आगे बढ़ाना है — 100% पारदर्शी और प्रोफेशनल सपोर्ट के साथ।"
            </p>

            {/* 4 Feature Grid Cards (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              
              {/* Card 1 */}
              <div className="bg-[#121b2d] border border-slate-800 rounded-2xl p-4 flex items-start gap-3 hover:border-slate-700 transition-colors shadow-xs">
                <span className="text-emerald-400 font-black text-base mt-0.5 shrink-0">✓</span>
                <div>
                  <div className="font-bold text-white text-sm sm:text-[15px]">
                    ATS-Friendly Linear Layout
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">
                    Workday, Taleo, Greenhouse &amp; Lever सॉफ्टवेयर टेस्टेड लेआउट।
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-[#121b2d] border border-slate-800 rounded-2xl p-4 flex items-start gap-3 hover:border-slate-700 transition-colors shadow-xs">
                <span className="text-emerald-400 font-black text-base mt-0.5 shrink-0">✓</span>
                <div>
                  <div className="font-bold text-white text-sm sm:text-[15px]">
                    1-on-1 Dedicated Support
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">
                    पारदर्शी प्रक्रिया — व्यक्तिगत मार्गदर्शन और 14 दिनों तक फ्री रिवीज़न सपोर्ट।
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-[#121b2d] border border-slate-800 rounded-2xl p-4 flex items-start gap-3 hover:border-slate-700 transition-colors shadow-xs">
                <span className="text-emerald-400 font-black text-base mt-0.5 shrink-0">✓</span>
                <div>
                  <div className="font-bold text-white text-sm sm:text-[15px]">
                    Dual Source Deliverables
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">
                    Microsoft Word (.docx) और हाई-रेज़ोल्यूशन प्रिंटेबल PDF फाइल्स।
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-[#121b2d] border border-slate-800 rounded-2xl p-4 flex items-start gap-3 hover:border-slate-700 transition-colors shadow-xs">
                <span className="text-emerald-400 font-black text-base mt-0.5 shrink-0">✓</span>
                <div>
                  <div className="font-bold text-white text-sm sm:text-[15px]">
                    Fast 24–48h SLA Delivery
                  </div>
                  <div className="text-xs text-slate-400 mt-1 leading-snug">
                    प्राथमिकता ड्राफ्टिंग और डायरेक्ट व्हाट्सएप अपडेट्स।
                  </div>
                </div>
              </div>

            </div>

            {/* Action CTA Buttons matching Screenshot 2 */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                onClick={handleApplyWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Start Order with Mr Aryan</span>
              </button>

              <button
                onClick={handleChatWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-sm transition-all cursor-pointer active:scale-95"
              >
                <span>Direct WhatsApp Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
