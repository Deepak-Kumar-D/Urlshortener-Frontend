import { useEffect } from "react";
import { useHistory } from "react-router";

export default function Logout(props) {
  const history = useHistory();

  useEffect(() => {
    if (!props.login) {
      history.push("/login");
    }

    const logout = async () => {
      try {
        const obj = await fetch("http://localhost:5000/signout", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        history.push("/login", { replace: true });
        props.setLogin(false);

        if (obj.status !== 200) {
          const error = new Error(obj.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };

    logout();
  });
  return <div></div>;
}
