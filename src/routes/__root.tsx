import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
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

	const location = routerState.location.pathname as string;

	useEffect(() => {
		const toggleMenuOnKeyDown = (event: KeyboardEvent) => {
			if (event.key !== 'Escape') return;
			if (routerState.location.pathname === '/') return;

			setActive((prev) => !prev);
		};

		document.addEventListener('keydown', toggleMenuOnKeyDown);

		return () => {
			document.removeEventListener('keydown', toggleMenuOnKeyDown);
		};
	}, [routerState.location.pathname]); // reattach if pathname changes

	useEffect(() => {
		// Close modal when route changes
		console.log(routerState.location.pathname);
		setActive(false);
	}, [routerState.location.pathname]);

	return (
		<>
			<GlobalStyles />
			<Outlet />
			<Overlay $active={active} className="overlay">
				<Navigation location={location} />
			</Overlay>

			{/* Display  Footer only on non root paths*/}

			{location !== '/' && <Footer text="Menu" bgColor="#646262" />}

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
	background-color: rgb(0, 0, 0);

	display: ${({ $active }) => ($active ? 'flex' : 'none')};
	justify-content: center;
	align-items: center;
	z-index: ${({ $active }) => ($active ? 100 : -1)};
	opacity: ${({ $active }) => ($active ? 1 : 0)};
	transition: opacity 0.3s ease-in-out;
`;
