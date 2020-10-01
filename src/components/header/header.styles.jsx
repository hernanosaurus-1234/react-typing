import styled from 'styled-components';

export const HeaderContainer = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	white-space: nowrap;

	width: 100%;
	height: 80px;
	padding: 24px 64px;
`;

export const Logo = styled.div`
	font-size: 24px;
	font-weight: 700;
	text-transform: uppercase;
`;

export const NavContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	list-style: none;
`;

export const NavLink = styled.div`
	font-size: 14px;
	margin-left: 48px;
	text-transform: uppercase;

	cursor: pointer;

	transition: all 0.2s ease-in;
`;
