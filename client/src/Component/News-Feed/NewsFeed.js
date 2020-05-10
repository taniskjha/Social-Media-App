import React, { useState, useEffect, useContext, Fragment } from 'react'
import '../Css/NewsFeed.css'
import WhoToFollow from './WhoToFollow'
import CreatePost from './CreatePost'
import Tweets from './Tweets'
// import SideBar from './SideBar'
import axios from 'axios'
import { token } from '../Config/Token'
import shortid from 'shortid'
import Loading from '../Extra/Loading'
import { Link } from 'react-router-dom'
import ProfileBar from './ProfileBar'
import AuthContext from '../Context/Authorization/authContext'
import authContext from '../Context/Authorization/authContext'

import { ThemeProvider, createGlobalStyle } from 'styled-components'
import storage from 'local-storage-fallback'
import '../Css/DarkMode.css'

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${props => props.theme.mode === 'dark' ? '#15202B ' : 'white'};
  color: ${props => props.theme.mode === 'dark' ? 'white' : '#15202B'};
}`;

const getInitalTheme = () => {
    const savedTheme = storage.getItem('theme')
    return savedTheme ? JSON.parse(savedTheme) : { mode: 'light' }
}


// Function Newsfeed Starts here 

function NewsFeed() {
    const authContext = useContext(AuthContext)
    const { logout, user } = authContext

    const Okaylogout = () => {
        logout();
    }

    // Dark Mode logic
    const [theme, settheme] = useState(getInitalTheme)

    const DarkClick = () => {
        settheme(theme.mode == 'dark' ? { mode: 'light' } : { mode: 'dark' })
    }

    useEffect(() => {
        storage.setItem('theme', JSON.stringify(theme))
    }, [theme])


    const [feeds, setfeeds] = useState([])
    const [query, setQuery] = useState('')

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = `https://api.twitter.com/1.1/search/tweets.json?q=%23${query ? query : 'NewProfilePic'} exclude:replies exclude:retweets&count=200&result_type=recent`

    useEffect(() => {
        const getData = async () => {
            const res = await axios.get(proxyurl + url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            setfeeds(res.data.statuses)
        };
        getData()
    }, [url])


    const filterFeed = feeds.filter(feed => {
        if (!feed.text.startsWith('RT')) {
            return feed
        }
    })


    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <section className="feeds_page">
                {/* Navbar Starts here  */}


                <nav className="feeds-nav shadow-md">
                    <div class="icons">
                        <Link to="/" className="active"><i className="fas fa-home"></i> Home </Link>
                        <Link to="/" className="text-dark" ><i className="fas fa-hashtag"></i> Explore </Link>
                        <Link to="/" className="text-dark" ><i className="far fa-bell"></i> Notifications </Link>
                        <Link to="/" className="text-dark"><i className="far fa-envelope"></i> Messages </Link>
                    </div>

                    <div className="search-bar">
                        <i className="fas fa-search"></i>
                        <input onChange={e => setQuery(e.target.value)} type="text" placeholder="search twitter" className="search-bar-input"></input>
                    </div>



                    <div className="user dropdown"  >
                        <div className="user-img-wrapper">
                            {/* <i class="fas fa-user"></i> */}
                            <img alt="" src="https://www.vippng.com/png/detail/202-2026524_person-icon-default-user-icon-png.png" />
                        </div>
                        <Link to='/feed' data-toggle="dropdown" className="user-link dropdown-toggle" >{user && user.name.split(' ').slice(0, -1).join(' ')}</Link>

                        {/* 
                    <Link to="#!" class="dropdown-toggle" data-toggle="dropdown">
                        <i className="fas fa-chevron-down "></i>
                    </Link> */}

                        <ul className="dropdown-menu " role="menu" aria-labelledby="menu1">

                            <a onClick={Okaylogout}
                                style={{ backgroundColor: '#41A7F0', color: 'white', marginBottom: '10px' }} class="btn">Logout</a>

                            {/* <li > <label class="switch">
                                <input onClick={DarkClick} type="checkbox" />
                                <span class="slider round"></span>
                            </label>
                            </li> */}


                        </ul>


                    </div>
                </nav>

                {/* Navbar ends here */}
                <div className="feeds-content">
                    <CreatePost />
                    <div className="posts">
                        {filterFeed.length === 0 ? <Loading /> : filterFeed.map(feed => <Tweets key={shortid.generate()} feed={feed} />)}
                    </div>
                    <WhoToFollow />
                </div>

            </section >
        </ThemeProvider>
    )
}

export default NewsFeed
