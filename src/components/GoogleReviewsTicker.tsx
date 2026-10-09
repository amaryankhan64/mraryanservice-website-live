import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, MessageCircle } from 'lucide-react';
import { REAL_GOOGLE_REVIEWS, GOOGLE_BUSINESS_STATS } from '../data/googleReviews';
import { GOOGLE_BUSINESS_URL } from '../data/templates';

export const GoogleReviewsTicker: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = REAL_GOOGLE_REVIEWS;

  // Continuous auto-play transition every 3.8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [reviews.length]);

  const current = reviews[currentIndex];

  return (
    <div className="max-w-xl w-full bg-white/95 backdrop-blur-xs rounded-xl border border-slate-200/90 shadow-xs p-3 text-left">
      {/* Top Header: Google Icon, 4.9 Stars, and Verified Badge */}
      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 gap-2">
        <a
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 min-w-0 hover:opacity-85 transition-opacity cursor-pointer"
          title="Open Mr Aryan Service Google Profile"
        >
          {/* Authentic Google 'G' icon */}
          <div className="w-5 h-5 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 24 24" className="w-5 h-5">
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
          </div>

          <div className="flex items-center gap-1.5 text-xs font-bold text-slate-800">
            <span className="text-slate-900 font-extrabold">{GOOGLE_BUSINESS_STATS.rating}</span>
            <div className="flex text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
        </a>

        <a
          href={GOOGLE_BUSINESS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0 hover:bg-emerald-100 transition-colors cursor-pointer"
          title="Open Google Profile"
        >
          <CheckCircle2 className="w-3 h-3" />
          Google Verified
        </a>
      </div>

      {/* 1 by 1 Single Review Content - Automatic Smooth Cycling */}
      <div key={current.id} className="space-y-1 transition-opacity duration-300">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold text-[10px] flex items-center justify-center shrink-0">
              {current.name.slice(0, 2).toUpperCase()}
            </div>
            <span className="text-xs font-bold text-slate-900 truncate">
              {current.name}
            </span>
            {current.badge && (
              <span className="text-[10px] font-medium bg-slate-100 text-slate-600 px-1.5 py-0.2 rounded">
                {current.badge}
              </span>
            )}
          </div>
          <span className="text-[10px] text-slate-400 shrink-0">
            {current.timeAgo}
          </span>
        </div>

        {/* Review Comment Quote */}
        <p className="text-[11px] sm:text-xs text-slate-700 leading-snug line-clamp-2 italic font-normal">
          &ldquo;{current.comment}&rdquo;
        </p>

        {/* Owner Reply Note */}
        {current.ownerReply && (
          <div className="mt-1 pt-1 border-t border-slate-100 flex items-start gap-1.5 text-[10px] text-slate-600">
            <span className="font-bold text-blue-600 shrink-0 flex items-center gap-1">
              <MessageCircle className="w-2.5 h-2.5" />
              Aryan:
            </span>
            <span className="truncate italic text-slate-500">
              &ldquo;{current.ownerReply}&rdquo;
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
