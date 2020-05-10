import React, { useContext, useEffect, useState } from 'react'
import '../Css/Signup.css'
import { Link } from 'react-router-dom'
import AuthContext from '../Context/Authorization/authContext'
import AlertContext from '../Context/Alert/alertContext'
import { useLocation } from 'react-router-dom'
import Alerts from '../Extra/Alerts'



function Signup(props) {
    const authContext = useContext(AuthContext)
    const alertContext = useContext(AlertContext)

    const { setAlert } = alertContext;
    const { register, error, isAuthenticated, clearErrors } = authContext;

    // let location = useLocation();
    // const { state } = location || { state: { pathname: '/' } }


    useEffect(() => {
        if (isAuthenticated) {
            props.history.push('/feed');
        }

        if (error === 'User already exists') {
            setAlert(error, 'danger');
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]);

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = user;

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(e.target.value)
    }



    const onSubmit = (e) => {
        e.preventDefault()

        console.log('Register Submitted')

        if (name === '' || email === '' || password === '') {
            setAlert("Oh snap, Fields Can't be empty", 'danger')
        } else if (password.length < 8) {
            setAlert('Oh snap, Password is less then 8 Characters', 'danger')
        } else {
            register({
                name,
                email,
                password
            });
        }
    }
    return (

        <section className="login-page">

            {/* login page nav */}
            <nav className="login-page-nav">

                <ul>
                    <li className="brand">
                        <Link to="/"> Home</Link>
                    </li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Language: English</a></li>
                </ul>
            </nav>

            {/* end of login page nav */}
            {/* login */}
            <div className="login">

                <div className="login-content">


                    <h2> Signup to Twitter   <i style={{ color: '#37A1F5', }} class="fab fa-twitter"></i>   </h2>


                    <form onSubmit={onSubmit} className="login-form">

                        <input
                            type="text"
                            name='name'
                            value={name}
                            onChange={onChange}
                            required
                            placeholder="Full Name" />

                        <input
                            type="email"
                            name='email'
                            value={email}
                            onChange={onChange}
                            required
                            placeholder="Phone or email" />

                        <input
                            type="password"
                            name='password'
                            value={password}
                            onChange={onChange}
                            required
                            placeholder="Password" />

                        <div>
                            <button type="submit" value="signup" className="login-form-btn">signup</button>

                            <input type="checkbox" className="login-form-checkbox" id="check" />
                            <label htmlFor="check">Remember me</label>
                            {/* <a href="/">Forgot password?</a> */}
                        </div>

                    </form>

                </div>
                <footer className="login-footer">
                    <div style={{ marginRight: '20px' }}> <Alerts /> </div>
                    <p>Already Registered? <Link to="/login">Log in now</Link></p>
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

export default Signup
