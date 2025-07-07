import GlobalStyles from '@/styles/GlobalStyles';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useState } from 'react';
import styled from 'styled-components';

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	const [active, setActive] = useState(true);

	const toggleMenuOnKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Escape') {
			setActive(!active);
		}
	};

	document.addEventListener('keydown', toggleMenuOnKeyDown);

	return (
		<>
			<GlobalStyles />
			<Outlet />
			<Overlay $active={active}>
				<div style={{ cursor: 'pointer' }}>X</div>
			</Overlay>
			<TanStackRouterDevtools />
		</>
	);
}

const Overlay = styled.div<{ $active: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;
