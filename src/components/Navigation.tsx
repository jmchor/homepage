import { Link } from '@tanstack/react-router';
import styled from 'styled-components';

export default function Navigation() {
	return (
		<div>
			<nav>
				<NavigationList>
					<li>
						<Link to="/about">about</Link>
					</li>
					<li>
						<Link to="/development">development</Link>
					</li>
					<li>
						<Link to="/activism">activism</Link>
					</li>
					<li>
						<Link to="/music">music</Link>
					</li>
					<li>
						<a
							href="https://papertrail.jmchor.dev/"
							target="_blank"
							rel="noreferrer"
						>
							blog
						</a>
					</li>
				</NavigationList>
			</nav>
		</div>
	);
}

const NavigationList = styled.ul`
    color: red;
    font-size: 42px;

    li {
        list-style: none;
        transition: transform 0.3s ease-out;
    };
    li:hover {
        transition-duration: 0.2s;
        transform: scale(1.3);
    };


`;
