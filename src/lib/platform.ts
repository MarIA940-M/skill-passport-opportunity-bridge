export const opportunities = [
  { id: 1, title: 'Junior Software Developer', company: 'BrightPath Technologies', mark: 'B', location: 'Germany', city: 'Berlin, Germany', type: 'Full-time', category: 'Technology', skills: ['JavaScript', 'React', 'Problem solving'], description: 'Collaborate with a supportive product team to build accessible web applications. A portfolio or practical project can demonstrate your experience.', salary: '€36,000–€45,000 / year' },
  { id: 2, title: 'Community Health Fellowship', company: 'Global Care Initiative', mark: 'G', location: 'Kenya', city: 'Nairobi, Kenya', type: 'Fellowship', category: 'Healthcare', skills: ['Community health', 'Communication', 'First aid'], description: 'Support community outreach and health education with supervised practical experience. Any clinical duties depend on local authorization.', salary: 'Stipend details to be confirmed' },
  { id: 3, title: 'Digital Marketing Intern', company: 'Open Horizons Studio', mark: 'O', location: 'Remote', city: 'Remote', type: 'Internship', category: 'Marketing', skills: ['Content creation', 'Social media', 'Communication'], description: 'Develop content and learn campaign planning through a mentored internship. Build a portfolio of practical work.', salary: 'Paid internship · sample terms' },
  { id: 4, title: 'Project Support Associate', company: 'Together Works', mark: 'T', location: 'Uganda', city: 'Kampala, Uganda', type: 'Full-time', category: 'Operations', skills: ['Organization', 'Communication', 'Excel'], description: 'Coordinate schedules, support project reporting, and collaborate with local partners.', salary: 'Salary details to be confirmed' },
  { id: 5, title: 'UX Design Fellowship', company: 'Inclusive Design Lab', mark: 'I', location: 'Remote', city: 'Remote', type: 'Fellowship', category: 'Technology', skills: ['Design', 'Research', 'Figma'], description: 'Join a mentored design cohort focused on inclusive digital services. Practical design work can support your application.', salary: 'Stipend details to be confirmed' },
  { id: 6, title: 'Operations Intern', company: 'Green Future Collective', mark: 'G', location: 'Germany', city: 'Hamburg, Germany', type: 'Internship', category: 'Operations', skills: ['Excel', 'Organization', 'Problem solving'], description: 'Gain local workplace experience supporting a sustainability team.', salary: 'Paid internship · sample terms' },
];
export type Opportunity = typeof opportunities[number];
export function filterOpportunities(query: string, location: string, type: string, skills = '') {
  const terms = skills.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  return opportunities.filter(job => `${job.title} ${job.company} ${job.skills.join(' ')}`.toLowerCase().includes(query.toLowerCase()) && (location === 'All locations' || job.location === location) && (type === 'All types' || job.type === type) && (!terms.length || terms.some(term => job.skills.some(skill => skill.toLowerCase().includes(term)))));
}
export type Passport = { name: string; email: string; country: string; profession: string; skills: string; education: string; evidence: string; documents: string[] };
export const emptyPassport: Passport = { name: '', email: '', country: '', profession: '', skills: '', education: '', evidence: '', documents: [] };
export function passportProgress(p: Passport) {
  return [Boolean(p.name && p.email && p.country), Boolean(p.profession && p.skills), Boolean(p.education), Boolean(p.documents.length || p.evidence)].filter(Boolean).length * 25;
}
export function pageHead(title: string, description: string) {
  const fullTitle = `${title} | RefugeeTalent Connect`;
  return { meta: [{ title: fullTitle }, { name: 'description', content: description }, { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] };
}