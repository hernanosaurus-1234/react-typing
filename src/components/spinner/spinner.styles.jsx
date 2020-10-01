import styled, { css } from 'styled-components';

const show = css`display: flex;`;
const hide = css`display: none;`;

const getSpinner = (props) => {
	if (props.show) {
		return show;
	} else {
		return hide;
	}
};

export const Dimmer = styled.div`
	position: absolute;
	top: 0;
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.2);

	${getSpinner};
`;

export const SpinnerContainer = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 3px solid rgba(255, 255, 255, 1);
	border-radius: 50%;
	border-top-color: #000;
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
