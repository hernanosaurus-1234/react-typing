export const USER_STATE = {
	currentUser : null,
	displayName : '',
	email       : '',
	error       : '',
	loading     : false
};

export const userReducer = (state, action) => {
	switch (action.type) {
		case 'IS_LOADING':
			return {
				...state,
				loading : action.payload
			};

		case 'SIGN_IN_SUCCESS':
			console.log('SIGN IN SUCCESS!');
			return {
				...state,
				currentUser : action.payload.user,
				displayName : action.payload.displayName,
				loading     : false,
				error       : null
			};

		case 'SIGN_OUT_SUCCESS':
			return {
				...state,
				currentUser : null,
				loading     : false,
				error       : null
			};

		case 'SIGN_IN_FAILURE':
		case 'SIGN_UP_FAILURE':
			return {
				...state,
				loading : false,
				error   : action.payload
			};

		default:
			return state;
	}
};
