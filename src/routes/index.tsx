import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from '@/components/platform-pages';
import { pageHead } from '@/lib/platform';
export const Route = createFileRoute("/")({
  head: () => pageHead('Home', 'RefugeeTalent Connect helps skilled refugees make their experience visible, navigate employment access and build meaningful career connections.'),
  component: HomePage,
});
