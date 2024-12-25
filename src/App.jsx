import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Random User</h1>
      {user ? <Card user={user} /> : <p>Loading...</p>}
    </div>
  );
};

export default App;
