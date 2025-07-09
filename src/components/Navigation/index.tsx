import { Link } from '@tanstack/react-router';
import Footer from '../Footer';
import {
	EvenMoreStars,
	MoreStars,
	NavigationInnerWrapper,
	NavigationList,
	NavigationWrapper,
	Stars,
} from './styles';

export default function Navigation({
	location,
	active,
	setActive,
}: {
	location: string;
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}) {
	return (
		<NavigationWrapper>
			<Stars />
			<MoreStars />
			<EvenMoreStars />
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
					<Footer
						text="Exit Menu"
						bgColor="radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)"
					/>
				)}
			</NavigationInnerWrapper>
		</NavigationWrapper>
	);
}
