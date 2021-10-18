import React from 'react';
import './Login.css';
import img from '../../images/undraw_Access_account_re_8spm.svg';
import img2 from '../../images/logo.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { googleLogin, githubLogin, users } = useAuth();
    console.log(users)
    return (
        <div className="container main">
            <div className="form">
                <div className="data-field">
                    <h2>E-GYM <img style={{ width: "30px", marginBottom: "5px" }} src={img2} alt="" /></h2>
                    <h5 style={{ color: "gray", marginBottom: "25px" }}>Login Your Account.</h5>
                    <input className="input-login rounded-pill" type="email" name="email" id="1" placeholder="Your Email" required />
                    <br />
                    <input className="input-login rounded-pill" type="password" name="password" id="2" placeholder="Your Password" required />
                    <br />
                    <button className="login-btn rounded-pill fw-bold" type="submit">Login</button>
                    <br />
                    <p style={{ marginLeft: "110px", fontWeight: "bold", color: "gray" }}>or Login With</p>
                    <div>
                        <button onClick={googleLogin} className="google-btn"><i className="fab fa-google"></i></button>
                        <button onClick={githubLogin} className="github-btn"><i className="fab fa-github"></i></button>
                    </div>
                    <br />
                    <p className="ms-4">Don't have any account? <NavLink to="/register" style={{ color: "#03D6B9", border: "none", backgroundColor: "white", textDecoration: "none" }}>Register here.</NavLink></p>
                </div>
                <div>
                    <img className="image" src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;