import React from 'react';
import './Register.css';
import img from '../../images/undraw_Access_account_re_8spm.svg';
import img2 from '../../images/logo.jpg';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { googleLogin, githubLogin, handleName, handleEmail, handlePassword, handleRegister } = useAuth();
    return (
        <div className="container main">
            <div className="form">
                <div className="data-field">
                    <h2>E-GYM <img style={{ width: "30px", marginBottom: "6px" }} src={img2} alt="" /></h2>
                    <h4>Create an account.</h4>
                    <h5 style={{ color: "gray", marginBottom: "25px" }}>Setup a new Account in a Minute.</h5>
                    <input onBlur={handleName} className="input-register rounded-pill" type="name" name="name" placeholder="Your Name" required />
                    <input onBlur={handleEmail} className="input-register rounded-pill" type="email" name="email" placeholder="Your Email" required />
                    <input onBlur={handlePassword} className="input-register rounded-pill" type="password" name="password" placeholder="Your Password" required />
                    <button onClick={handleRegister} className="register-btn rounded-pill fw-bold" type="submit">Register</button>
                    <br />
                    <p style={{ marginLeft: "110px", fontWeight: "bold", color: "gray" }}>or Register With</p>
                    <div>
                        <button onClick={googleLogin} className="google-btn"><i className="fab fa-google"></i></button>
                        <button onClick={githubLogin} className="github-btn"><i className="fab fa-github"></i></button>
                    </div>
                    <br />
                    <p className="ms-4">Already have an account? <NavLink to="/login" style={{ color: "#03D6B9", border: "none", backgroundColor: "white", textDecoration: "none" }}>Login here.</NavLink></p>
                </div>
                <div className="image-part">
                    <img className="image" src={img} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Register;