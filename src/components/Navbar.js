import { Link } from "react-router-dom";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const [show, setShow] = useState(false);

  // const Toggle = () => {
  //   if (show === "") setShow("block");
  //   else setShow("");
  // };
  return (
    <div className="navbar">
      <div className="header">
        <h2>Url Shortener.</h2>

        <GiHamburgerMenu className="ham" onClick={() => setShow(!show)} />
      </div>

      <ul className={show ? "open" : "close"} onClick={() => setShow(!show)}>
        <li className={show ? "" : "r-border"}>
          <Link to="/urlshortener">Url Shortener</Link>
        </li>
        <li className={show ? "" : "r-border"}>
          <Link to="/urls">Url(s)</Link>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </div>
  );
}
