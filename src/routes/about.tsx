import { GlobalWebpageStyle } from '@/styles/GlobalWebpageStyle';
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/about')({
	component: AboutPage,
});

function AboutPage() {
	return (
		<GlobalWebpageStyle>
			<AboutGrid>
				<Element rowStart={1} rowEnd={3} colStart={1} colEnd={3}>
					<p>about</p>
				</Element>
				<Element rowStart={1} rowEnd={3} colStart={3} colEnd={6}>
					<img src="/frau_ziege.jpg" alt="" />
				</Element>
			</AboutGrid>
		</GlobalWebpageStyle>
	);
}

const AboutGrid = styled.div`
width: 80%;

display: grid;
grid-template-columns: repeat(5, 1fr);
grid-gap: 10px;
border: 1px solid #ccc;
`;

const AboutGridBaseElement = styled.div`
border: 1px solid #d40000;
padding: 10px;
height: 450px;
width:100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Element = styled(AboutGridBaseElement)<{
	rowStart: number;
	rowEnd: number;
	colStart: number;
	colEnd: number;
}>`
grid-row: ${(props) => props.rowStart} / ${(props) => props.rowEnd};
grid-column: ${(props) => props.colStart} / ${(props) => props.colEnd};

img {

	height: 100%;
}
`;
