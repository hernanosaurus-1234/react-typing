import React from 'react';

import { TextArea } from './user-input.styles';
import { useGameState } from '../../provider/utils/game.util';

function UserInput() {
	const { state: { text, input, disabled }, onInputChange } = useGameState();

	return (
		<TextArea
			autoFocus
			value={input}
			maxLength={text.length}
			disabled={disabled}
			onChange={(e) => {
				onInputChange(e.target.value);
			}}
		/>
	);
}

export default UserInput;
