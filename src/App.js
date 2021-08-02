import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import Login from "./components/Login";
import Register from "./components/Register";
import UrlShortener from "./components/UrlShortener";
import URLs from "./components/URLs";
import Footer from "./components/Footer";

function App() {
  const [url, setUrl] = useState();
  const [urlData, setUrlData] = useState([]);
  const [show, setShow] = useState("");

  // Fetching the url data on page load and on data update
  const Data = async () => {
    const obj = await fetch("http://localhost:5000/getUrl", {
      method: "GET",
      headers: {
        "Content-Type": "application/JSON",
      },
    });

    const data = await obj.json();
    setUrlData(data);
  };

  // Function to create and post the short and long urls to the  db
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:5000/shorturl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl: url }),
    });

    setUrl("");
    Data();
  };

  const Toggle = () => {
    if (show === "") setShow("block");
    else setShow("");
  };

  useEffect(() => {
    Data();
  }, []);
  return (
    <div className="App">
      <img className="bgImg" src="/images/Triangle Pattern.png" alt="bgImg" />
      {/* Navigation Bar on top */}
      <div className="navbar">
        <div className="header">
          <h2>Url Shortener</h2>

          <GiHamburgerMenu className="ham" onClick={() => Toggle()} />
        </div>

        <ul style={{ display: show }}>
          <li>
            <Link to="/urlshortener">Url Shortener</Link>
          </li>
          <li>
            <Link to="/urls">Url(s)</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        {/* Generate URL Shortener Route */}
        <Route path="/urlshortener">
          <UrlShortener urlData={urlData} setUrl={setUrl} />
        </Route>

        {/* List of URLs generated */}
        <Route path="/urls">
          <URLs urlData={urlData} handleSubmit={handleSubmit} />
        </Route>

        {/* Logout */}
        <Route path="/logout">Logout</Route>
      </Switch>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
