import React, { useState, useEffect } from 'react';

import { CountdownContainer, Timer, Instructions } from './countdown.styles';
import { useGameState } from '../../provider/utils/game.util';

function Countdown() {
	const [ timer, setTimer ] = useState(5);
	const { isGameStarted } = useGameState();

	useEffect(
		() => {
			let timeout = undefined;

			if (timer > 0) {
				timeout = setTimeout(() => setTimer(timer - 1), 1000);
			} else {
				isGameStarted(true);
			}

			return function cleanup() {
				clearTimeout(timeout);
			};
		},
		[ timer ]
	);

	return (
		<CountdownContainer>
			<span>Game will start in :</span> <Timer>{timer}</Timer>
			<Instructions>
				<span>1. Copy the underlined words within the time limit.</span>
				<span>2. Stats will be recorded as soon as you complete the test.</span>
			</Instructions>
		</CountdownContainer>
	);
}

export default Countdown;
