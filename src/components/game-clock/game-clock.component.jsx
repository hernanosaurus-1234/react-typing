import React, { useState, useEffect } from 'react';

import { GameClockContainer } from './game-clock.styles';

import { useGameState } from '../../provider/utils/game.util';

function GameClock() {
	const { state: { stopped }, isGameStopped } = useGameState();

	const [ timer, setTimer ] = useState(180);

	useEffect(
		() => {
			let timeout = undefined;

			if (timer > 0 && !stopped) {
				timeout = setTimeout(() => {
					setTimer(timer - 1);
				}, 1000);
			} else {
				isGameStopped(true);
			}

			return function cleanup() {
				clearTimeout(timeout);
			};
		},
		[ timer ]
	);

	const formatTime = (time) => {
		let minutes = '0' + Math.floor(time / 60);
		let seconds = time % 60;

		return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
	};

	return (
		<GameClockContainer>
			Time Remaining: <span>{formatTime(timer)}</span>
		</GameClockContainer>
	);
}

export default GameClock;
