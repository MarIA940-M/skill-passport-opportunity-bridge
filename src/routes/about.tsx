import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/about')({
 head: () => pageHead('About the Project', 'Learn how RefugeeTalent Connect addresses skills recognition, access and professional networks.'),
 component: AboutPage,
});
