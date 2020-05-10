import React from 'react'
import '../Css/NewsFeed.css'

function Tweets({ feed }) {

    console.log(feed)
    const { text, user, entities, extended_entities } = feed;

    // const { media } = entities

    return (
        <div className="post">
            <div className="user-avatar">
                <img alt="" src={user.profile_image_url_https} />
            </div>
            <div className="post-content">
                <div className="post-user-info">
                    <h4 style={{ fontWeight: 'bolder' }}>{user.name} <i className="fas fa-check-circle" /></h4>

                    <span>{user.screen_name}</span>
                </div>
                <p className="post-text">
                    {text}
                </p>
                {extended_entities ? <div className="post-img">
                    <img alt="" src={extended_entities.media['0'].media_url_https} />
                </div> : null}

                <div className="post-icons">
                    <i className="far fa-comment" />
                    <i className="fas fa-retweet" />
                    <i className="far fa-heart" />
                    <i className="fas fa-share-alt" />
                </div>
            </div>
        </div>

    )
}

export default Tweets
