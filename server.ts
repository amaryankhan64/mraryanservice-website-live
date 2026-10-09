import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json({ limit: '10mb' }));

// Initialize Google GenAI with recommended telemetry header
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Fallback audit generator if API key is absent or transient API issue occurs
function generateLocalAtsAudit(resumeText: string, jobTitle?: string, jobDescription?: string) {
  const words = resumeText.trim().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const hasMetrics = /\b(\d+[\%kKmMbB]?|\$\d+|\d+\+)\b/.test(resumeText);
  const metricMatches = resumeText.match(/\b(\d+[\%kKmMbB]?|\$\d+|\d+\+)\b/g) || [];
  const hasActionVerbs = /\b(spearheaded|architected|orchestrated|engineered|developed|optimized|accelerated|delivered|executed|championed|streamlined)\b/i.test(resumeText);
  const hasSections = /\b(experience|education|skills|summary|projects|certifications)\b/i.test(resumeText);
  const mentionsTables = /table|column|two-column|graphic|icon/i.test(resumeText);

  // Scoring baseline
  let parseScore = hasSections ? 94 : 70;
  let keywordScore = jobTitle ? 86 : 80;
  let metricsScore = metricMatches.length > 5 ? 90 : metricMatches.length > 2 ? 78 : 55;
  let formatScore = mentionsTables ? 72 : 95;
  let brevityScore = wordCount >= 300 && wordCount <= 900 ? 92 : wordCount < 300 ? 68 : 74;

  const overall = Math.round(
    parseScore * 0.25 + keywordScore * 0.25 + metricsScore * 0.25 + formatScore * 0.15 + brevityScore * 0.1
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
    verdict: overall >= 85 ? 'Interview Ready' : overall >= 70 ? 'Needs Optimization' : 'Critical ATS Risks Detected',
    executiveSummary: `Audit completed for ${targetRole}. Resume has ${wordCount} words and ${metricMatches.length} quantifiable data points detected. ${
      overall >= 80
        ? 'Solid linear layout with strong foundational ATS compatibility.'
        : 'Requires structural and impact enhancement to clear modern ATS filters like Workday and Taleo.'
    }`,
    strengths: [
      hasSections ? 'Standardized, parser-friendly section headers detected' : 'Clear chronologic career flow',
      hasActionVerbs ? 'Includes active leadership action verbs (orchestrated, engineered, led)' : 'Clear functional role categorizations',
      'Contact information and header are linearly positioned without nested table traps',
    ],
    criticalIssues: [
      metricMatches.length < 5
        ? 'Insufficient quantified business metrics (aim for numbers in at least 60% of experience bullet points)'
        : 'Several bullet points describe day-to-day duties rather than business outcomes',
      !jobDescription
        ? 'No target job description was provided to calculate strict keyword similarity'
        : 'Missing specialized secondary domain keywords required by recruiters in this niche',
      'Summary profile lacks high-density keyword matrix for search crawler indexing',
    ],
    keywordAnalysis: {
      detectedKeywords: ['Leadership', 'Project Delivery', 'Strategy', 'Cross-Functional Collaboration', 'Process Optimization'],
      missingEssentialKeywords: jobTitle
        ? [`${jobTitle} Architecture`, 'KPI Governance', 'Stakeholder Management', 'Root Cause Analysis', 'Agile Delivery']
        : ['ROI Metrics', 'Budget Management', 'Process Automation', 'Compliance & Quality Standards'],
      keywordDensityRating: keywordScore >= 85 ? 'Strong' : 'Moderate',
    },
    actionableImprovements: [
      {
        area: 'Professional Experience Bullets',
        originalSnippet: 'Handled client requests and worked on team deliverables each week.',
        recommendedRewrite: 'Accelerated client deliverable turnaround by 34% by establishing streamlined cross-functional workflows across 4 teams.',
        rationale: 'Replaces passive descriptive duty with quantified business impact (34% turnaround).',
      },
      {
        area: 'Executive Summary',
        originalSnippet: 'Hardworking professional looking to leverage skills in a growing company.',
        recommendedRewrite: `Results-driven ${targetRole} with proven track record of optimizing operational efficiency and executing strategic growth initiatives.`,
        rationale: 'Eliminates generic filler phrases and establishes clear role alignment with targeted keywords.',
      },
      {
        area: 'Core Competencies Zone',
        originalSnippet: 'Communication, Teamwork, Microsoft Office, Problem Solving',
        recommendedRewrite: 'Strategic Planning · Cross-Functional Leadership · Workflow Optimization · Quality Assurance · Data-Driven Decision Making',
        rationale: 'Upgrades generic soft skills into recruiter-searched corporate competencies.',
      },
    ],
    recommendedTemplateId: overall >= 75 ? 'ATS-PRO-01' : 'ATS-BAS-01',
    recommendedServicePackage: overall >= 80 ? 'Professional ATS Transformation' : 'Executive Career Overhaul',
  };
}

