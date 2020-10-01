import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey            : 'AIzaSyBewo3qgjX4o8FlmaF7WDkkWjbA0tYmf9w',
	authDomain        : 'react-typing-dc3d7.firebaseapp.com',
	databaseURL       : 'https://react-typing-dc3d7.firebaseio.com',
	projectId         : 'react-typing-dc3d7',
	storageBucket     : 'react-typing-dc3d7.appspot.com',
	messagingSenderId : '237791623951',
	appId             : '1:237791623951:web:6a0b7fcf171d964aa85c7a'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
