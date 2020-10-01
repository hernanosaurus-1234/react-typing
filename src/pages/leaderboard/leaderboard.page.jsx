import React, { useEffect, useState } from 'react';

import { useHistory } from 'react-router-dom';
import { LeaderBoardContainer, Title, PostWrapper } from './leaderboard.styles';

import Post from '../../components/post/post.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { useUserState } from '../../provider/utils/user.util';
import { firestore } from '../../firebase/firebase.util';

function LeaderBoard() {
	let history = useHistory();

	const { handleLoading } = useUserState();

	const [ posts, setPosts ] = useState([]);

	useEffect(() => {
		firestore.collection('records').orderBy('wpm', 'desc').onSnapshot((snapshot) => {
			setPosts(
				snapshot.docs.map((doc) => ({
					id   : doc.id,
					data : doc.data()
				}))
			);
			handleLoading(false);
		});
	}, []);

	return (
		<LeaderBoardContainer>
			<Title>Leaderboard</Title>
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
		</LeaderBoardContainer>
	);
}

export default LeaderBoard;
