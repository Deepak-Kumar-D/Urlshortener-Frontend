import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="generateForm login">
      <p>{"{ Sign-In }"}</p>
      <form>
        <input type="text" placeholder="E-mail" name="email" />

        <input type="text" placeholder="Password" name="password" />

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
