import React from 'react';
import { ResumeDesignItem } from '../types';

interface LuxuryTemplatePosterProps {
  design: ResumeDesignItem;
  photoUrl?: string;
}

export const LuxuryTemplatePoster: React.FC<LuxuryTemplatePosterProps> = ({ design, photoUrl }) => {
  const { sampleDetails, id, themeColor = '#0f172a' } = design;

  // If template image asset exists, render it directly
  if (photoUrl) {
    return (
      <div className="w-full aspect-[1/0.92] bg-[#e7e3da] relative overflow-hidden rounded-xl shadow-inner group-hover:scale-[1.01] transition-transform">
        <img
          src={photoUrl}
          alt={`Professional Resume ${id}`}
          className="w-full h-full object-cover object-center"
        />
      </div>
    );
  }

  // Render high-fidelity luxury mockup poster with 2 Resume Pages side-by-side matching user screenshot
  return (
    <div className="w-full aspect-[1/0.92] bg-gradient-to-b from-[#dfd9ce] via-[#eeeae2] to-[#dfd9ce] relative overflow-hidden rounded-lg sm:rounded-xl shadow-inner flex flex-col justify-between p-1.5 sm:p-3 select-none text-slate-800 border border-[#d6cfc2]">
      
      {/* Background Architectural Luxury Ambience (Marble Pillars & Warm Lamps) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Left Column / Pillar */}
        <div className="absolute top-0 bottom-0 left-0 w-4 sm:w-10 bg-gradient-to-r from-[#b3a898] via-[#dcd5c7] to-[#ebe5d9] opacity-40 shadow-md" />
        {/* Right Column / Pillar */}
        <div className="absolute top-0 bottom-0 right-0 w-4 sm:w-10 bg-gradient-to-l from-[#b3a898] via-[#dcd5c7] to-[#ebe5d9] opacity-40 shadow-md" />
        
        {/* Warm Golden Pendant Lights */}
        <div className="absolute -top-3 left-4 sm:left-8 w-2 sm:w-3.5 h-8 sm:h-12 bg-gradient-to-b from-amber-700 to-amber-400 rounded-b-full opacity-60 shadow-lg shadow-amber-300/40" />
        <div className="absolute -top-3 right-4 sm:right-8 w-2 sm:w-3.5 h-8 sm:h-12 bg-gradient-to-b from-amber-700 to-amber-400 rounded-b-full opacity-60 shadow-lg shadow-amber-300/40" />
        
        {/* Corner Plant Leaves Silhouette */}
        <div className="absolute bottom-0 left-0 w-6 sm:w-12 h-10 sm:h-20 bg-gradient-to-tr from-emerald-950/25 to-transparent rounded-tr-full" />
        <div className="absolute bottom-0 right-0 w-6 sm:w-12 h-10 sm:h-20 bg-gradient-to-tl from-emerald-950/25 to-transparent rounded-tl-full" />
      </div>

      {/* Top Section: Hexagon ID Badge & RESUME SAMPLE Title */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Hexagon Shield Badge with ID */}
        <div className="bg-[#0b1727] text-white px-2 sm:px-4 py-0.2 sm:py-0.5 rounded-t-xs rounded-b-sm sm:rounded-b-md border border-amber-400/80 shadow-xs flex items-center justify-center min-w-[50px] sm:min-w-[76px]">
          <span className="font-mono font-black text-[8px] sm:text-xs tracking-wider sm:tracking-widest text-amber-300 uppercase">
            {id}
          </span>
        </div>

        {/* Big Bold Serif Heading: RESUME SAMPLE */}
        <h2 className="text-xs sm:text-2xl font-black tracking-wider sm:tracking-widest text-slate-900 uppercase font-serif mt-0.5 drop-shadow-xs">
          RESUME SAMPLE
        </h2>

        {/* 6 Category Pill Tags matching reference screenshot */}
        <div className="flex flex-wrap items-center justify-center gap-0.5 sm:gap-1 mt-0.5 sm:mt-1 max-w-[98%]">
          {['Indian CV', 'GCC CV', 'Europass CV', 'Canadian CV', 'ATS Resume', 'Cover Letter'].map((pill) => (
            <span
              key={pill}
              className="text-[5.5px] sm:text-[8px] font-bold bg-[#141d2b] text-white px-1 sm:px-1.5 py-0.2 sm:py-0.5 rounded shadow-2xs tracking-tight"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Center Section: TWO RESUME PAGES SIDE-BY-SIDE */}
      <div className="relative z-10 my-0.5 sm:my-1 grid grid-cols-2 gap-1 sm:gap-2 flex-1 max-h-[110px] sm:max-h-[185px] overflow-hidden">
        
        {/* PAGE 1: Header, Photo, Summary, Skills */}
        <div className="bg-white rounded sm:rounded-md border border-slate-300 shadow-xs p-1 sm:p-2 flex flex-col justify-between overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-1 sm:gap-1.5 pb-0.5 sm:pb-1 border-b border-slate-200">
            <div
              style={{ backgroundColor: themeColor }}
              className="w-4 h-4 sm:w-6 sm:h-6 rounded-full text-white font-black text-[6px] sm:text-[8px] flex items-center justify-center shrink-0 shadow-2xs border border-white"
            >
              {sampleDetails.candidateName.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[7px] sm:text-[9.5px] font-black text-slate-900 tracking-tight truncate uppercase font-sans">
                {sampleDetails.candidateName}
              </div>
              <div className="text-[5.5px] sm:text-[7.5px] font-bold text-teal-700 truncate uppercase">
                {sampleDetails.designation}
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="space-y-0.5 sm:space-y-1 py-0.5 text-[5px] sm:text-[6px] leading-tight flex-1">
            <div>
              <div className="font-extrabold text-slate-900 uppercase text-[5px] sm:text-[6px] border-b border-slate-200 pb-0.2 mb-0.2 text-blue-900">
                Summary
              </div>
              <p className="text-slate-600 line-clamp-2 text-[5px] sm:text-[6px]">
                {sampleDetails.summary}
              </p>
            </div>

            <div>
              <div className="font-extrabold text-slate-900 uppercase text-[5px] sm:text-[6px] border-b border-slate-200 pb-0.2 mb-0.2 text-blue-900">
                Skills
              </div>
              <div className="space-y-0.2 text-slate-700">
                {sampleDetails.skills.slice(0, 2).map((skill, idx) => (
                  <div key={idx} className="truncate flex items-center gap-0.5">
                    <span className="text-teal-600 font-bold">•</span>
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-0.2 border-t border-slate-100 flex justify-between text-[4.5px] sm:text-[6px] text-slate-400">
            <span>Page 01</span>
            <span className="font-bold text-emerald-700">ATS-Friendly</span>
          </div>
        </div>

        {/* PAGE 2: Experience, Education, Declaration & Signature */}
        <div className="bg-white rounded sm:rounded-md border border-slate-300 shadow-xs p-1 sm:p-2 flex flex-col justify-between overflow-hidden">
          <div className="space-y-0.5 sm:space-y-1 text-[5px] sm:text-[6px] leading-tight flex-1">
            <div>
              <div className="font-extrabold text-slate-900 uppercase text-[5px] sm:text-[6px] border-b border-slate-200 pb-0.2 mb-0.2 text-blue-900">
                Experience
              </div>
              {sampleDetails.experience.slice(0, 1).map((exp, idx) => (
                <div key={idx} className="space-y-0.2">
                  <div className="font-bold text-slate-900 truncate text-[5.5px] sm:text-[6.5px]">
                    {exp.role}
                  </div>
                  <div className="text-slate-500 text-[4.5px] sm:text-[5.5px] truncate">
                    {exp.company}
                  </div>
                  <p className="text-slate-600 text-[4.5px] sm:text-[5.5px] line-clamp-2 leading-tight">
                    • {exp.bullets[0]}
                  </p>
                </div>
              ))}
            </div>

            <div>
              <div className="font-extrabold text-slate-900 uppercase text-[5px] sm:text-[6px] border-b border-slate-200 pb-0.2 mb-0.2 text-blue-900">
                Education
              </div>
              <div className="text-[4.5px] sm:text-[5.5px] text-slate-600 line-clamp-1">
                {sampleDetails.education[0]}
              </div>
            </div>
          </div>

          {/* Declaration & Signature */}
          <div className="pt-0.5 border-t border-slate-100 flex justify-between items-end text-[4.5px] sm:text-[6px] text-slate-400">
            <span>Page 02</span>
            <span className="font-serif italic font-bold text-slate-800 text-[5.5px] sm:text-[7px]">
              {sampleDetails.candidateName.split(' ')[0]}
            </span>
          </div>
        </div>

      </div>

      {/* Bottom Section: Centered MR Mr Aryan Service */}
      <div className="relative z-10 flex items-center justify-center gap-1.5 px-0.5 sm:px-1.5 pt-0.5 sm:pt-1 border-t border-[#c5bdaf]/60">
        <div className="bg-[#1d4ed8] text-white font-black text-[7px] sm:text-[10px] px-1 py-0.2 rounded tracking-tighter">
          MR
        </div>
        <span className="font-black text-slate-900 text-[7px] sm:text-[11px] tracking-tight">
          Mr Aryan Service
        </span>
      </div>

    </div>
  );
};
