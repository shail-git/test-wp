import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import './login.css';

const VendorLogin = () => {
  return (
    <>
      <div className="wp-blue-bg">
        <div className="outter">
          <div className="boxed-content container">
            <div className="row">
              <div className="col-md-6">
                <form id="login">
                <br/>
                <h2>Login to your Vendor Account</h2>
                <br/>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <AccountCircleIcon/>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                <br/>
                  <div className="input-group form-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                      <VpnKeyIcon/>
                      </span>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                    />
                  </div>
                <br/>
                  <div className="row align-items-center remember">
                    <input type="checkbox" />
                    Remember Me
                    &nbsp;
                    &nbsp;
                    <a href='/'>Forgot Password?</a>
                  </div>
                <br/>
                <br/>

                  <div className="form-group">
                    <input
                      type="submit"
                      value="Login"
                      className="btn float-right login_btn"
                    />
                  </div>
                  <br/><br/>
                </form>
              </div>
              <div className="col-md-6 bbg" >
                <div className="blue-rd">
                <img src={require('./Login-bro.svg')} alt='loginbro' />
                </div>
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default VendorLogin;
