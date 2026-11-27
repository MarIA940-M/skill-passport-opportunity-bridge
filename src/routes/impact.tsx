import { createFileRoute } from '@tanstack/react-router';
import { ImpactPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/impact')({
 head: () => pageHead('Impact Dashboard', 'Explore clearly labeled demonstration impact data and Sustainable Development Goal alignment.'),
 component: ImpactPage,
});
