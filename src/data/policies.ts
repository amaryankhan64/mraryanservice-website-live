export interface PolicySectionData {
  title: string;
  lastUpdated: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const PRIVACY_POLICY: PolicySectionData = {
  title: 'Privacy Policy',
  lastUpdated: 'October 2026',
  summary: 'At Mr Aryan Service, client confidentiality and personal data protection are our highest priorities. Your resume, employment history, and personal contact information are strictly protected and never shared or sold.',
  sections: [
    {
      heading: '1. Information We Collect',
      content: [
        'Personal Identity & Contact Information: Name, phone number, email address, city/state, and professional social profiles (such as LinkedIn) that you voluntarily submit for inclusion in your resume.',
        'Career & Academic History: Previous employment history, job titles, achievements, educational credentials, certifications, technical skillsets, and portfolio samples provided for resume drafting.',
        'Order & Communication Records: Messages and specifications exchanged via our official WhatsApp consultation channel regarding your resume requirements.',
      ],
    },
    {
      heading: '2. How Your Information Is Used',
      content: [
        'To craft, rewrite, edit, and format customized, ATS-compliant resumes, cover letters, and LinkedIn summaries as requested by you.',
        'To communicate directly via WhatsApp or phone regarding drafts, revisions, approvals, and final document delivery.',
        'We strictly DO NOT sell, rent, monetize, or disclose your resume or personal records to third-party recruiters, job boards, advertising networks, or marketing agencies.',
      ],
    },
    {
      heading: '3. Portfolio Samples & Anonymization Policy',
      content: [
        'Any template showcases, design layouts, or screenshots displayed in our public catalog use fictitious or fully anonymized demo data (masked contact numbers such as +91 98XXX XXXXX and placeholder email addresses).',
        'Your actual personalized resume will never be published publicly without your explicit written consent.',
      ],
    },
    {
      heading: '4. Data Retention & Permanent Deletion',
      content: [
        'We retain working drafts for up to 30 days after final delivery solely to assist you with any subsequent revision requests or lost file recovery.',
        'You may request immediate, permanent deletion of all your source files and working drafts from our editing records at any time by messaging us on our official WhatsApp support (+91 74978 36378).',
      ],
    },
    {
      heading: '5. Grievance & Privacy Contact',
      content: [
        'Data Privacy Officer: Aryan Khan, Founder — Mr Aryan Service.',
        'Address: Abbaspura, Malerkotla, Punjab 148023, India.',
        'Official WhatsApp: +91 74978 36378 | Email: amaryankhan64@gmail.com.',
      ],
    },
  ],
};

export const TERMS_CONDITIONS: PolicySectionData = {
  title: 'Terms & Conditions',
  lastUpdated: 'October 2026',
  summary: 'These Terms of Service govern the professional resume writing and document formatting services provided by Mr Aryan Service. By engaging our services, you agree to these transparent terms.',
  sections: [
    {
      heading: '1. Scope of Professional Services',
      content: [
        'Mr Aryan Service provides bespoke resume formatting, linear ATS-friendly layout restructuring, keyword optimization, and professional wording refinement.',
        'Services are provided directly by career specialist Aryan Khan and his dedicated drafting team.',
        'Final deliverables include both an editable Microsoft Word document (.docx) for ongoing future updates and an export-grade, text-searchable PDF.',
      ],
    },
    {
      heading: '2. Turnaround Times & Delivery SLAs',
      content: [
        'Standard Turnaround: First complete drafts are delivered within 24 to 48 business hours after order confirmation and submission of your work history details.',
        'Express Turnaround: 24-hour priority drafting is available upon prior agreement via WhatsApp.',
        'Revision Turnaround: Refinement requests submitted during the revision period are processed within 12 to 24 hours.',
      ],
    },
    {
      heading: '3. Client Responsibilities & Accuracy',
      content: [
        'You agree to provide truthful, accurate, and verifiable information regarding your career history, designations, dates of employment, and educational credentials.',
        'Mr Aryan Service formats and refines provided information but does not verify academic degrees or fabricate fictitious work histories.',
      ],
    },
    {
      heading: '4. Transparent Service Scope & Disclaimer',
      content: [
        'Our formatting follows standard ATS-compatible single-column linear structures designed to eliminate table traps, non-standard symbols, and complex parsing errors.',
        'We do NOT guarantee interview calls, job offers, or candidate selection. Hiring outcomes depend entirely on employer hiring criteria, market competition, and candidate interview performance.',
        'We do NOT claim algorithmic bypass guarantees; our service focuses on honest, professional presentation.',
      ],
    },
  ],
};

export const REFUND_POLICY: PolicySectionData = {
  title: 'Refund & Revision Policy',
  lastUpdated: 'October 2026',
  summary: 'We believe in complete transparency and customer trust. We ensure that you receive dedicated drafting, personalized consultation, and revision support until you are fully satisfied with your resume.',
  sections: [
    {
      heading: '1. Order Intake & Consultation',
      content: [
        'Work begins immediately upon confirmation of your preferred Template ID and intake of your career history on WhatsApp.',
        'You receive direct 1-on-1 drafting guidance from career specialist Aryan Khan.',
      ],
    },
    {
      heading: '2. Order Cancellation Policy',
      content: [
        'If you request cancellation within 2 hours of placing your order and before custom drafting analysis has begun, your cancellation is processed immediately.',
        'Once drafting analysis has commenced, our team dedicates specialized time to craft your draft.',
      ],
    },
    {
      heading: '3. 14-Day Free Revisions Guarantee',
      content: [
        'Every client receives complimentary, unlimited revisions for up to 14 days following initial draft delivery.',
        'You may request edits to bullet points, skill adjustments, layout styling, or target job role alignment until you are completely satisfied.',
      ],
    },
    {
      heading: '4. Final Deliverables Handover',
      content: [
        'Upon your review and satisfaction with the draft, final unlocked editable Microsoft Word (.docx) and high-resolution print-ready PDF source files are delivered directly to you.',
      ],
    },
    {
      heading: '5. Direct Support & Assistance',
      content: [
        'To request a revision or discuss any questions, simply message Aryan Khan directly on WhatsApp at +91 74978 36378 with your Template ID and registered name.',
      ],
    },
  ],
};
