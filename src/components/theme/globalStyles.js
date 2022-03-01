import { createGlobalStyle, keyframes } from "styled-components";

const fadeIn = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`;

const GlobalStyles = createGlobalStyle`

	html {
		height: 100vh;
		width: 100vw;
		font-size: 62.5%;
	},
	*,
	html {
	    box-sizing: border-box;
	    -webkit-font-smoothing: antialiased;
	    -moz-osx-font-smoothing: grayscale;
	}
	code {
		font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
		  monospace;
	}
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		list-style-type: none;
		text-decoration: none;
		font-family: ${({ theme }) => theme.fonts.body};
		outline: none;
  	  	border: none;
	},
	*,
	*:before,
	*:after {
	    box-sizing: inherit;
	    box-sizing: border-box;
	    margin: 0;
	    padding: 0;
	    list-style-type: none;
	    text-decoration: none;
	}
	img,
	p {
	    width: 100%;
	    height: auto;
	    vertical-align: middle;
	    display: block;
	}
	body {
		background-size: cover;
		background-color: ${({ theme }) => theme.mainColors.canvasColor};
		box-sizing: border-box;
		animation: 0.2s ${fadeIn} forwards ease-in;
		margin: 0 auto;
		font-size: 1rem;
		margin: 0;
		font-family: ${({ theme }) => theme.fonts.body};
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;	
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
	*:focus {
	    outline: none;
	}
	button:focus {
	    outline: 0;
	}
	input,
	textarea,
	select,
	label,
	fieldset {
	font-family: inherit;
	font-size: 1rem;
	line-height: 1.4rem;
	}
	.canvasField {
	    display: flex;
	    flex-direction: column;
	}
	.mainPageHeader {
		margin-bottom: 3rem;
        border-bottom: 1px solid ${({ theme }) => theme.mainColors.lineColor};
        padding-bottom: 1rem;
		background-color: ${({ theme }) => theme.mainColors.canvasColor};
		width: 100%;
	}
	.containerGrid {
		border: 5px solid blue;
	}
	.filler {
		width: 100vw;
		height: 100vh;
		background: purple;
	}
	.HeaderFlourish {
		position: relative;
          &::after,
          &::before {
            content: "";
            width: 40%;
            text-align: center;
            margin: 0 auto;
            margin-top: 1rem;
            position: absolute;
            left: -50%;
            right: -50%;
            top: 100%;
            z-index: 3;
            background: ${({ theme }) => theme.mainColors.primaryColor};
            width: clamp(3rem, 2vw, 4rem);
            height: clamp(3rem, 2vw, 4rem);
            clip-path: polygon(0 0, 100% 15%, 100% 20%, 0 5%);
            @media (max-width: ${({ theme }) => theme.media.desktop}) {
              display: none;
            }
          }
          &::before {
            transform: translateY(0.5rem);
          }
	}
	.sectionBody {
          color: ${(props) => props.theme.mainColors.textColorDark};
          margin: 0 auto;
          margin-top: 4rem;
          text-align: center;
          width: 90vw;
        @media (min-width: ${({ theme }) => theme.media.desktop}) {
            width: 40vw;
        }
     }

`;

export default GlobalStyles;

// -webkit-animation: ${fadein} 1.5s;
// animation: ${fadein} 1.5s;
