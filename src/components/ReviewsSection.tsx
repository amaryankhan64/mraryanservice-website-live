import React, { useState } from 'react';
import { Star, ShieldCheck, CheckCircle2, MessageCircle, MapPin, Phone, Building2 } from 'lucide-react';
import { REAL_GOOGLE_REVIEWS, GOOGLE_BUSINESS_STATS } from '../data/googleReviews';

export const ReviewsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'replied'>('all');

  const filteredReviews = filter === 'replied'
    ? REAL_GOOGLE_REVIEWS.filter(r => !!r.ownerReply)
    : REAL_GOOGLE_REVIEWS;

  return (
    <section id="reviews" className="py-6 sm:py-12 bg-slate-50 border-b border-slate-200 text-center">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl mx-auto mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider">
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Verified Google Business Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Original Client Feedback & Ratings
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Real reviews directly from our official Google Business Profile. Dekhiye candidates Aryan Khan ki ATS service ke baare me kya kehte hain.
          </p>
        </div>

        {/* Google Business Profile Snapshot Card */}
        <div className="max-w-3xl mx-auto mb-6 sm:mb-12 bg-white rounded-2xl p-3.5 sm:p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left">
          <div className="space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg sm:text-xl font-black text-slate-900">
                {GOOGLE_BUSINESS_STATS.name}
              </h3>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Google Verified
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-slate-900 text-base">
                {GOOGLE_BUSINESS_STATS.rating}
              </span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-600 font-semibold">
                {GOOGLE_BUSINESS_STATS.totalReviews} Google reviews
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              {GOOGLE_BUSINESS_STATS.category}
            </p>
            <p className="text-xs text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              {GOOGLE_BUSINESS_STATS.address}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-slate-200 pt-3 sm:pt-0 sm:pl-6 gap-2">
            <div className="text-left sm:text-right">
              <div className="text-xs text-slate-400">Official Contact</div>
              <a
                href={`tel:${GOOGLE_BUSINESS_STATS.phone.replace(/\s+/g, '')}`}
                className="text-sm font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5" />
                {GOOGLE_BUSINESS_STATS.phone}
              </a>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              100% Genuine Ratings
            </span>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Reviews ({REAL_GOOGLE_REVIEWS.length})
          </button>
          <button
            onClick={() => setFilter('replied')}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              filter === 'replied'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            With Aryan's Reply ({REAL_GOOGLE_REVIEWS.filter(r => !!r.ownerReply).length})
          </button>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left max-w-6xl mx-auto">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 font-bold text-xs flex items-center justify-center shrink-0">
                      {rev.name.slice(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                        <span>{rev.name}</span>
                        {rev.badge && (
                          <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                            {rev.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-[10px] text-slate-400">
                        {rev.reviewCount || 'Google Reviewer'} • {rev.timeAgo}
                      </div>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Owner Response Box */}
              {rev.ownerReply && (
                <div className="mt-4 pt-3 border-t border-slate-100 bg-slate-50 rounded-xl p-3 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-900">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span>MR ARYAN SERVICE (Owner)</span>
                  </div>
                  <p className="text-[11px] text-slate-600 italic">
                    &ldquo;{rev.ownerReply}&rdquo;
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
