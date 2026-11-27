import { createFileRoute } from '@tanstack/react-router';
import { MentorshipPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/mentorship')({
 head: () => pageHead('Mentorship', 'Explore sample mentors and professional networks to support your career.'),
 component: MentorshipPage,
});
