import React, { useState } from 'react';
import { AtsAuditResult } from '../types';
import { SAMPLE_RESUMES_FOR_CHECKER } from '../data/templates';
import { WHATSAPP_SUPPORT_PHONE } from '../data/templates';
import { generateLocalAtsAudit } from '../utils/localAtsAudit';
import {
  Sparkles,
  AlertTriangle,
  CheckCircle2,
  AlertCircle,
  FileText,
  Search,
  ArrowRight,
  TrendingUp,
  Cpu,
  RefreshCw,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';

export const AtsScoreChecker: React.FC = () => {
  const [resumeText, setResumeText] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [scanStep, setScanStep] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [auditResult, setAuditResult] = useState<AtsAuditResult | null>(null);
  const [copiedAudit, setCopiedAudit] = useState(false);

  const handleLoadSample = (sampleIndex: number) => {
    const sample = SAMPLE_RESUMES_FOR_CHECKER[sampleIndex];
    if (sample) {
      setResumeText(sample.text);
      setJobTitle(sample.jobTitle);
      setJobDescription(sample.jobDescription);
      setErrorMsg(null);
    }
  };

  const handleRunAudit = async () => {
    if (!resumeText.trim() || resumeText.trim().length < 50) {
      setErrorMsg('Please paste at least 50 characters of resume text to perform a reliable ATS audit.');
      return;
    }

    setIsLoading(true);
    setErrorMsg(null);
    setScanStep('Parsing ASCII text stream and stripping non-standard delimiters...');

    const timer1 = setTimeout(() => {
      setScanStep('Testing Workday & Taleo OCR parseability rules...');
    }, 600);

    const timer2 = setTimeout(() => {
      setScanStep('Checking resume structure and role keywords in your browser...');
    }, 1200);

    const timer3 = setTimeout(() => {
      setScanStep('Evaluating quantifiable impact metrics and action verb distribution...');
    }, 1800);

    try {
      await new Promise((resolve) => setTimeout(resolve, 250));
      setAuditResult(
        generateLocalAtsAudit(
          resumeText,
          jobTitle.trim() || undefined,
          jobDescription.trim() || undefined,
        ),
      );
    } catch (err: any) {
      console.error('Audit submission error:', err);
      setErrorMsg(err instanceof Error ? err.message : 'Could not complete the local resume check. Please try again.');
    } finally {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      setIsLoading(false);
      setScanStep('');
    }
  };

  const handleSendToAryanWhatsApp = () => {
    if (!auditResult) return;
    const msg = `*ATS RESUME SCORE AUDIT INQUIRY — MR ARYAN SERVICE*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*Target Role:* ${jobTitle || 'General Professional'}
*Overall ATS Score:* ${auditResult.overallScore}/100 (${auditResult.verdict})

*Metric Breakdown:*
• Parseability: ${auditResult.categoryScores.atsParseability}%
• Keyword Density: ${auditResult.categoryScores.keywordOptimization}%
• Quantified Achievements: ${auditResult.categoryScores.quantifiedAchievements}%
• Formatting: ${auditResult.categoryScores.formattingAndLayout}%
• Brevity: ${auditResult.categoryScores.brevityAndImpact}%

*Detected Red Flags:*
${auditResult.criticalIssues.slice(0, 3).map((issue) => `• ${issue}`).join('\n')}

*Request:* Aryan bhai, mujhe is score ko improve karna hai. Please slot confirm kijiye.`;

    const encoded = encodeURIComponent(msg);
    window.open(`https://wa.me/${WHATSAPP_SUPPORT_PHONE}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="ats-auditor" className="py-6 sm:py-12 bg-tech-grid border-b border-slate-200 text-center">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-3xl mx-auto mb-5 sm:mb-8">
          <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#2563EB]">
            PRIVATE, BROWSER-ONLY CHECK
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            ATS Resume Score Checker
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Get a basic resume-structure estimate before ordering. Your pasted text stays in this browser; results are guidance, not an official employer ATS score.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left max-w-6xl mx-auto">
          
          {/* Left Column: Input Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            
            {/* Sample Presets Header */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-bold text-slate-700">
                Quick Test Samples:
              </span>
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => handleLoadSample(0)}
                  className="px-3 py-1 text-xs rounded-full bg-white text-slate-800 hover:text-[#2563EB] border border-slate-300 font-semibold cursor-pointer shadow-xs transition-colors"
                >
                  Tech Lead (High ATS)
                </button>
                <button
                  type="button"
                  onClick={() => handleLoadSample(1)}
                  className="px-3 py-1 text-xs rounded-full bg-white text-slate-800 hover:text-[#2563EB] border border-slate-300 font-semibold cursor-pointer shadow-xs transition-colors"
                >
                  Unoptimized (Traps)
                </button>
                {resumeText && (
                  <button
                    type="button"
                    onClick={() => {
                      setResumeText('');
                      setAuditResult(null);
                    }}
                    className="px-2 py-1 text-xs text-slate-400 hover:text-red-500 cursor-pointer"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>

            {/* Resume Textarea */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs text-slate-500">
                <label htmlFor="resume-input" className="font-bold text-slate-900">
                  Paste Resume Content
                </label>
                <span className="font-mono">
                  {resumeText.trim().split(/\s+/).filter(Boolean).length} words
                </span>
              </div>
              <textarea
                id="resume-input"
                rows={11}
                value={resumeText}
                onChange={(e) => setResumeText(e.target.value)}
                placeholder="Paste your plain text resume here (summary, experience, education, skills)..."
                className="w-full rounded-2xl bg-slate-50 border border-slate-200 p-4 text-xs font-mono text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 focus:border-[#2563EB] leading-relaxed resize-y"
              />
            </div>

            {/* Target Role & Job Description Inputs */}
            <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/70 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800">
                  Target Role Calibration (Optional)
                </span>
                <button
                  type="button"
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-xs text-[#2563EB] font-bold hover:underline cursor-pointer"
                >
                  {showAdvanced ? 'Hide JD' : '+ Add Job Description for Keyword Match'}
                </button>
              </div>

              <div>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  placeholder="e.g. Civil Project Engineer, Senior Full Stack Developer, HVAC Supervisor"
                  className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#2563EB]"
                />
              </div>

              {showAdvanced && (
                <div className="space-y-1 pt-1 animate-in fade-in duration-200">
                  <textarea
                    rows={4}
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="Paste job description requirements to evaluate keyword match rate..."
                    className="w-full px-3.5 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#2563EB] font-mono resize-none"
                  />
                </div>
              )}
            </div>

            {/* Error Message */}
            {errorMsg && (
              <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Submit Audit Button */}
            <div>
              <button
                type="button"
                onClick={handleRunAudit}
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-full bg-[#2563EB] hover:bg-blue-700 disabled:opacity-50 text-white font-bold text-sm tracking-wide transition-all shadow-md cursor-pointer active:scale-98"
              >
                {isLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Checking resume structure in your browser...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-white" />
                    <span>Run Free ATS Score Audit</span>
                  </>
                )}
              </button>
            </div>

            {/* Scanning Step Live Feedback */}
            {isLoading && scanStep && (
              <div className="p-3 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 text-xs flex items-center gap-2 font-mono animate-pulse">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{scanStep}</span>
              </div>
            )}

          </div>

          {/* Right Column: Diagnostic Results Dashboard (5 cols) */}
          <div className="lg:col-span-5">
            {auditResult ? (
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xl space-y-6 animate-in fade-in duration-300">
                
                {/* Score Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                      Overall ATS Index
                    </div>
                    <div className="text-xs font-bold text-[#2563EB] mt-0.5">
                      {auditResult.verdict}
                    </div>
                  </div>

                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-mono text-4xl sm:text-5xl font-black tabular-nums ${
                        auditResult.overallScore >= 85
                          ? 'text-emerald-600'
                          : auditResult.overallScore >= 70
                          ? 'text-amber-600'
                          : 'text-red-600'
                      }`}
                    >
                      {auditResult.overallScore}
                    </span>
                    <span className="text-slate-400 text-sm font-mono font-bold">/100</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                  {auditResult.executiveSummary}
                </p>

                {/* 5 Sub-category Metric Bars */}
                <div className="space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-800">
                    ATS Metric Breakdown
                  </div>

                  {[
                    { label: 'ATS Parseability (Clean Flow)', val: auditResult.categoryScores.atsParseability },
                    { label: 'Keyword Optimization', val: auditResult.categoryScores.keywordOptimization },
                    { label: 'Quantified Metrics (% & Numbers)', val: auditResult.categoryScores.quantifiedAchievements },
                    { label: 'Formatting & Heading Standards', val: auditResult.categoryScores.formattingAndLayout },
                    { label: 'Brevity & Action Verb Strength', val: auditResult.categoryScores.brevityAndImpact },
                  ].map((cat, idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="text-slate-600">{cat.label}</span>
                        <span className="font-mono font-bold text-slate-900 tabular-nums">
                          {cat.val}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${
                            cat.val >= 85
                              ? 'bg-emerald-500'
                              : cat.val >= 70
                              ? 'bg-amber-500'
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${cat.val}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Critical Issues */}
                {auditResult.criticalIssues.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-red-600 uppercase tracking-wider">
                      <AlertTriangle className="w-3.5 h-3.5" />
                      <span>Critical ATS Traps Detected ({auditResult.criticalIssues.length})</span>
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {auditResult.criticalIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-2 bg-red-50 p-2.5 rounded-xl border border-red-100">
                          <span className="text-red-500 shrink-0 font-bold">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* WhatsApp Action Button */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  <button
                    type="button"
                    onClick={handleSendToAryanWhatsApp}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#16a34a] hover:bg-[#15803d] text-white font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send Score to Mr Aryan for Rewrite</span>
                  </button>
                </div>

              </div>
            ) : (
              /* Awaiting state */
              <div className="bg-white rounded-3xl border border-dashed border-slate-300 p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center mx-auto">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Awaiting Resume Input
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 max-w-xs mx-auto">
                    Paste your resume on the left or select a quick sample above to simulate real ATS score indexing.
                  </p>
                </div>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
