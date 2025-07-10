import { GlobalWebpageStyle } from '@/styles/GlobalWebpageStyle';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about')({
	component: AboutPage,
});

function AboutPage() {
	return (
		<GlobalWebpageStyle>
			<p>About</p>
		</GlobalWebpageStyle>
	);
}
