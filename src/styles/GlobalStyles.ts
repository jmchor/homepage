import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`


html {
	--maxwidth: 1000px;
	--bs: 0 12px 24px 0 rgba(0,0,0,0.09);
	box-sizing: border-box;
	--footerHeight: 50px;
	--starColor: #fff;
	/* font-size: 62.5%; */
}

*, *:before, *:after {
	box-sizing: inherit;
}
body {
	font-family: 'Futura', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	padding: 0;
	margin: 0;

	line-height: 2;

}

h1, h2, h3, h4, h5, h6 {
	margin: 0;
}


ul {
	margin: 0;
	padding: 0;
	list-style: none;
}

a {
	text-decoration: none;
}

@keyframes animStar {
	from {
		transform: translateY(0px);
	}
	to {
		transform: translateY(-2000px);
	}
}


/* button {
	font-family: 'Work Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	width: auto;
	background: none;
	color: black;
	border: 2px solid black;
	border-radius: 5px;
	font-size: 18px;
	font-weight: 600;
	padding: 0.5rem 1.2rem;

} */

	@media (max-width: 1440px) {
    /* Media query for smaller screens */
    body {
      overflow: hidden; /* Prevent scrolling on smaller screens */
    }
	}


`;

export default GlobalStyles;
