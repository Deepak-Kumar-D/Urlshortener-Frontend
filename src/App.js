import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import UrlShortener from "./components/UrlShortener";
import URLs from "./components/URLs";
import Verify from "./components/Verify";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";
import Footer from "./components/Footer";

function App() {
  const [login, setLogin] = useState(false);
  const [url, setUrl] = useState("");
  const [urlData, setUrlData] = useState([]);

  // Fetching the url data on page load and on data update
  const Data = async () => {
    const obj = await fetch("https://db-urlshortener.herokuapp.com/getUrl", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/JSON",
      },
      credentials: "include",
    });

    const data = await obj.json();
    setUrlData(data);
  };

  // Function to create and post the short and long urls to the  db
  const handleSubmit = async (event) => {
    event.preventDefault();
    const obj = await fetch("https://db-urlshortener.herokuapp.com/shorturl", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ longUrl: url }),
    });

    if (obj.status === 401) {
      alert(obj.error);
    } else {
      setUrl("");
      alert("Your URL is Shortened!");
    }

    Data();
  };

  useEffect(() => {
    Data();
  });
  return (
    <div className="App">
      <img className="bgImg" src="/images/Triangle Pattern.png" alt="bgImg" />

      {/* Navigation Bar on top */}
      <Navbar login={login} />

      <Switch>
        {/* User Login */}
        <Route exact path="/">
          <Login setLogin={setLogin} />
        </Route>

        {/* User Registeration */}
        <Route path="/register">
          <Register />
        </Route>

        {/* Verify Router */}
        <Route path="/verify/:token">
          <Verify />
        </Route>

        {/* Forgot Password */}
        <Route path="/forgotpassword">
          <ForgotPassword />
        </Route>

        {/* Reset Password */}
        <Route path="/resetpassword/:token">
          <ResetPassword />
        </Route>

        {/* Generate URL Shortener Route */}
        <Route path="/urlshortener">
          <UrlShortener
            handleSubmit={handleSubmit}
            setUrl={setUrl}
            urlData={urlData}
            login={login}
          />
        </Route>

        {/* List of URLs generated */}
        <Route path="/urls">
          <URLs urlData={urlData} handleSubmit={handleSubmit} login={login} />
        </Route>

        {/* Logout */}
        <Route path="/logout">
          <Logout login={login} setLogin={setLogin} />
        </Route>
      </Switch>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
