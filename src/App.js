import "./App.css";
import { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import UrlShortener from "./components/UrlShortener";
import URLs from "./components/URLs";
import Verify from "./components/Verify";
import Footer from "./components/Footer";

function App() {
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
  }, []);
  return (
    <div className="App">
      <img className="bgImg" src="/images/Triangle Pattern.png" alt="bgImg" />

      {/* Navigation Bar on top */}
      <Navbar />

      <Switch>
        <Route exact path="/">
          <div className="home aligned">
            <h1>Welcome to URL Shortener</h1>
          </div>
        </Route>

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
          <URLs urlData={urlData} handleSubmit={handleSubmit} Data={Data} />
        </Route>

        {/* Logout */}
        <Route path="/logout">Logout</Route>

        {/* Verify Router */}
        <Route path="/verify/:token">
          <Verify />
        </Route>
      </Switch>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
