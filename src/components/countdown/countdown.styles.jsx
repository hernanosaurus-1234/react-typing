import styled from 'styled-components';

export const CountdownContainer = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	font-size: 48px;
	text-transform: uppercase;
`;

export const Timer = styled.h1`
	font-size: 80px;
	margin-bottom: 32px;
`;

export const Instructions = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin: 0 auto;

	span {
		text-transform: initial;
		font-size: 16px;
		font-weight: 300;
		line-height: 1.5;
	}
`;
