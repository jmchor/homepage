import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/music')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div style={{ display: 'flex', justifyContent: 'center' }}>
			<MusicFrame
				title="music"
				src="https://open.spotify.com/embed/playlist/70RIzkaiuvrFb65WNHis8E?utm_source=generator"
				allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
				loading="eager"
			/>
		</div>
	);
}

const MusicFrame = styled.iframe`
	width: 450px;
	height: 452px;
	border-radius: 12px;
`;
