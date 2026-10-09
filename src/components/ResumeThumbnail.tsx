import React from 'react';
import { ResumeDesignItem } from '../types';
import { CheckCircle2, Award, Shield, FileCheck } from 'lucide-react';

interface ResumeThumbnailProps {
  design: ResumeDesignItem;
  photoUrl?: string;
}

export const ResumeThumbnail: React.FC<ResumeThumbnailProps> = ({ design, photoUrl }) => {
  const { sampleDetails, id, themeColor = '#0f172a' } = design;

  // If a template image exists, display the image
  if (photoUrl) {
    return (
      <div className="w-full aspect-[1/1.38] rounded-xl overflow-hidden bg-white border-2 border-slate-300 relative group/photo shadow-xs">
        <img
          src={photoUrl}
          alt={design.title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/photo:scale-105"
        />
      </div>
    );
  }

  // Exact reproduction of the PDF page layout
  return (
    <div className="w-full aspect-[1/1.4] rounded-xl bg-slate-100 p-2 border-2 border-amber-400/80 shadow-md relative flex flex-col justify-between overflow-hidden select-none text-left">
      
      {/* Top Banner matching PDF Golden Ribbon + Dark Hex Badge */}
      <div className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-lg p-1 px-2 flex items-center justify-between shadow-xs mb-1.5">
        <div
          style={{ backgroundColor: themeColor }}
          className="text-white text-[9px] font-mono font-black py-0.5 px-2 rounded tracking-wider shadow-xs uppercase flex items-center gap-1"
        >
          <span>ID: {id}</span>
        </div>
        <div className="text-[10px] font-black text-slate-900 tracking-wider uppercase font-serif">
          RESUME SAMPLE
        </div>
      </div>

      {/* Main A4 Resume Document Sheet */}
      <div className="flex-1 bg-white rounded-lg border border-slate-300 p-2.5 flex flex-col justify-between shadow-xs overflow-hidden leading-tight">
        
        {/* Candidate Header matching PDF */}
        <div className="pb-1.5 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <div
              style={{ backgroundColor: themeColor }}
              className="w-8 h-8 rounded-full text-white font-extrabold text-[10px] flex items-center justify-center shrink-0 shadow-xs border border-white"
            >
              {sampleDetails.candidateName.slice(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-[11px] font-black text-slate-900 tracking-tight truncate uppercase font-sans">
                {sampleDetails.candidateName}
              </div>
              <div className="text-[8.5px] font-bold text-blue-600 truncate uppercase">
                {sampleDetails.designation}
              </div>
              <div className="text-[7px] text-slate-500 font-mono truncate">
                candidate.sample@email.com • +91 98XXX XXXXX
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Resume Content matching PDF structure */}
        <div className="grid grid-cols-12 gap-1.5 py-1 text-[7.5px]">
          
          {/* Left Column (5 cols): Skills, Education, Strengths */}
          <div className="col-span-5 space-y-1.5 border-r border-slate-200 pr-1.5">
            <div>
              <div className="font-extrabold text-slate-800 uppercase tracking-tight text-[7px] border-b border-slate-200 pb-0.5 mb-1 text-blue-900">
                Key Skills
              </div>
              <div className="space-y-0.5 text-slate-700">
                {sampleDetails.skills.slice(0, 4).map((skill, idx) => (
                  <div key={idx} className="truncate flex items-center gap-1">
                    <span className="text-blue-500 font-bold">•</span>
                    <span className="truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-extrabold text-slate-800 uppercase tracking-tight text-[7px] border-b border-slate-200 pb-0.5 mb-0.5 text-blue-900">
                Education
              </div>
              <div className="text-[6.5px] text-slate-600 line-clamp-2">
                {sampleDetails.education[0]}
              </div>
            </div>

            <div className="pt-0.5">
              <span className="inline-block text-[6.5px] font-extrabold px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">
                ✓ ATS-Friendly
              </span>
            </div>
          </div>

          {/* Right Column (7 cols): Summary, Experience, Declaration */}
          <div className="col-span-7 space-y-1.5 pl-0.5">
            <div>
              <div className="font-extrabold text-slate-800 uppercase tracking-tight text-[7px] border-b border-slate-200 pb-0.5 mb-0.5 text-blue-900">
                Summary
              </div>
              <p className="text-[6.5px] text-slate-600 line-clamp-2 leading-relaxed">
                {sampleDetails.summary}
              </p>
            </div>

            <div>
              <div className="font-extrabold text-slate-800 uppercase tracking-tight text-[7px] border-b border-slate-200 pb-0.5 mb-0.5 text-blue-900">
                Work Experience
              </div>
              {sampleDetails.experience.slice(0, 1).map((exp, idx) => (
                <div key={idx} className="space-y-0.5">
                  <div className="font-bold text-slate-900 truncate text-[7.5px]">
                    {exp.role}
                  </div>
                  <div className="text-slate-500 text-[6.5px] truncate">
                    {exp.company}
                  </div>
                  <p className="text-slate-600 text-[6.5px] line-clamp-2 leading-tight">
                    • {exp.bullets[0]}
                  </p>
                </div>
              ))}
            </div>

            {/* Declaration Signature */}
            <div className="pt-1 border-t border-slate-100 flex justify-between items-end text-[6px] text-slate-500">
              <span>Declaration Verified</span>
              <span className="font-serif italic font-bold text-slate-700 text-[6.5px]">
                {sampleDetails.candidateName.split(' ')[0]}
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Banner matching PDF Footer */}
        <div className="pt-1 border-t border-slate-200 flex items-center justify-between text-[6.5px] text-slate-600 bg-slate-50 p-1 rounded">
          <span className="font-black text-slate-800">Mr Aryan Service</span>
          <span className="font-bold text-emerald-700">ATS Linear Format</span>
          <span className="font-bold text-blue-700">🔒 Confidential</span>
        </div>

      </div>

    </div>
  );
};
