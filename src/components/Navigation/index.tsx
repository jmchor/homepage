import { Link } from '@tanstack/react-router';
import Footer from '../Footer';
import {
	NavigationInnerWrapper,
	NavigationList,
	NavigationWrapper,
} from './styles';

export default function Navigation({ location }: { location: string }) {
	return (
		<NavigationWrapper>
			<NavigationInnerWrapper>
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

				{location !== '/' && window.innerWidth > 1200 && (
					<Footer active={true} bgColor="var(--endlessSpace)" />
				)}
			</NavigationInnerWrapper>
		</NavigationWrapper>
	);
}
