import React from "react";
import { useHistory } from "react-router-dom";

export default function Register() {
  const history = useHistory();

  return (
    <div className="generateForm login">
      <p>{"{ Sign-Up }"}</p>
      <form>
        <p
          style={{
            padding: "0",
            fontSize: "1rem",
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
          }}
          onClick={() => history.goBack()}
        >
          ⇐ click to go back
        </p>

        <div className="b-border">
          <input type="text" placeholder="First Name" name="fname" />
        </div>

        <div className="b-border">
          <input type="text" placeholder="Last Name" name="lname" />
        </div>

        <div className="b-border">
          <input type="text" placeholder="E-mail" name="email" />
        </div>

        <div className="b-border">
          <input type="password" placeholder="Password" name="password" />
        </div>

        <div className="b-border">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
          />
        </div>

        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
}
