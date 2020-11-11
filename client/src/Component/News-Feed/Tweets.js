import React, { useState } from 'react';
import '../Css/NewsFeed.css';

function Tweets({ feed }) {
	const [ heart, setHeart ] = useState(true);
	const [ retweet, setretweet ] = useState(true);

	const { text, user, entities, extended_entities } = feed;

	const handleHeartClick = () => {
		setHeart(!heart);
	};

	const handleRetweet = () => {
		setretweet(!retweet);
	};

	// const { media } = entities

	return (
		<div className="post">
			<div className="user-avatar">
				<img alt="" src={user.profile_image_url_https} />
			</div>
			<div className="post-content">
				<div className="post-user-info">
					<h4 style={{ fontWeight: 'bolder' }}>
						{user.name} <i className="fas fa-check-circle" />
					</h4>

					<span>{user.screen_name}</span>
				</div>
				<p className="post-text">{text}</p>
				{extended_entities ? (
					<div className="post-img">
						<img alt="" src={extended_entities.media['0'].media_url_https} />
					</div>
				) : null}

				<div className="post-icons">
					<i className="far fa-comment" />
					{/* <i className="fas fa-retweet" />  */}
					<svg
						onClick={handleRetweet}
						style={{ color: !retweet ? '#41A7F0' : '' }}
						xmlns="http://www.w3.org/2000/svg"
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<polyline points="17 1 21 5 17 9" />
						<path d="M3 11V9a4 4 0 0 1 4-4h14" />
						<polyline points="7 23 3 19 7 15" />
						<path d="M21 13v2a4 4 0 0 1-4 4H3" />
					</svg>
					<i onClick={handleHeartClick} className={heart ? 'far fa-heart  ' : 'fas fa-heart heart-bg'} />

					<i className="fas fa-share-alt" />
				</div>
			</div>
		</div>
	);
}

export default Tweets;
