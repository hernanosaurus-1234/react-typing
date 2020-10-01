import { useContext } from 'react';
import { Context } from '../provider';
import { auth, firestore } from '../../firebase/firebase.util';

export const useUserState = () => {
	const [ state, dispatch ] = useContext(Context);

	const currentUser = state.user.currentUser;
	const email = state.user.email;
	const displayName = state.user.displayName;
	const loading = state.user.loading;

	const handleSignIn = ({ email, password }) => {
		// shows the loader
		handleLoading(true);

		// signs in
		auth
			.signInWithEmailAndPassword(email, password)
			.then((user) => {
				// once signed-in gets the user details and sets it to state.
				firestore
					.collection('users')
					.where('email', '==', user.user.email)
					.get()
					.then(function(querySnapshot) {
						querySnapshot.forEach(function(doc) {
							// gets the displayName
							const displayName = doc.data().displayName;
							// assigns the user and displayName
							dispatch({ type: 'SIGN_IN_SUCCESS', payload: { user, displayName } });
						});
					})
					.catch(function(error) {
						alert(error.message);
						dispatch({ type: 'SIGN_IN_FAILURE', payload: error.message });
					});
			})
			.catch((error) => {
				// return the error message when signing in
				alert(error.message);
				dispatch({ type: 'SIGN_IN_FAILURE', payload: error.message });
			});
	};

	const handleSignUp = ({ email, password, displayName }) => {
		// shows the loader
		handleLoading(true);

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				firestore
					.collection('users')
					.add({
						email       : email,
						displayName : displayName
					})
					.then(() => {
						dispatch({ type: 'SIGN_IN_SUCCESS', payload: { user, displayName } });
					});
			})
			.catch((error) => {
				// return the error message when signing in
				alert(error.message);
				dispatch({ type: 'SIGN_UP_FAILURE', payload: error.message });
			});
	};

	const handleSignOut = () => {
		// shows the loader
		handleLoading(true);

		dispatch({ type: 'SIGN_OUT_SUCCESS' });
	};

	const handleLoading = (payload) => {
		dispatch({ type: 'IS_LOADING', payload: payload });
	};

	return {
		state         : { currentUser, loading, email, displayName },
		handleLoading,
		handleSignIn,
		handleSignUp,
		handleSignOut
	};
};
