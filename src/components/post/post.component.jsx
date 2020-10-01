import React from 'react';

import { PostContainer, PlayerName, WordsPerMinute, DatePosted } from './post.styles';

function Post({ displayName, timestamp, wpm }) {
	return (
		<PostContainer>
			<PlayerName>
				Player Name: <span>{displayName}</span>
			</PlayerName>
			<WordsPerMinute>
				WPM: <span>{wpm}</span>
			</WordsPerMinute>
			<DatePosted>
				Date Posted: <span>{timestamp}</span>
			</DatePosted>
		</PostContainer>
	);
}

export default Post;
