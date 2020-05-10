import React, { useContext, useState, useEffect } from 'react'
import '../Css/Signin.css'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import AuthContext from '../Context/Authorization/authContext'
import AlertContext from '../Context/Alert/alertContext'
import Alerts from '../Extra/Alerts'


function Signin(props) {

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/feed');
        }

        if (error === 'Invalid Credentials') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const { email, password } = user;

    const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        if (email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }
    };


    return (
        <section className="login-page">
            {/* login page nav */}
            <nav className="login-page-nav">
                <ul>
                    <li className="brand">
                        <Link to="/"> Home </Link>
                    </li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Language: English</a></li>
                </ul>
            </nav>
            {/* end of login page nav */}
            {/* login */}
            <div className="login">


                <div className="login-content">
                    <h2> Log in to Twitter   <i style={{ color: '#37A1F5', }} class="fab fa-twitter"></i>   </h2>


                    <form onSubmit={onSubmit} className="login-form">

                        <input
                            type='email'
                            name='email'
                            value={email}
                            onChange={onChange}
                            required
                            placeholder="Phone, email, or username" />

                        <input
                            type='password'
                            name='password'
                            value={password}
                            onChange={onChange}
                            required
                            placeholder="Password" />
                        <div>

                            <button type="submit" value='login' className="login-form-btn">Log In</button>

                            <input type="checkbox" className="login-form-checkbox" id="check" />
                            <label htmlFor="check">Remember me</label>
                            <a href="/">Forgot password?</a>
                        </div>
                    </form>
                </div>
                <footer className="login-footer">
                    <div style={{ marginRight: '20px' }}> <Alerts /> </div>
                    <p>New to Twitter? <Link to="/register">Sign up now</Link></p>
                    {/* <p>
                        Already using Twirrer via text message?
              <a href="/">Activate your account</a>
                    </p> */}
                </footer>
            </div>
            {/* end of login */}
        </section>
    )
}

export default Signin
