import combineReducers from 'react-combine-reducers';

import { USER_STATE, userReducer } from './user/user.reducer';
import { GAME_STATE, gameReducer } from './game/game.reducer';

export const [ rootReducer, INITIAL_STATE ] = combineReducers({
	user : [ userReducer, USER_STATE ],
	game : [ gameReducer, GAME_STATE ]
});
