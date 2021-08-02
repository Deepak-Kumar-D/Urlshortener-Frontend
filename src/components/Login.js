import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

export default function Login() {
  return (
    <div className="generateForm login">
      <p>{"{ Sign-In }"}</p>
      <form>
        <div className="flex b-border">
          <FaUserAlt className="form-icon" />
          <input type="text" placeholder="E-mail" name="email" />
        </div>

        <div className="flex b-border">
          <RiLockPasswordFill className="form-icon" />
          <input type="password" placeholder="Password" name="password" />
        </div>

        <input type="submit" value="Generate" />

        <div className="newUser" style={{ width: "100%" }}>
          <Link to="forgotpassword" style={{ float: "right" }}>
            Forgot Password?
          </Link>
        </div>
      </form>

      {/* Register Link */}
      <div className="newUser">
        <Link to="/register">New User? Sign-Up!</Link>
      </div>
    </div>
  );
}
