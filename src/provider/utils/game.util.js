import { useContext } from 'react';
import { Context } from '../provider';
import { firestore } from '../../firebase/firebase.util';

export const useGameState = () => {
	const [ state, dispatch ] = useContext(Context);

	const started = state.game.started;
	const stopped = state.game.stopped;
	const text = state.game.text;
	const input = state.game.input;
	const disabled = state.game.disabled;
	const characters = state.game.characters;
	const completion = state.game.completion;

	// gets the user
	const currentUser = state.user.currentUser;
	const displayName = state.user.displayName;

	const isGameStarted = (bool) => {
		dispatch({ type: 'GAME_STARTED', payload: bool });
	};

	const isGameStopped = (bool) => {
		dispatch({ type: 'GAME_STOPPED', payload: bool });
	};

	const onInputChange = (val) => {
		dispatch({ type: 'ON_INPUT_CHANGE', payload: val });
	};

	const onTextChange = (val) => {
		dispatch({ type: 'ON_TEXT_CHANGE', payload: val });
	};

	const onGameReset = () => {
		isGameStarted(false);
		isGameStopped(false);
		onInputChange('');
		onTextChange('');
	};

	const onSaveGame = (wpm) => {
		if (state.user.currentUser) {
			let today = new Date(),
				date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

			firestore.collection('records').add({
				email       : currentUser.user.email,
				displayName : displayName,
				wpm         : wpm,
				timestamp   : date
			});
		}
	};

	return {
		state         : { started, stopped, text, input, disabled, characters, completion },
		isGameStarted,
		isGameStopped,
		onTextChange,
		onInputChange,
		onGameReset,
		onSaveGame
	};
};
