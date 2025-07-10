import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/music')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<iframe
				title="music"
				style={{ borderRadius: '12px' }}
				src="https://open.spotify.com/embed/playlist/70RIzkaiuvrFb65WNHis8E?utm_source=generator"
				width="50%"
				height="852"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="lazy"
			/>
		</div>
	);
}
