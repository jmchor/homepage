import Navigation from '@/components/Navigation';
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/')({
	component: App,
});

function App() {
	return (
		<div>
			<IndexWrapper>
				<Navigation currentLocation="/" />
			</IndexWrapper>
		</div>
	);
}

const IndexWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 100vh;
z-index: 40;
background-color: black;
`;
