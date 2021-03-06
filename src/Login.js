import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  let width = window.outerWidth;
  const container = document.getElementsByName("container");

  const signUpActive = () => {
    container[0].classList.add("right-panel-active");
  };

  const signInActive = () => {
    container[0].classList.remove("right-panel-active");
  };

  const [In, setIn] = useState(true);

  if (width >= 543) {
    return (
      <div className="Li">
        <div className="container" name="container">
          <div className="form-container sign-in-container">
            <form action="#">
              <h1>Sign in</h1>
              <div className="social-container">
                <a href="!#" className="social">
                  <i class="icon-facebook"></i>
                </a>
                <a href="!#" className="social">
                  <i className="icon-google-plus"></i>
                </a>
                <a href="!#" className="social">
                  <i className="icon-twitter"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <a href="!#">Forgot your password?</a>
              <button>Sign In</button>
            </form>
          </div>
          <div className="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div className="social-container">
                <a href="!#" className="social">
                  <i class="icon-facebook"></i>
                </a>
                <a href="!#" className="social">
                  <i className="icon-google-plus"></i>
                </a>
                <a href="!#" className="social">
                  <i className="icon-twitter"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1 style={{ color: "#fefefe" }}>Welcome Back!</h1>
                <p>To be connected with us please login with your info</p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={() => signInActive()}
                >
                  Sign In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1 style={{ color: "#fefefe" }}>Hello, Friend!</h1>
                <p>Enter your personal details and start a journey with us</p>
                <button
                  className="ghost"
                  id="signUp"
                  onClick={() => signUpActive()}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    if (In) {
      return (
        <div className="Li">
          <div className="container">
            <div className="form-container sign-in-container">
              <form action="#">
                <h1>Sign in</h1>
                <div className="social-container">
                  <a href="!#" className="social">
                    <i class="icon-facebook"></i>
                  </a>
                  <a href="!#" className="social">
                    <i className="icon-google-plus"></i>
                  </a>
                  <a href="!#" className="social">
                    <i className="icon-twitter"></i>
                  </a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="!#">Forgot your password?</a>
                <br />
                <button>Sign In</button>
                <br />
                <button onClick={() => setIn(false)}>Sign Up &rarr;</button>
              </form>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="Li">
          <div className="container">
            <div className="form-container sign-up-container">
              <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                  <a href="!#" className="social">
                    <i class="icon-facebook"></i>
                  </a>
                  <a href="!#" className="social">
                    <i className="icon-google-plus"></i>
                  </a>
                  <a href="!#" className="social">
                    <i className="icon-twitter"></i>
                  </a>
                </div>
                <span>or use your email for registration</span>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button className="">Sign Up</button>
                <br />
                <button className="" onClick={() => setIn(true)}>
                  Sign In &rarr;
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
};

export default Login;
