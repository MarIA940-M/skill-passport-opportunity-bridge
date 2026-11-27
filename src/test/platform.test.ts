import { describe, expect, it } from 'vitest';
import { emptyPassport, filterOpportunities, passportProgress, opportunities } from '@/lib/platform';
describe('Prototype behavior', () => {
  it('finds sample opportunities by skill', () => { expect(filterOpportunities('React', 'All locations', 'All types').map(j => j.id)).toEqual([1]); });
  it('filters opportunities by location', () => { expect(filterOpportunities('', 'Germany', 'All types').map(j => j.id)).toEqual([1, 6]); });
  it('filters internships separately from jobs and fellowships', () => { expect(filterOpportunities('', 'All locations', 'Internship').map(j => j.id)).toEqual([3, 6]); });
  it('matches saved skills by shared keywords', () => { expect(filterOpportunities('', 'All locations', 'All types', 'React, Figma').map(j => j.id)).toEqual([1, 5]); });
  it('counts alternative evidence when documents are missing', () => { expect(passportProgress({ ...emptyPassport, evidence: 'Community project' })).toBe(25); });
  it('does not count missing evidence', () => { expect(passportProgress(emptyPassport)).toBe(0); });
  it('completes a passport with skills, profile, education and evidence', () => { expect(passportProgress({ name: 'Demo Person', email: 'demo@example.com', country: 'Kenya', profession: 'Developer', skills: 'React', education: 'Training', evidence: 'Portfolio', documents: [] })).toBe(100); });
  it('provides internships and fellowships for local experience', () => { expect(opportunities.some(j => j.type === 'Internship')).toBe(true); expect(opportunities.some(j => j.type === 'Fellowship')).toBe(true); });
});