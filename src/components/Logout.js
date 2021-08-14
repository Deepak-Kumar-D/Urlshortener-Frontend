import { useEffect } from "react";
import { useHistory } from "react-router";

export default function Logout({ setLogin }) {
  const history = useHistory();

  useEffect(() => {
    const logout = async () => {
      try {
        const obj = await fetch("http://localhost:5000/signout", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "COntent-Type": "application/json",
          },
          credentials: "include",
        });

        history.push("/login", { replace: true });
        setLogin(false);

        if (obj.status !== 200) {
          const error = new Error(obj.error);
          throw error;
        }
      } catch (err) {
        console.log(err);
      }
    };

    logout();
  }, [history, setLogin]);
  return <div></div>;
}
