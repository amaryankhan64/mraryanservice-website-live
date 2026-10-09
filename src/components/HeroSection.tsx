import React, { useState } from 'react';
import { ShieldCheck, Lock, Globe, ArrowRight, Zap, Check, MessageSquare, Sparkles, Clock } from 'lucide-react';
import { WHATSAPP_SUPPORT_PHONE, GOOGLE_BUSINESS_URL, INSTAGRAM_PROFILE_URL, FACEBOOK_PROFILE_URL } from '../data/templates';
import { GoogleReviewsTicker } from './GoogleReviewsTicker';

interface HeroSectionProps {
  onExploreDesigns: () => void;
  onHowItWorks: () => void;
  onOrderP000: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDesigns,
  onHowItWorks,
  onOrderP000,
}) => {
  const [imgLoadError, setImgLoadError] = useState(false);
  const officialPhoto = '/aryan-khan.png';

  return (
    <section id="hero" className="relative pt-4 pb-4 sm:pt-8 sm:pb-6 border-b border-slate-200 bg-tech-grid overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4 text-left">
            
            {/* Giant Title */}
            <div className="space-y-1 sm:space-y-2">
              <h1 className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] break-words">
                <span className="text-slate-900">Professional </span>
                <span className="text-[#2563EB]">Resume</span>
              </h1>
              <div className="text-2xl sm:text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.08] break-words">
                <span className="text-[#2563EB]">Writing </span>
                <span className="text-slate-900">Service</span>
              </div>
            </div>

            {/* Tagline Directly under Title */}
            <p className="text-sm sm:text-lg md:text-xl text-slate-800 font-bold leading-relaxed tracking-tight break-words">
              Professional ATS Resume & LinkedIn Optimization Services across India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <button
                onClick={onExploreDesigns}
                className="inline-flex items-center gap-2 px-5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95"
              >
                <span>Explore 63 Templates</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Real 1-by-1 Google Reviews in a Patla / Slim Box */}
            <div className="pt-1">
              <GoogleReviewsTicker />
            </div>

          </div>

          {/* Right Hero Column: Aryan Khan Professional Profile Card (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-white rounded-3xl p-5 sm:p-6 shadow-2xl border border-slate-200 relative text-left">
              
              {/* Inside Profile Card: Big Photo & Clean Header */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 space-y-4">
                
                {/* Fixed Non-Editable Official Founder Photo Container */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-md border-2 border-white ring-2 ring-slate-200 bg-slate-900 select-none">
                  {!imgLoadError ? (
                    <img
                      src={officialPhoto}
                      alt="Aryan Khan - Founder Mr Aryan Service"
                      onError={() => setImgLoadError(true)}
                      className="w-full h-72 sm:h-84 object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-72 sm:h-84 bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 text-white font-black text-4xl flex flex-col items-center justify-center gap-3">
                      <div className="w-24 h-24 rounded-full bg-white/10 border-2 border-amber-400/40 flex items-center justify-center text-amber-400 font-serif">
                        AK
                      </div>
                      <div className="text-base font-bold tracking-wider text-white">MR ARYAN SERVICE</div>
                      <div className="text-xs font-medium tracking-wide text-slate-400">Official Brand Profile</div>
                    </div>
                  )}
                </div>

                {/* Name & Title Lockup */}
                <div className="pt-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-black text-slate-900 text-lg sm:text-xl tracking-tight">
                      Aryan Khan
                    </h3>
                    <span className="text-[10px] font-bold bg-blue-100 text-[#2563EB] px-2 py-0.5 rounded-full">
                      Founder
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-900 font-bold mt-1">
                    Professional Resume Writing service
                  </p>

                  {/* Below blue title line: Mr Aryan Service + Google, Instagram, Facebook */}
                  <div className="flex items-center justify-between mt-1.5 pt-0.5">
                    <p className="text-xs sm:text-sm font-black tracking-tight leading-none">
                      <span className="text-slate-900">Mr Aryan </span>
                      <span className="text-[#2563EB]">Service</span>
                    </p>

                    {/* Highlighted Social Brand Icons with Generous Spacing */}
                    <div className="flex items-center gap-3 sm:gap-3.5 p-1.5 px-3 rounded-full bg-slate-100/90 border border-slate-200 shadow-xs">
                      {/* Google */}
                      <a
                        href={GOOGLE_BUSINESS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-white border border-slate-300 shadow-xs flex items-center justify-center hover:scale-115 hover:shadow-md transition-all cursor-pointer ring-1 ring-slate-200"
                        title="Mr Aryan Service Official Google Profile"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                        </svg>
                      </a>

                      {/* Instagram */}
                      <a
                        href={INSTAGRAM_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-sm shadow-pink-500/30 flex items-center justify-center hover:scale-115 hover:shadow-md transition-all cursor-pointer ring-1 ring-white/60"
                        title="Aryan Khan Official Instagram Profile"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      {/* Facebook */}
                      <a
                        href={FACEBOOK_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full bg-[#1877F2] shadow-sm shadow-blue-500/30 flex items-center justify-center hover:scale-115 hover:shadow-md transition-all cursor-pointer ring-1 ring-white/60"
                        title="Mr Aryan Service Official Facebook Page"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Card Footer: Slim Compact Direct WhatsApp Button & Seasonal Discount Box */}
              <div className="pt-2.5 mt-1 space-y-2">
                <a
                  href={`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encodeURIComponent(
                    'Hello Aryan bhai, maine aapka profile dekha. Mujhe apna resume ATS-friendly transform karwana hai. Please details share kijiye.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2 sm:py-2.5 px-4 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm tracking-wide shadow-sm hover:shadow-md transition-all cursor-pointer active:scale-[0.98] text-center"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat with Aryan</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Trust Feature Boxes (2 Boxes Side-by-Side matching Template section) */}
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-slate-200 grid grid-cols-2 max-w-5xl mx-auto gap-2 sm:gap-4 text-left">
          
          {/* Box 1: ATS-Friendly Formatting */}
          <div className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-blue-50 text-[#2563EB] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] sm:text-sm font-bold text-slate-900 truncate">ATS-Friendly Formatting</div>
              <div className="text-[9px] sm:text-xs text-slate-500 truncate">Standard clean linear layout</div>
            </div>
          </div>

          {/* Box 2: Dual File Deliverables */}
          <div className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
              <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] sm:text-sm font-bold text-slate-900 truncate">Dual Source Deliverables</div>
              <div className="text-[9px] sm:text-xs text-slate-500 truncate">Editable Word (.docx) &amp; PDF</div>
            </div>
          </div>

          {/* Box 3: Gulf & Europe Formats */}
          <div className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] sm:text-sm font-bold text-slate-900 truncate">Gulf & Europe Formats</div>
              <div className="text-[9px] sm:text-xs text-slate-500 truncate">Dubai, Qatar & Europass</div>
            </div>
          </div>

          {/* Box 4: 24–48h Delivery */}
          <div className="flex items-center gap-1.5 sm:gap-3 p-2 sm:p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] sm:text-sm font-bold text-slate-900 truncate">24–48h Fast Delivery</div>
              <div className="text-[9px] sm:text-xs text-slate-500 truncate">First draft in 24 to 48 hrs</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
