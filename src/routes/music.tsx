import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/music')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<iframe
				title="music"
				style={{ borderRadius: '12px' }}
				src="https://open.spotify.com/embed/playlist/70RIzkaiuvrFb65WNHis8E?utm_source=generator"
				width="20%"
				height="452"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="eager"
			/>
		</div>
	);
}
