import styled from 'styled-components';

export const SignInContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	p {
		color: black;
		margin: 16px 0;
	}

	span {
		color: red;
		display: inline-block;
		white-space: normal;
	}
`;

export const SignInTitle = styled.h2`margin: 10px 0;`;

export const ButtonsBarContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