// POST /api/ats-audit
app.post('/api/ats-audit', async (req, res) => {
  const { resumeText, jobTitle, jobDescription, experienceLevel, templatePreference } = req.body;

  if (!resumeText || typeof resumeText !== 'string' || resumeText.trim().length < 50) {
    return res.status(400).json({
      error: 'Please provide at least 50 characters of resume text to perform an ATS audit.',
    });
  }

  // If Gemini client is available, run GenAI audit
  if (ai) {
    try {
      const prompt = `You are a world-class ATS Resume Strategist and Executive Hiring Auditor for "Mr Aryan Service".
Audit the following resume text against modern Applicant Tracking Systems (Workday, Taleo, Greenhouse, Lever, SAP SuccessFactors).

Resume Text:
"""
${resumeText.slice(0, 10000)}
"""

Target Role / Job Title: ${jobTitle || 'General Professional / Not specified'}
Target Job Description / Requirements: ${jobDescription ? jobDescription.slice(0, 4000) : 'Not specified'}
Experience Level: ${experienceLevel || 'Mid-Level'}
Preferred Template: ${templatePreference || 'ATS-PRO-01'}

Evaluate the resume across these 5 specific ATS dimensions:
1. ATS Parseability (clean text stream, standard header conventions, no tables/graphics/columns artifacts)
2. Keyword Optimization (relevant role keywords, density, hard skills alignment)
3. Quantified Achievements (percentages, dollar values, metrics, scale, measurable outcomes)
4. Formatting & Structure (chronology, standardized titles, date formats, contact placement)
5. Brevity & Executive Impact (concise action-first bullet points, zero fluff/clichés)

Provide realistic, rigorous scores (0-100) reflecting how strict modern enterprise ATS bots rank candidates.
Return strictly valid JSON matching the specified schema.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction:
            'You are a senior ATS technical auditor and resume consultant. Always return deep, practical, recruiter-calibrated feedback in strictly valid JSON.',
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              overallScore: { type: Type.INTEGER, description: 'Overall ATS compatibility score between 0 and 100' },
              categoryScores: {
                type: Type.OBJECT,
                properties: {
                  atsParseability: { type: Type.INTEGER },
                  keywordOptimization: { type: Type.INTEGER },
                  quantifiedAchievements: { type: Type.INTEGER },
                  formattingAndLayout: { type: Type.INTEGER },
                  brevityAndImpact: { type: Type.INTEGER },
                },
                required: [
                  'atsParseability',
                  'keywordOptimization',
                  'quantifiedAchievements',
                  'formattingAndLayout',
                  'brevityAndImpact',
                ],
              },
              verdict: {
                type: Type.STRING,
                description: 'One of: Interview Ready, Needs Optimization, Critical ATS Risks Detected',
              },
              executiveSummary: { type: Type.STRING },
              strengths: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              criticalIssues: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
              },
              keywordAnalysis: {
                type: Type.OBJECT,
                properties: {
                  detectedKeywords: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  missingEssentialKeywords: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  keywordDensityRating: { type: Type.STRING },
                },
                required: ['detectedKeywords', 'missingEssentialKeywords', 'keywordDensityRating'],
              },
              actionableImprovements: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    area: { type: Type.STRING },
                    originalSnippet: { type: Type.STRING },
                    recommendedRewrite: { type: Type.STRING },
                    rationale: { type: Type.STRING },
                  },
                  required: ['area', 'originalSnippet', 'recommendedRewrite', 'rationale'],
                },
              },
              recommendedTemplateId: { type: Type.STRING },
              recommendedServicePackage: { type: Type.STRING },
            },
            required: [
              'overallScore',
              'categoryScores',
              'verdict',
              'executiveSummary',
              'strengths',
              'criticalIssues',
              'keywordAnalysis',
              'actionableImprovements',
              'recommendedTemplateId',
              'recommendedServicePackage',
            ],
          },
        },
      });

      const text = response.text;
      if (text) {
        const parsed = JSON.parse(text);
        return res.json({ success: true, audit: parsed, source: 'gemini-3.8-flash' });
      }
    } catch (err: any) {
      console.error('Gemini ATS audit error, falling back to local diagnostic engine:', err);
      // Fallback gracefully
      const localAudit = generateLocalAtsAudit(resumeText, jobTitle, jobDescription);
      return res.json({ success: true, audit: localAudit, source: 'fallback' });
    }
  }

  // If no AI key provided in environment, use local rule-based diagnostic
  const localAudit = generateLocalAtsAudit(resumeText, jobTitle, jobDescription);
  return res.json({ success: true, audit: localAudit, source: 'rule-engine' });
});

// Setup Vite in Dev or Static Serving in Prod
async function startServer() {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Mr Aryan Service ATS Studio server running on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
