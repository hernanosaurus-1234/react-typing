import React from 'react';

import { HeaderContainer, Logo, NavContainer, NavLink } from './header.styles';

import { useUserState } from '../../provider/utils/user.util';
import { useGameState } from '../../provider/utils/game.util';

import { useHistory } from 'react-router-dom';

function Header() {
	let history = useHistory();

	const { state: { currentUser, displayName }, handleSignOut, handleLoading } = useUserState();
	const { onGameReset } = useGameState();

	return (
		<HeaderContainer>
			<Logo>React Typing</Logo>

			<NavContainer>
				<NavLink
					onClick={() => {
						onGameReset();
						history.push('/');
					}}
				>
					Home
				</NavLink>
				<NavLink
					onClick={() => {
						handleLoading(true);
						onGameReset();
						history.push('/leaderboard');
					}}
				>
					Leaderboard
				</NavLink>
				{!currentUser ? (
					<NavLink
						onClick={() => {
							onGameReset();
							history.push('/login');
						}}
					>
						{' '}
						Log In{' '}
					</NavLink>
				) : (
					<React.Fragment>
						{!currentUser ? null : (
							<NavLink
								onClick={() => {
									handleLoading(true);
									onGameReset();
									history.push('/record');
								}}
							>
								{displayName}
							</NavLink>
						)}
						<NavLink
							onClick={() => {
								handleSignOut();
								history.push('/');
							}}
						>
							{' '}
							Log out{' '}
						</NavLink>
					</React.Fragment>
				)}
			</NavContainer>
		</HeaderContainer>
	);
}

export default Header;
