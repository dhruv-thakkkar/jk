import React, { useState, useEffect } from "react";
//import { useEffect } from 'react'
import axios from "axios";
const Login = () => {
  const ErrMsg = "";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const submitForm = (e) => {
    window.scrollTo(0, 150);
    e.preventDefault();
    const newEntry = { email: email, password: password };
    axios.defaults.withCredentials = true;
    var url = "http://127.0.0.1:3000/api/v1/auth/login";
    axios
      .post(url, newEntry)
      .then((response) => console.log("111111111111", response.data.data))
      .catch((error) => {
        setErrors(error.response.data.data);
      });
  };

  return (
    <div>
      <section className="login-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="login-box">
                <div className="login-top">
                  <h3 className="text-center">Enter your login credentials.</h3>
                  {/* <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p> */}
                  {errors.length <= 0
                    ? null
                    : errors.map((answer, i) => {
                        return <div className="mt-3"> <div className="alert alert-danger text-center">{answer.msg}</div></div>;
                      })}
                </div>
                <form action="" onSubmit={submitForm} className="login-form">
                  <div className="row">
                    <div className="col-md-12 email">
                      <label>Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email here"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="col-md-12 password">
                      <label>Password</label>
                      <input
                        defaultValue={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                    </div>
                    <div className="col-md-12 d-flex justify-content-between">
                      <div className="chqbox">
                        <input type="checkbox" name="rememberme" id="rmme" />
                        <label htmlFor="rmme">Remember Me</label>
                      </div>
                      <div className="forget-btn">
                        <a href="#">Forget Password?</a>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <button type="submit" name="button">
                        Sign In
                      </button>
                    </div>
                  </div>
                </form>
                <div className="login-btm text-center">
                  <p>or sign in with</p>
                  <ul className="list-unstyled list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-google"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
