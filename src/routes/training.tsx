import { createFileRoute } from '@tanstack/react-router';
import { TrainingPage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute('/training')({
 head: () => pageHead('Training Resources', 'Practice career readiness, digital skills and professional networking.'),
 component: TrainingPage,
});
