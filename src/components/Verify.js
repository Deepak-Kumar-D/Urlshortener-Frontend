import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function Verify() {
  const { token } = useParams();
  const history = useHistory();

  const Verification = async () => {
    const obj = await fetch(
      `https://db-urlshortener.herokuapp.com/verify/${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/JSON",
        },
      }
    );

    const data = await obj.json();

    if (data.verified) {
      alert("Your account has been verified.\n Please login.");
      history.push("/");
    }
  };

  useEffect(() => {
    Verification();
  });
  return <div></div>;
}

export default Verify;
