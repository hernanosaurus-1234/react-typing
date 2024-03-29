import styled, { css } from 'styled-components';

const light = 'white';
const dark = 'black';

const buttonStyles = css`
	background-color: ${dark};
	color: ${light};
	border: 1px solid ${dark};
	outline: 0;

	transition: all 0.2s ease-in;

	&:hover {
		background-color: ${light};
		color: ${dark};
		border: 1px solid ${dark};
	}
`;

const invertedButtonStyles = css`
	background-color: ${light};
	color: ${dark};
	border: 1px solid ${dark};

	&:hover {
		background-color: ${dark};
		color: white;
		border: none;
	}
`;

const googleSignInStyles = css`
	background-color: #4285f4;
	color: ${light};

	&:hover {
		background-color: #357ae8;
		border: none;
	}
`;

const getButtonStyles = (props) => {
	if (props.isGoogleSignIn) {
		return googleSignInStyles;
	}

	return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;
	display: flex;
	justify-content: center;

	${getButtonStyles};
`;
