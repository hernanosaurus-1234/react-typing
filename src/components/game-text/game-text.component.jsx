import React from 'react';

import { TextContainer, Letters } from './game-text.styles';
import { useGameState } from '../../provider/utils/game.util';

function GameText() {
	const { state: { text, input } } = useGameState();

	const splitText = text.split('').map((s, i) => {
		let color = '';
		if (i < input.length) {
			color = s === input[i] ? 'correct' : 'incorrect';
		}
		return (
			<Letters key={`${s}_${i}`} color={color}>
				{s}
			</Letters>
		);
	});

	return <TextContainer>{splitText}</TextContainer>;
}

export default GameText;
