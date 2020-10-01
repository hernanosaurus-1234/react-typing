import React, { createContext, useReducer } from 'react';

import { rootReducer, INITIAL_STATE } from '../reducers/root-reducer';

export const Context = createContext([ INITIAL_STATE, () => {} ]);

export const Provider = ({ children }) => {
	const [ state, dispatch ] = useReducer(rootReducer, INITIAL_STATE);
	return <Context.Provider value={[ state, dispatch ]}>{children}</Context.Provider>;
};
