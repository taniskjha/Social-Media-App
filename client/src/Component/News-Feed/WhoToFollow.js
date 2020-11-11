import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../Css/NewsFeed.css'


function Follow() {
const [followTanisk, setFollowTanisk] = useState(false)
const [followJoyce, setFollowJoyce] = useState(false)
const [followDan, setFollowDan] = useState(false)

    const handleFollowTanisk = () => {
        setFollowTanisk(!followTanisk)
    }

    const handleFollowJoyce = () => {
        setFollowJoyce(!followJoyce)
    }


    const handleFollowDan = () => {
        setFollowDan(!followDan)
    }
    return (

        <div className="follow">
            <h1 style={{ fontWeight: 'bolder' }} className="follow-heading">Who to follow</h1>

            <div className="follow-user">
                <div className="follow-user-img">
                    <img alt="" src="/images/tanisk.jpg" />
                </div>
                <div className="follow-user-info">
                    <h4>Tanisk jha</h4>
                    <p>@tanishkjha</p>
                </div>
                <button type="button" onClick={handleFollowTanisk}  className="follow-btn">{followTanisk ? 'Following' : 'Follow' }</button>
            </div>

            <div className="follow-user">
                <div className="follow-user-img">
                    <img alt="" src="/images/user2.jpg" />
                </div>
                <div className="follow-user-info">
                    <h4>Joyce</h4>
                    <p>@joycejoyce1024</p>
                </div>
                <button type="button" onClick={handleFollowJoyce} className="follow-btn">{followJoyce ? 'Following' : 'Follow' }</button>
            </div>

            <div className="follow-user">
                <div className="follow-user-img">
                    <img alt="" src="/images/user5.jpg" />
                </div>
                <div className="follow-user-info">
                    <h4>Dan white</h4>
                    <p>@roseblack</p>
                </div>
                <button type="button" onClick={handleFollowDan}  className="follow-btn">{followDan ? 'Following' : 'Follow' }</button>
            </div>

            <div className="follow-link">
                <Link to="/feed">Show More</Link>
            </div>

            <footer className="follow-footer">
                <ul>
                    <li><Link to="/feed">Terms</Link></li>
                    <li><Link to="/feed">Privacy Policy</Link></li>
                    <li><Link to="/feed">Cookies</Link></li>
                    <li><Link to="/feed">About</Link></li>
                    <li><Link to="/feed">More</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Follow
