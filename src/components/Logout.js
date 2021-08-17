import { useEffect } from "react";
import { useHistory } from "react-router";

export default function Logout(props) {
  const history = useHistory();

  useEffect(() => {
    if (!props.login) {
      history.push("/login");
    } else {
      const logout = async () => {
        try {
          await fetch("http://localhost:5000/signout", {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include",
          });

          props.setLogin(false);
          history.push("/login", { replace: true });
        } catch (err) {
          console.log(err);
        }
      };

      logout();
    }
  });
  return <div></div>;
}
