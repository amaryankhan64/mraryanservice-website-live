import type { AtsAuditResult } from '../types';

/**
 * Private, browser-only ATS estimate for the GitHub Pages build.
 * This deliberately avoids sending resume text to a third-party API.
 */
export function generateLocalAtsAudit(
  resumeText: string,
  jobTitle?: string,
  jobDescription?: string,
): AtsAuditResult {
  const words = resumeText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const metricMatches = resumeText.match(/\b(\d+[\%kKmMbB]?|\$\d+|\d+\+)\b/g) || [];
  const hasActionVerbs = /\b(spearheaded|architected|orchestrated|engineered|developed|optimized|accelerated|delivered|executed|championed|streamlined|managed|led|built)\b/i.test(resumeText);
  const hasSections = /\b(experience|education|skills|summary|projects|certifications)\b/i.test(resumeText);
  const mentionsTables = /table|column|two-column|graphic|icon/i.test(resumeText);

  const parseScore = hasSections ? 90 : 65;
  const keywordScore = jobDescription ? 75 : jobTitle ? 68 : 60;
  const metricsScore = metricMatches.length > 5 ? 88 : metricMatches.length > 2 ? 75 : 55;
  const formatScore = mentionsTables ? 60 : 85;
  const brevityScore = wordCount >= 300 && wordCount <= 900 ? 88 : wordCount < 300 ? 68 : 74;
  const overall = Math.round(
    parseScore * 0.25 + keywordScore * 0.25 + metricsScore * 0.25 + formatScore * 0.15 + brevityScore * 0.1,
  );
  const targetRole = jobTitle || 'Target Career Role';

  return {
    overallScore: overall,
    categoryScores: {
      atsParseability: parseScore,
      keywordOptimization: keywordScore,
      quantifiedAchievements: metricsScore,
      formattingAndLayout: formatScore,
      brevityAndImpact: brevityScore,
    },
    verdict: overall >= 85 ? 'Strong Structure' : overall >= 70 ? 'Needs Improvement' : 'Review Recommended',
    executiveSummary: `Browser-only estimate for ${targetRole}: ${wordCount} words and ${metricMatches.length} numeric impact points detected. This is a basic checklist, not a score from an employer's ATS.`,
    strengths: [
      hasSections ? 'Common resume section headings were found' : 'Resume text was received for review',
      hasActionVerbs ? 'Action-oriented verbs were found' : 'Add clear action verbs to describe your work',
      'Your resume text is checked locally in this browser',
    ],
    criticalIssues: [
      metricMatches.length < 5
        ? 'Add measurable outcomes where accurate, such as volume, time, or percentage improvements'
        : 'Review each metric to ensure it is accurate and clearly explained',
      !jobDescription
        ? 'Add a target job description for a more useful keyword comparison'
        : 'Compare key requirements in the job description with your experience',
      mentionsTables
        ? 'Consider a simple single-column layout for easier text parsing'
        : 'Check that dates, headings, and contact details are easy to scan',
    ],
    keywordAnalysis: {
      detectedKeywords: ['Experience', 'Skills', 'Education'].filter((term) =>
        new RegExp(`\\b${term}\\b`, 'i').test(resumeText),
      ),
      missingEssentialKeywords: jobTitle ? [`Role-specific skills for ${jobTitle}`] : ['Target role keywords'],
      keywordDensityRating: jobDescription ? 'Basic comparison available' : 'Add a job description',
    },
    actionableImprovements: [
      {
        area: 'Professional Experience',
        originalSnippet: 'Describe responsibilities clearly.',
        recommendedRewrite: 'Start each bullet with a specific action and include a result when you can verify it.',
        rationale: 'Specific, truthful outcomes help recruiters understand your contribution.',
      },
      {
        area: 'Targeted Keywords',
        originalSnippet: 'Use broad descriptions only.',
        recommendedRewrite: `Include relevant skills from the ${targetRole} job description when they match your experience.`,
        rationale: 'Relevant terms make your experience easier to find and assess.',
      },
    ],
    recommendedTemplateId: 'I001',
    recommendedServicePackage: 'Resume review',
  };
}
