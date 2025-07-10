import Footer from '@/components/Footer';
import MobileHeader from '@/components/MobileHeader';
import Navigation from '@/components/Navigation';
import {
	EvenMoreStars,
	MoreStars,
	NavigationWrapper,
	Stars,
} from '@/components/Navigation/styles';
import GlobalStyles from '@/styles/GlobalStyles';
import {
	Outlet,
	createRootRoute,
	useRouterState,
} from '@tanstack/react-router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const [active, setActive] = useState(false);
	const routerState = useRouterState(); //get the pathname to toggle menu only on non root paths

	const currentLocation = routerState.location.pathname as string;

	useEffect(() => {
		const toggleMenuOnKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			if (currentLocation === '/') return;

			setActive((prev) => !prev);
		};

		document.addEventListener('keydown', toggleMenuOnKeyDown);

		return () => {
			document.removeEventListener('keydown', toggleMenuOnKeyDown);
		};
	}, [currentLocation]); // reattach if pathname changes

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		// Close modal when route changes

		setActive(false);
	}, [currentLocation]);

	return (
		<>
			<GlobalStyles />
			<NavigationWrapper>
				<Outlet />
				{currentLocation !== '/' && window.innerWidth < 1200 && (
					<MobileHeader active={active} setActive={setActive} />
				)}

				<Overlay $active={active} className="overlay">
					<Navigation currentLocation={currentLocation} />
				</Overlay>
				<Stars />
				<MoreStars />
				<EvenMoreStars />

				{/* Display  Footer only on non root paths*/}

				{currentLocation !== '/' && window.innerWidth > 1200 && (
					<Footer active={active} />
				)}
			</NavigationWrapper>

			{/* <TanStackRouterDevtools /> */}
		</>
	);
}

const Overlay = styled.div<{ $active: boolean }>`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;


	display: ${({ $active }) => ($active ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	z-index: ${({ $active }) => ($active ? 100 : -1)};
	opacity: ${({ $active }) => ($active ? 1 : 0)};
	transition: opacity 0.3s ease-in-out;
`;
