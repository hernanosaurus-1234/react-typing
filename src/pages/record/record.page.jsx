import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { RecordContainer, Title, PostWrapper } from './record.styles';

import Post from '../../components/post/post.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { useUserState } from '../../provider/utils/user.util';
import { firestore } from '../../firebase/firebase.util';

function Record() {
	let history = useHistory();

	const { state: { currentUser }, handleLoading } = useUserState();

	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		if (currentUser) {
			firestore
				.collection('records')
				.where('email', '==', currentUser.user.email)
				.get()
				.then(function(querySnapshot) {
					setPosts(
						querySnapshot.docs.map((doc) => ({
							id   : doc.id,
							data : doc.data()
						}))
					);

					handleLoading(false);
				})
				.catch(function(error) {
					alert(error.message);
				});
		}
	}, []);

	return (
		<RecordContainer>
			<Title>My Record</Title>
			<PostWrapper>
				{posts.map((post) => (
					<Post
						key={post.id}
						displayName={post.data.displayName}
						timestamp={post.data.timestamp}
						wpm={post.data.wpm}
					/>
				))}
			</PostWrapper>

			<CustomButton
				onClick={() => {
					history.push('/');
				}}
			>
				Go Back
			</CustomButton>
		</RecordContainer>
	);
}

export default Record;
