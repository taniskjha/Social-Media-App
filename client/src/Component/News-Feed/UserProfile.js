import React from 'react'
// import '../Css/UserProfile.css'
import SideBar from './SideBar'

function UserProfile() {
    return (
        <div >

            <SideBar />

            <div className="main-container">

                <div className="row profile-background">
                    <div className="container">
                        <div className="avatar-container">
                            <div className="avatar">
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar profile-stats">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li className="profile-stats-item-active">
                                        <a>
                                            <span className="profile-stats-item profile-stats-item-label">Tweets</span>
                                            <span className="profile-stats-item profile-stats-item-number">51</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="profile-stats-item profile-stats-item-label">Following</span>
                                            <span className="profile-stats-item profile-stats-item-number">420</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="profile-stats-item profile-stats-item-label">Followers</span>
                                            <span className="profile-stats-item profile-stats-item-number">583</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <span className="profile-stats-item profile-stats-item-label">Likes</span>
                                            <span className="profile-stats-item profile-stats-item-number">241</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col">
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="container main-content">
                    <div className="row">
                        <div className="col profile-col">
                            {/* Left column */}
                            <div className="profile-header">
                                {/* Header information */}
                                <h3 className="profile-fullname"><a>Jon Vadillo</a><a /></h3><a>
                                </a><h2 className="profile-element"><a /><a>@jonvadillo</a></h2>
                                <a className="profile-element profile-website" hrerf><i className="octicon octicon-link" />&nbsp;jonvadillo.com</a>
                                <a className="profile-element profile-website" hrerf><i className="octicon octicon-location" />&nbsp;Vitoria-Gasteiz, Spain</a>
                                <h2 className="profile-element"><i className="octicon octicon-calendar" />Joined November 2012</h2>
                                <button className="btn btn-search-bar tweet-to-btn">Tweet to Jon Vadillo</button>
                                <a className="profile-element profile-website" hrerf><i className="octicon octicon-file-media" />1,142 Photos and videos</a>
                                <div className="pic-grid">
                                    {/* Image grid */}
                                    <div className="row">
                                        <div className="col pic-col"><img src="https://pbs.twimg.com/media/DFCq7iTXkAADXE-.jpg:thumb" height="73px" className /></div>
                                        <div className="col pic-col"><img src="https://pbs.twimg.com/media/DEoQ0vyXoBA1cwQ.png:thumb" height="73px" className /></div>
                                        <div className="col pic-col"><img src="https://pbs.twimg.com/media/DDVbW4RXsAAasuw.jpg:thumb" height="73px" className /></div>
                                    </div>
                                    {/* End: row */}
                                    <div className="row">
                                        <div className="col pic-col"><img src="https://pbs.twimg.com/media/DFCq7iTXkAADXE-.jpg:thumb" height="73px" className /></div>
                                        <div className="col pic-col"><img src="https://pbs.twimg.com/media/DEoQ0vyXoBA1cwQ.png:thumb" height="73px" className /></div>
                                        <div className="col pic-col"><img src="https://pbs.twimg.com/media/DDVbW4RXsAAasuw.jpg:thumb" height="73px" className /></div>
                                    </div>
                                    {/* End: row */}
                                </div>
                                {/* End: image grid */}
                            </div>
                        </div>
                        {/* End; Left column */}
                        {/* Center content column */}
                        <div className="col-6">
                            <ol className="tweet-list">
                                <li className="tweet-card">
                                    <div className="tweet-content">
                                        <div className="tweet-header">
                                            <span className="fullname">
                                                <strong>Jon Vadillo</strong>
                                            </span>
                                            <span className="username">@JonVadillo</span>
                                            <span className="tweet-time">- Jul 18</span>
                                        </div>
                                        <a>
                                            <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                        </a>
                                        <div className="tweet-text">
                                            <p className lang="es" data-aria-label-part={0}>¡Nuevo artículo en Mozilla!<br />Resuelto: Corregido – Una breve historia sobre un error reportado por la comunidad <a href="https://t.co/dqg5hVQXA0" className="twitter-timeline-link" target="_blank"><span className>https://www.mozilla-hispano.org/</span></a>                  <a href className="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href className="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                                                <a href className="twitter-hashtag" dir="ltr" />
                                            </p>
                                        </div>
                                        <div className="tweet-footer">
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-comment" aria-hidden="true" /><span> 18</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-sync" aria-hidden="true" /><span> 64</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-heart" aria-hidden="true" /><span> 202</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-mail" aria-hidden="true" /><span> 155</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="tweet-card">
                                    <div className="tweet-content">
                                        <div className="tweet-header">
                                            <span className="fullname">
                                                <strong>Jon Vadillo</strong>
                                            </span>
                                            <span className="username">@JonVadillo</span>
                                            <span className="tweet-time">- Jul 18</span>
                                        </div>
                                        <a>
                                            <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                        </a>
                                        <div className="tweet-text">
                                            <p className lang="es" data-aria-label-part={0}>¡Nuevo artículo en Mozilla!<br />Resuelto: Corregido – Una breve historia sobre un error reportado por la comunidad <a href="https://t.co/dqg5hVQXA0" className="twitter-timeline-link" target="_blank"><span className>https://www.mozilla-hispano.org/</span></a>                  <a href className="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href className="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                                                <a href className="twitter-hashtag" dir="ltr" />
                                            </p>
                                        </div>
                                        <div className="tweet-footer">
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-comment" aria-hidden="true" /><span> 18</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-sync" aria-hidden="true" /><span> 64</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-heart" aria-hidden="true" /><span> 202</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-mail" aria-hidden="true" /><span> 155</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="tweet-card">
                                    <div className="tweet-content">
                                        <div className="tweet-header">
                                            <span className="fullname">
                                                <strong>Jon Vadillo</strong>
                                            </span>
                                            <span className="username">@JonVadillo</span>
                                            <span className="tweet-time">- Jul 18</span>
                                        </div>
                                        <a>
                                            <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                        </a>
                                        <div className="tweet-text">
                                            <p className lang="es" data-aria-label-part={0}>¡Nuevo artículo en Mozilla!<br />Resuelto: Corregido – Una breve historia sobre un error reportado por la comunidad <a href="https://t.co/dqg5hVQXA0" className="twitter-timeline-link" target="_blank"><span className>https://www.mozilla-hispano.org/</span></a>                  <a href className="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href className="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                                                <a href className="twitter-hashtag" dir="ltr" />
                                            </p>
                                        </div>
                                        <div className="tweet-footer">
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-comment" aria-hidden="true" /><span> 18</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-sync" aria-hidden="true" /><span> 64</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-heart" aria-hidden="true" /><span> 202</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-mail" aria-hidden="true" /><span> 155</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="tweet-card">
                                    <div className="tweet-content">
                                        <div className="tweet-header">
                                            <span className="fullname">
                                                <strong>Jon Vadillo</strong>
                                            </span>
                                            <span className="username">@JonVadillo</span>
                                            <span className="tweet-time">- Jul 18</span>
                                        </div>
                                        <a>
                                            <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                        </a>
                                        <div className="tweet-text">
                                            <p className lang="es" data-aria-label-part={0}>¡Nuevo artículo en Mozilla!<br />Resuelto: Corregido – Una breve historia sobre un error reportado por la comunidad <a href="https://t.co/dqg5hVQXA0" className="twitter-timeline-link" target="_blank"><span className>https://www.mozilla-hispano.org/</span></a>                  <a href className="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href className="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                                                <a href className="twitter-hashtag" dir="ltr" />
                                            </p>
                                        </div>
                                        <div className="tweet-footer">
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-comment" aria-hidden="true" /><span> 18</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-sync" aria-hidden="true" /><span> 64</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-heart" aria-hidden="true" /><span> 202</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-mail" aria-hidden="true" /><span> 155</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                                <li className="tweet-card">
                                    <div className="tweet-content">
                                        <div className="tweet-header">
                                            <span className="fullname">
                                                <strong>Jon Vadillo</strong>
                                            </span>
                                            <span className="username">@JonVadillo</span>
                                            <span className="tweet-time">- Jul 18</span>
                                        </div>
                                        <a>
                                            <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                        </a>
                                        <div className="tweet-text">
                                            <p className lang="es" data-aria-label-part={0}>¡Nuevo artículo en Mozilla!<br />Resuelto: Corregido – Una breve historia sobre un error reportado por la comunidad <a href="https://t.co/dqg5hVQXA0" className="twitter-timeline-link" target="_blank"><span className>https://www.mozilla-hispano.org/</span></a>                  <a href className="twitter-hashtag"><s>#</s><b>firefox</b></a> <a href className="twitter-hashtag"><s>#</s><b>comunidad</b></a>
                                                <a href className="twitter-hashtag" dir="ltr" />
                                            </p>
                                        </div>
                                        <div className="tweet-footer">
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-comment" aria-hidden="true" /><span> 18</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-sync" aria-hidden="true" /><span> 64</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-heart" aria-hidden="true" /><span> 202</span>
                                            </a>
                                            <a className="tweet-footer-btn">
                                                <i className="octicon octicon-mail" aria-hidden="true" /><span> 155</span>
                                            </a>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                            {/* End: tweet list */}
                        </div>
                        {/* End: Center content column */}
                        <div className="col right-col">
                            <div className="content-panel">
                                <div className="panel-header">
                                    <h4>Who to follow</h4><small><a href>Refresh</a></small><small><a href>View all</a></small>
                                </div>
                                {/* Who to Follow panel */}
                                <div className="panel-content">
                                    {/*Follow list */}
                                    <ol className="tweet-list">
                                        <li className="tweet-card">
                                            <div className="tweet-content">
                                                <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                                <div className="tweet-header">
                                                    <span className="fullname">
                                                        <strong>Jon Vadillo</strong>
                                                    </span>
                                                    <span className="username">@JonVadillo</span>
                                                </div>
                                                <button className="btn btn-follow">Follow</button>
                                            </div>
                                        </li>
                                        <li className="tweet-card">
                                            <div className="tweet-content">
                                                <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                                <div className="tweet-header">
                                                    <span className="fullname">
                                                        <strong>Jon Vadillo</strong>
                                                    </span>
                                                    <span className="username">@JonVadillo</span>
                                                </div>
                                                <button className="btn btn-follow">Follow</button>
                                            </div>
                                        </li>
                                        <li className="tweet-card">
                                            <div className="tweet-content">
                                                <img className="tweet-card-avatar" src="https://pbs.twimg.com/profile_images/679974972278849537/bzzb-6H4_bigger.jpg" alt="" />
                                                <div className="tweet-header">
                                                    <span className="fullname">
                                                        <strong>Jon Vadillo</strong>
                                                    </span>
                                                    <span className="username">@JonVadillo</span>
                                                </div>
                                                <button className="btn btn-follow">Follow</button>
                                            </div>
                                        </li>
                                    </ol>
                                    {/*END: Follow list */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
