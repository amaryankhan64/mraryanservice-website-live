export type TemplateCategory = 'all' | 'professional' | 'basic' | 'gulf' | 'ats';

export interface ResumeDesignItem {
  id: string; // e.g. 'P000', '1001', '1002', '1004', 'PR001', '1014', '1018', 'B001', 'B002', 'G001'
  title: string; // e.g. 'Professional Resume 1001'
  category: 'professional' | 'basic' | 'gulf' | 'ats';
  specialization: string; // e.g. 'Civil, Site & Infrastructure'
  standard: string; // e.g. 'India, Gulf & Other Countries Valid'
  highlights: string; // e.g. 'Projects, BOQ, Safety & Execution'
  rating: number; // e.g. 4.9
  reviewCount: string; // e.g. '340+ reviews'
  description: string; // e.g. 'Civil engineers, site supervisors aur construction professionals ke liye proven'
  badge?: string; // 'BEST SELLER #1' | 'Special Discount'
  themeColor?: string; // Header ribbon color in preview card
  imageUrl?: string; // Bundled template image path
  sampleDetails: {
    candidateName: string;
    designation: string;
    contact: string;
    summary: string;
    skills: string[];
    experience: {
      role: string;
      company: string;
      duration: string;
      bullets: string[];
    }[];
    education: string[];
  };
}

export interface AtsAuditResult {
  overallScore: number;
  categoryScores: {
    atsParseability: number;
    keywordOptimization: number;
    quantifiedAchievements: number;
    formattingAndLayout: number;
    brevityAndImpact: number;
  };
  verdict: string;
  executiveSummary: string;
  strengths: string[];
  criticalIssues: string[];
  keywordAnalysis: {
    detectedKeywords: string[];
    missingEssentialKeywords: string[];
    keywordDensityRating: string;
  };
  actionableImprovements: {
    area: string;
    originalSnippet: string;
    recommendedRewrite: string;
    rationale: string;
  }[];
  recommendedTemplateId: string;
  recommendedServicePackage: string;
}

export interface LiveOrderNotification {
  id: string;
  name: string;
  location: string;
  item: string;
  timeAgo: string;
}
