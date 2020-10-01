import styled from 'styled-components';

export const PostContainer = styled.div`
	display: flex;
	align-items: center;
	padding: 12px 0;
	width: 100%;
`;

export const PlayerName = styled.div`
	flex: 0.4;
	font-size: 16px;
	text-align: left;
	text-transform: uppercase;

	span {
		margin-left: 16px;
		font-weight: 900;
	}
`;

export const WordsPerMinute = styled.div`
	flex: 0.2;
	font-size: 16px;
	text-align: center;

	span {
		margin-left: 16px;
		font-weight: 900;
	}
`;

export const DatePosted = styled.div`
	flex: 0.4;
	font-size: 16px;
	text-align: center;

	span {
		margin-left: 16px;
		font-weight: 900;
	}
`;
