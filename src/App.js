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
  const [url, setUrl] = useState();
  const [urlData, setUrlData] = useState([]);

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

  useEffect(() => {
    Data();
  });
  return (
    <div className="App">
      <img className="bgImg" src="/images/Triangle Pattern.png" alt="bgImg" />

      {/* Navigation Bar on top */}
      <Navbar login={login} />

      <Switch>
        <Route exact path="/">
          <div className="home aligned">
            <h1>Welcome to URL Shortener</h1>
          </div>
        </Route>

        {/* User Login */}
        <Route path="/login">
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
          <UrlShortener urlData={urlData} setUrl={setUrl} login={login} />
        </Route>

        {/* List of URLs generated */}
        <Route path="/urls">
          <URLs
            urlData={urlData}
            handleSubmit={handleSubmit}
            Data={Data}
            login={login}
          />
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
