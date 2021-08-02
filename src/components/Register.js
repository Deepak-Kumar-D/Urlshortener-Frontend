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
            fontSize: "1.5rem",
            width: "100%",
            textAlign: "left",
            cursor: "pointer",
          }}
          onClick={() => history.goBack()}
        >
          Go Back
        </p>

        <input type="text" placeholder="First Name" name="fname" />

        <input type="text" placeholder="Last Name" name="lname" />

        <input type="text" placeholder="E-mail" name="email" />

        <input type="text" placeholder="Password" name="password" />

        <input
          type="text"
          placeholder="Confirm Password"
          name="confirmpassword"
        />

        <input type="submit" value="SignUp" />
      </form>
    </div>
  );
}
