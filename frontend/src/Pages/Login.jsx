import React from "react";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/register'); 
  };

  return (
    <Headandfoot>
  <div className="register-page">
        <div className="register-container">
          <div className="register-form">
            <h3 className="text-center mb-4">Login</h3>
            <form>
              

              <div className="mb-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>

              <div className="mb-4">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                  required
                />
              </div>

              <div className="d-flex justify-content-around gap-3">
                <button type="button" className="btn btn-dark">Login</button>
                <button type="button" className="btn btn-dark " onClick={handleSignUpClick }>Register</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </Headandfoot>
  );
};

export default Login;
