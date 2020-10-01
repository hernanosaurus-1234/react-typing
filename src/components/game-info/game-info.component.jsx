import React, { useState, useEffect } from 'react';

import { InfoContainer, InfoWrapper, Info, ButtonWrapper } from './game-info.styles';
import { useHistory } from 'react-router-dom';
import { wordsPerMinute } from '../../utilities/compute';
import { useGameState } from '../../provider/utils/game.util';

import CustomButton from '../custom-button/custom-button.component';

function GameInfo() {
	let history = useHistory();

	const [ timer, setTimer ] = useState(0);
	const [ wpm, setWpm ] = useState(0);

	const { state: { stopped, characters, completion }, onGameReset, isGameStopped, onSaveGame } = useGameState();

	useEffect(
		() => {
			let timeout = undefined;

			if (timer >= 0 && !stopped) {
				timeout = setTimeout(() => {
					setTimer(timer + 1);
				}, 1000);
			}

			return function cleanup() {
				clearTimeout(timeout);
			};
		},
		[ timer ]
	);

	useEffect(
		() => {
			if (!stopped) {
				if (completion === '100.00') {
					isGameStopped(true);
					onSaveGame(wpm);
				} else {
					setWpm(wordsPerMinute(characters, timer));
				}
			}
		},
		[ characters, timer, wpm ]
	);

	return (
		<InfoContainer>
			<InfoWrapper>
				<Info>
					Speed: <span>{wpm} WPM</span>
				</Info>
				|
				<Info>
					Completion: <span>{completion}%</span>
				</Info>
			</InfoWrapper>
			<ButtonWrapper>
				<CustomButton
					onClick={() => {
						onGameReset();
						history.push('/');
					}}
				>
					Go Back
				</CustomButton>
				<CustomButton
					onClick={() => {
						onGameReset();
						history.push('/game');
					}}
				>
					Play Again
				</CustomButton>
			</ButtonWrapper>
		</InfoContainer>
	);
}

export default GameInfo;
