import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/contact')({
 head: () => pageHead('Contact Us', 'Try the RefugeeTalent Connect demonstration contact form.'),
 component: ContactPage,
});
