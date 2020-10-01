import React, { useState, useEffect } from 'react';

import { GameContainer } from './game.styles';

import Countdown from '../../components/countdown/countdown.component';
import GameClock from '../../components/game-clock/game-clock.component';
import GameText from '../../components/game-text/game-text.component';
import UserInput from '../../components/user-input/user-input.component';
import GameInfo from '../../components/game-info/game-info.component';

import axios from 'axios';

import { useGameState } from '../../provider/utils/game.util';

function Game() {
	const [ loaded, setLoaded ] = useState(true);
	const { state: { started }, onTextChange } = useGameState();

	const uri = 'https://baconipsum.com/api/?type=meat-and-filler&paras=1&format=text';

	useEffect(
		() => {
			if (!started) {
				axios
					.get(uri)
					.then((response) => {
						setLoaded(true);
						onTextChange(response.data);
					})
					.catch((error) => alert(error.message));
			}
		},
		[ started ]
	);

	return (
		<GameContainer>
			{loaded ? !started ? (
				<Countdown />
			) : (
				<React.Fragment>
					<GameClock />
					<GameText />
					<UserInput />
					<GameInfo />
				</React.Fragment>
			) : null}
		</GameContainer>
	);
}

export default Game;
