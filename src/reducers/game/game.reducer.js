import { nCorrect, nCompletion } from '../../utilities/compute';

export const GAME_STATE = {
	text       : 'This is a Dummy Text',
	input      : '',
	started    : false,
	stopped    : false,
	disabled   : false,
	characters : 0,
	completion : 0
};

export const gameReducer = (state, action) => {
	switch (action.type) {
		case 'GAME_STARTED':
			return {
				...state,
				started  : action.payload,
				disabled : false
			};

		case 'GAME_STOPPED':
			return {
				...state,
				stopped  : action.payload,
				disabled : true
			};

		case 'ON_INPUT_CHANGE':
			return {
				...state,
				input      : action.payload,
				characters : nCorrect(state.text, action.payload),
				completion : nCompletion(state.text, action.payload)
			};

		case 'ON_TEXT_CHANGE':
			return {
				...state,
				text : action.payload
			};

		case 'SET_WPM':
			return {
				...state,
				wpm : action.payload
			};

		default:
			return state;
	}
};
