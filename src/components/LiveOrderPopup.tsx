import React, { useState, useEffect } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { LIVE_ORDERS_SAMPLE } from '../data/templates';
import { LiveOrderNotification } from '../types';

export const LiveOrderPopup: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const interval = setInterval(() => {
      // Fade out
      setIsVisible(false);

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % LIVE_ORDERS_SAMPLE.length);
        setIsVisible(true);
      }, 500);
    }, 7000);

    return () => clearInterval(interval);
  }, [isDismissed]);

  if (isDismissed) return null;

  const currentOrder = LIVE_ORDERS_SAMPLE[currentIndex];

  return (
    <div
      className={`fixed bottom-3 left-3 sm:bottom-4 sm:left-4 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-3 opacity-0 scale-95'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xs rounded-xl border border-slate-200/90 py-1.5 px-2.5 pr-6 shadow-md flex items-center gap-2 relative max-w-[250px] sm:max-w-[270px] text-left">
        {/* Compact Bag Icon */}
        <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
          <span className="text-sm">🛍️</span>
        </div>

        <div className="min-w-0 pr-1">
          <div className="text-[10.5px] font-bold text-slate-900 leading-tight truncate">
            {currentOrder.name} ({currentOrder.location}) ordered!
          </div>
          <div className="text-[9.5px] text-slate-500 leading-none truncate mt-0.5 font-medium">
            {currentOrder.item} • {currentOrder.timeAgo}
          </div>
        </div>

        {/* Small dismiss button */}
        <button
          onClick={() => setIsDismissed(true)}
          className="absolute top-1 right-1.5 text-slate-400 hover:text-slate-700 text-[10px] p-0.5 leading-none cursor-pointer"
          title="Dismiss"
        >
          ✕
        </button>
      </div>
    </div>
  );
};
