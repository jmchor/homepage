import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/')({
	component: App,
});

function App() {
	return (
		<div>
			<Testpage>
				<p>Hello.</p>
			</Testpage>
		</div>
	);
}

const Testpage = styled.div`
z-index: 40;
`;
