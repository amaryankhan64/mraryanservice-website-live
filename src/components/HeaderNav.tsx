import React, { useState } from 'react';
import { Search, MessageSquare, Menu, X, ArrowRight } from 'lucide-react';
import { WHATSAPP_SUPPORT_PHONE } from '../data/templates';

import { PolicyTab } from './PolicyModal';

interface HeaderNavProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onNavigate: (sectionId: string) => void;
  onOpenPolicy?: (tab: PolicyTab) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  searchQuery,
  onSearchChange,
  onNavigate,
  onOpenPolicy,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      'Hello Mr. Aryan, I would like to place an order for ATS Resume Writing. Please share available slots.'
    );
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-[1500px] mx-auto px-2.5 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Brand Lockup with Fixed Official Founder Emblem */}
        <div
          onClick={() => handleNav('hero')}
          className="flex items-center gap-2 sm:gap-3 cursor-pointer select-none shrink-0"
        >
          <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#2563EB] shadow-xs shrink-0 bg-slate-900 flex items-center justify-center">
            <img
              src="/aryan-khan.png"
              alt="Mr Aryan Service"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="text-base sm:text-2xl font-black tracking-tight text-slate-900 leading-none whitespace-nowrap">
              Mr Aryan <span className="text-[#2563EB]">Service</span>
            </div>
          </div>
        </div>

        {/* Real-Time Live Search Bar */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 63 designs, e.g. P000, ATS, Normal, Gulf..."
              className="w-full pl-10 pr-9 py-2 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-full text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 text-xs"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <button
            onClick={() => handleNav('catalog')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer py-1"
          >
            Resume Designs
          </button>
          <button
            onClick={() => handleNav('before-after')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer py-1"
          >
            Before vs After
          </button>
          <button
            onClick={() => handleNav('how-it-works')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer py-1"
          >
            How It Works
          </button>
          <button
            onClick={() => handleNav('policies')}
            className="hover:text-[#2563EB] transition-colors cursor-pointer py-1"
          >
            Policies
          </button>
        </nav>

        {/* Action Button: WhatsApp Order */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            onClick={handleWhatsAppDirect}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs sm:text-sm tracking-wide shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer active:scale-95 whitespace-nowrap"
          >
            {/* Real Official WhatsApp Icon */}
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp Order</span>
            <span className="sm:hidden">Order</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            className="xl:hidden p-1.5 sm:p-2 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-100 cursor-pointer shrink-0"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-3">
          {/* Mobile search */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search 63 designs..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full text-slate-800"
            />
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-semibold text-slate-700">
            <button
              onClick={() => handleNav('catalog')}
              className="text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Resume Designs (63 Designs)
            </button>
            <button
              onClick={() => handleNav('before-after')}
              className="text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              Before vs After Transformation
            </button>
            <button
              onClick={() => handleNav('how-it-works')}
              className="text-left py-2 px-3 rounded hover:bg-slate-50"
            >
              How It Works (4-Step Process)
            </button>
            <button
              onClick={() => handleNav('policies')}
              className="text-left py-2 px-3 rounded hover:bg-slate-50 font-bold text-[#2563EB]"
            >
              Policies &amp; Legal Terms
            </button>

            {/* Direct Policy Modal Shortcuts */}
            <div className="pt-2 border-t border-slate-100 space-y-1">
              <div className="text-[10px] uppercase font-bold text-slate-400 px-3 tracking-wider">
                Official Policies:
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenPolicy) onOpenPolicy('privacy');
                  else handleNav('policies');
                }}
                className="w-full text-left py-1.5 px-3 rounded hover:bg-slate-50 text-xs text-slate-600 flex items-center justify-between"
              >
                <span>Privacy Policy</span>
                <span className="text-[10px] text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded font-bold">Open</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenPolicy) onOpenPolicy('terms');
                  else handleNav('policies');
                }}
                className="w-full text-left py-1.5 px-3 rounded hover:bg-slate-50 text-xs text-slate-600 flex items-center justify-between"
              >
                <span>Terms &amp; Conditions</span>
                <span className="text-[10px] text-indigo-600 bg-indigo-50 px-1.5 py-0.5 rounded font-bold">Open</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenPolicy) onOpenPolicy('refund');
                  else handleNav('policies');
                }}
                className="w-full text-left py-1.5 px-3 rounded hover:bg-slate-50 text-xs text-slate-600 flex items-center justify-between"
              >
                <span>Refund &amp; Revision Policy</span>
                <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">Open</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
