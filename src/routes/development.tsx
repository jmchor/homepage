import { DevProjects } from '@/data/DevProjects';
import { GlobalWebpageStyle } from '@/styles/GlobalWebpageStyle';
import { createFileRoute } from '@tanstack/react-router';
import styled from 'styled-components';

export const Route = createFileRoute('/development')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<GlobalWebpageStyle>
			<p>Development</p>
			<ProjectGrid>
				{DevProjects.map((project) => (
					<GridElement key={project.title}>
						<h3>{project.title}</h3>
						<a href={project.link}>
							<img
								src={project.thumbnail.src}
								width={project.thumbnail.width}
								height={project.thumbnail.height}
								srcSet={`${project.thumbnail.src} 2x`}
								alt={project.thumbnail.alt}
								loading="lazy"
							/>
						</a>
					</GridElement>
				))}
			</ProjectGrid>
		</GlobalWebpageStyle>
	);
}

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  margin-top: 20px;
  border: 1px solid #ccc;

`;

const GridElement = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  height: 250px;
  width:250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
