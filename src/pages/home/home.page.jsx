import React from 'react';

import { HomeContainer, Title, Caption, AppLogo } from './home.styles';

import logo from '../../logo.svg';
import CustomButton from '../../components/custom-button/custom-button.component';

import { useHistory } from 'react-router-dom';

function Home() {
	let history = useHistory();

	return (
		<HomeContainer>
			<AppLogo src={logo} />
			<Title>React Typing Game</Title>
			<Caption>A simple react typing game. Practice your typing skills and track your progress.</Caption>
			<CustomButton onClick={() => history.push('/game')}>Start a Game</CustomButton>
		</HomeContainer>
	);
}

export default Home;
