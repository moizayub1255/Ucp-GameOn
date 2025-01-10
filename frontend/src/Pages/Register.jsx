import React from "react";
import Headandfoot from "../Layout/Headandfoot";
import "../Styles/Login.css";

const Register = () => {
  return (
    <Headandfoot>
      <div className="register-page">
        <div className="register-container">
          <div className="register-form">
            <h3 className="text-center mb-4">Register</h3>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Username"
                  required
                />
              </div>

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

              <div className="d-flex justify-content-center">
                <button type="button" className="btn btn-dark">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Headandfoot>
  );
};

export default Register;
