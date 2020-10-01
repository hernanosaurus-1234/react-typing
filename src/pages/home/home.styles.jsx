import styled from 'styled-components';

export const HomeContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	text-align: center;

	width: 800px;
	height: auto;
	margin: 0 auto;
`;

export const AppLogo = styled.img`
	height: 20vh;
	pointer-events: none;
	margin-bottom: 16px;

	animation: App-logo-spin infinite 20s linear;

	@keyframes App-logo-spin {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

export const Title = styled.h1`
	font-size: 48px;
	margin-bottom: 16px;
`;

export const Caption = styled.p`
	font-size: 16px;
	margin-bottom: 48px;
`;
