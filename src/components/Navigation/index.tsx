import { Link } from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import Footer from '../Footer';
import {
	EvenMoreStars,
	MoreStars,
	NavigationInnerWrapper,
	NavigationList,
	NavigationWrapper,
	Stars,
} from './styles';

type Route = {
	path: string;
	label: string;
};

export default function Navigation({
	currentLocation,
}: { currentLocation: string }) {
	const [filteredRoutes, setFilteredRoutes] = useState<Route[]>([]);
	const routes: Route[] = [
		{
			path: '/about',
			label: 'about',
		},
		{
			path: '/development',
			label: 'development',
		},
		{
			path: '/activism',
			label: 'activism',
		},
		{
			path: '/music',
			label: 'music',
		},
	];

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// If the current path is '/', show all routes
		if (currentLocation === '/') {
			setFilteredRoutes(routes);
		} else {
			// Otherwise, filter out the current page's path
			const updatedRoutes = routes.filter(
				(route) => route.path !== currentLocation,
			);
			setFilteredRoutes(updatedRoutes);
		}
	}, [currentLocation]);

	return (
		<NavigationWrapper>
			<Stars />
			<MoreStars />
			<EvenMoreStars />
			<NavigationInnerWrapper>
				<nav>
					<NavigationList>
						{filteredRoutes.length > 0 &&
							filteredRoutes.map((route) => (
								<li key={route.path}>
									<Link to={route.path}>{route.label}</Link>
								</li>
							))}
						<li>
							<a
								href="https://papertrail.jmchor.dev/"
								target="_blank"
								rel="noreferrer"
							>
								Blog
							</a>
						</li>
					</NavigationList>
				</nav>

				{currentLocation !== '/' && window.innerWidth > 1200 && (
					<Footer active={true} />
				)}
			</NavigationInnerWrapper>
		</NavigationWrapper>
	);
}
