import React from 'react'
import '../Css/HomePage.css'
import { useHistory } from 'react-router-dom'

function HomePage() {
    let history = useHistory()
    const loginClick = () => {
        history.push('/feed')
    }

    const signupClick = () => {
        history.push('/feed')
    }

    return (
        <div>
            <section className="main-page">
                {/* left */}
                <div className="left">
                    <div className="left-content">
                        <div>
                            <i className="fas fa-search" />
                            <h3 className="left-content-heading">Find Only your interests</h3>
                        </div>
                        <div>
                            <i className="fas fa-user-friends" />
                            <h3 className="left-content-heading">
                                Explore what people are talking about
              </h3>
                        </div>
                        <div>
                            <i className="fas fa-comment" />
                            <h3 className="left-content-heading">Join the people</h3>
                        </div>
                    </div>
                </div>
                {/* end of left */}
                {/* right */}
                <div className="right">
                    <div className="right-content">

                        <div className="middle-content">
                            <i class="fab fa-twitter"></i>                            <h1>See what's happening in the world right now</h1>
                            <h4>Join twitter today</h4>
                            <button onClick={signupClick} type="button" className="sign-up">Sign Up</button>
                            <button onClick={loginClick} type="button" className="log-in">Log In</button>
                        </div>
                    </div>
                </div>
                {/* end of right */}
                {/* footer */}
                <footer style={{ marginBottom: "-20px" }} className="main-page-footer">
                    <ul>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/">Help</a></li>
                        <li><a href="/">Terms</a></li>
                        <li><a href="/">Apps</a></li>
                        <li><a href="/">Settings</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Status</a></li>
                        <li><a href="/">Privacy Policy</a></li>
                        <li><a href="/">Brand</a></li>
                        <li><a href="/">Developers</a></li>
                        <li><a href="/">© 2020 Twtter</a></li>
                    </ul>
                </footer>
                {/* end of footer */}
            </section>
        </div >
    )
}

export default HomePage
