import styled from 'styled-components';

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 20px 0;
	margin-bottom: 48px;
`;

export const InfoWrapper = styled.div`
	display: flex;
	align-items: center;
	width: 60%;
	justify-content: space-between;
	margin-bottom: 60px;
`;

export const Info = styled.div`
	display: flex;
	align-items: center;
	font-size: 16px;

	span {
		font-size: 24px;
		font-weight: 700;
		margin-left: 8px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
