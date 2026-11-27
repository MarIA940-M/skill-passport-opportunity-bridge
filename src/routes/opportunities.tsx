import { createFileRoute } from '@tanstack/react-router';
import { OpportunitiesPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/opportunities')({
 head: () => pageHead('Jobs & Opportunities', 'Explore sample jobs, internships and fellowships and match your professional skills.'),
 component: OpportunitiesPage,
});
