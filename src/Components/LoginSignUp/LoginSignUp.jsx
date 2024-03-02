// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import user_icon from "../Assets/person.png";
import "./LoginSignUp.css";

const LoginSignUp = () => {
  const [action, setAction] = useState("Sign Up");

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
      </div>

      <div className="inputs">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={user_icon} />
            <input
              type="text"
              name="name"
              id="nameId"
              placeholder="Enter Your Name"
            />
          </div>
        )}

        <div className="input">
          <img src={email_icon} />
          <input
            type="email"
            name="email"
            id="emailId"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="input">
          <img src={password_icon} />
          <input
            type="password"
            name="password"
            id="passwordId"
            placeholder="Enter Your Password"
          />
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forget-password">
            Lost Password? <span>Click Here</span>
          </div>
        )}

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
