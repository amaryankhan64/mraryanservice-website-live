import React, { useState } from 'react';
import { RESUME_DESIGNS } from '../data/templates';
import { ResumeDesignItem, TemplateCategory } from '../types';
import { MessageCircle, ArrowDown, ArrowUp } from 'lucide-react';
import { LuxuryTemplatePoster } from './LuxuryTemplatePoster';

interface CatalogSectionProps {
  searchQuery: string;
  onQuickView: (design: ResumeDesignItem) => void;
  onOrderDesign: (design: ResumeDesignItem) => void;
}

export const CatalogSection: React.FC<CatalogSectionProps> = ({
  searchQuery,
  onQuickView,
  onOrderDesign,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [visibleCount, setVisibleCount] = useState<number>(4);

  const handleSelectCategory = (catId: TemplateCategory | 'all') => {
    setSelectedCategory(catId);
    setVisibleCount(4);
  };

  const filteredDesigns = RESUME_DESIGNS.filter((design) => {
    const matchesCategory =
      selectedCategory === 'all' || design.category === selectedCategory;

    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesQuery =
      design.id.toLowerCase().includes(q) ||
      design.title.toLowerCase().includes(q) ||
      design.specialization.toLowerCase().includes(q) ||
      design.sampleDetails.candidateName.toLowerCase().includes(q);

    return matchesCategory && matchesQuery;
  });

  const isSearching = searchQuery.trim().length > 0;
  const displayedDesigns = isSearching
    ? filteredDesigns
    : filteredDesigns.slice(0, visibleCount);

  return (
    <section id="catalog" className="py-5 sm:py-10 bg-slate-50 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2 mb-3 sm:mb-5 no-scrollbar px-1 max-w-full">
          {[
            { id: 'all', label: 'All 63 Templates' },
            { id: 'ats', label: 'Premium ATS' },
            { id: 'gulf', label: 'Gulf / International' },
            { id: 'professional', label: 'Professional' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id as any)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filteredDesigns.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-dashed border-slate-300 p-6 my-4 mx-2">
            <p className="text-slate-500 text-xs sm:text-sm font-medium">
              Koi design nahi mila matching "<strong className="text-slate-800">{searchQuery}</strong>".
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="mt-3 px-3 py-1 text-xs rounded-full bg-blue-50 text-blue-600 font-semibold cursor-pointer"
            >
              Clear Filter
            </button>
          </div>
        )}

        {/* 2 TEMPLATES SIDE-BY-SIDE ON PHONE & DESKTOP (grid-cols-2) */}
        <div className="grid grid-cols-2 max-w-5xl mx-auto gap-2 sm:gap-6 md:gap-8 text-left">
          {displayedDesigns.map((design) => {
            const photoSrc =
              (design.id === 'I004' ? '/templates/1004.png' : undefined) ||
              design.imageUrl ||
              `/templates/${design.id}.png`;

            return (
              <div
                key={design.id}
                className="bg-[#f0ece4] rounded-xl sm:rounded-2xl p-1.5 sm:p-3 border border-[#ded8cc] shadow-xs sm:shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* 2. Main Luxury Poster Canvas */}
                <div
                  onClick={() => onQuickView(design)}
                  className="cursor-pointer rounded-lg sm:rounded-xl overflow-hidden shadow-2xs relative group/poster"
                >
                  <LuxuryTemplatePoster design={design} photoUrl={photoSrc} />
                  
                  {/* Subtle click indicator */}
                  <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover/poster:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/90 text-slate-900 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold shadow-md">
                      Preview
                    </span>
                  </div>
                </div>

                {/* 3. Pure White Bottom Card Section */}
                <div className="bg-white rounded-lg sm:rounded-xl p-2 sm:p-3.5 mt-1.5 sm:mt-2.5 shadow-2xs border border-slate-100 flex flex-col justify-between">
                  
                  {/* Title Row */}
                  <div>
                    <h3 className="font-serif font-bold text-slate-900 text-xs sm:text-xl tracking-tight line-clamp-1 group-hover:text-emerald-700 transition-colors">
                      <span className="hidden sm:inline">Professional </span>Resume {design.id}
                    </h3>
                  </div>

                  {/* Action Row without Price or Advance Payment */}
                  <div className="flex items-center justify-between pt-1.5 sm:pt-3 mt-1 border-t border-slate-100 gap-1">
                    <span className="text-[7.5px] sm:text-[10px] font-bold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200 shrink-0 whitespace-nowrap">
                      ATS Format
                    </span>

                    {/* Compact WhatsApp Button */}
                    <button
                      onClick={() => onOrderDesign(design)}
                      className="bg-[#10b981] hover:bg-[#059669] text-white px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg text-[8.5px] sm:text-xs font-bold flex items-center gap-1 shadow-2xs active:scale-95 transition-all cursor-pointer whitespace-nowrap shrink-0"
                    >
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 fill-white shrink-0" aria-hidden="true">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span>Chat to Order</span>
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Two-Stage "More Templates" Buttons as requested */}
        {!isSearching && (
          <div className="mt-5 sm:mt-7 text-center">
            {/* Stage 1: Showing 4 -> Click to open 30 */}
            {visibleCount <= 4 && filteredDesigns.length > 4 && (
              <button
                onClick={() => setVisibleCount(30)}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <span>More Templates (View 30 Designs)</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            )}

            {/* Stage 2: Showing 30 -> Click to open all remaining */}
            {visibleCount > 4 && visibleCount < filteredDesigns.length && (
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => setVisibleCount(filteredDesigns.length)}
                  className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
                >
                  <span>More Templates (View All {filteredDesigns.length} Designs)</span>
                  <ArrowDown className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setVisibleCount(4);
                    const el = document.getElementById('catalog');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <span>Show Top 4 Only</span>
                </button>
              </div>
            )}

            {/* Stage 3: All designs shown -> Collapse button */}
            {visibleCount >= filteredDesigns.length && filteredDesigns.length > 4 && (
              <button
                onClick={() => {
                  setVisibleCount(4);
                  const el = document.getElementById('catalog');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-2.5 sm:px-8 sm:py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
              >
                <span>Show Top 4 Only</span>
                <ArrowUp className="w-4 h-4" />
              </button>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
