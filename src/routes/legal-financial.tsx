import { createFileRoute } from '@tanstack/react-router';
import { LegalPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/legal-financial')({
 head: () => pageHead('Legal & Financial Hub', 'Explore illustrative country-specific employment documentation and financial access guidance.'),
 component: LegalPage,
});
