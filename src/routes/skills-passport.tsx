import { createFileRoute } from '@tanstack/react-router';
import { PassportPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/skills-passport')({
 head: () => pageHead('Skills Passport', 'Create a self-reported professional Skills Passport with skills, education and alternative evidence.'),
 component: PassportPage,
});
