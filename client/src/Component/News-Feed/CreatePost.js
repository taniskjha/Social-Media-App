import React from 'react'
import '../Css/NewsFeed.css'
function Post() {
    return (
        <div className="feeds-header">
            <div className="header-top">
                <h4 style={{ fontWeight: "bold" }}>Home</h4>
                <i className="far fa-star" />
            </div>
            <div className="header-post">
                <div className="header-img-wrapper">
                    <img alt="" src="https://www.vippng.com/png/detail/202-2026524_person-icon-default-user-icon-png.png" />
                </div>
                <input type="text" placeholder="What's happening?" />
                <i className="far fa-image" />
                <i className="fas fa-camera" />
                <i className="far fa-chart-bar" />
            </div>
        </div>
    )
}

export default Post
