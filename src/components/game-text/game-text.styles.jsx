import styled, { css } from 'styled-components';

export const TextContainer = styled.div`
	width: 100%;
	padding: 20px 0;

	font-size: 16px;
	font-weight: 300;
	text-decoration: underline;
`;

const correct = css`background-color: #5cb85c;`;
const incorrect = css`background-color: #d9534f;`;

const setLetterColor = (props) => {
	if (props.color === 'correct') return correct;
	else if (props.color === 'incorrect') return incorrect;
};

export const Letters = styled.span`${setLetterColor};`;
