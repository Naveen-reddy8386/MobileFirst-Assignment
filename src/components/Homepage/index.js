import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

import "./index.css";

const Homepage = () => {
  const [jokes, setJokes] = useState([]);
  const [load, setLoad] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch jokes");
      }
      const data = await response.json();
      setJokes(data.jokes);
      setLoad((pre) => false);
    } catch (error) {
      console.error(error);
    }
  };

  const renderLoadingView = () => (
    <div className="products-loader-container">
      <Triangle color="#ffffff" height="50" />
    </div>
  );
  const logOut = () => {
    navigate("/");
  };

  return (
    <div className="bg-container">
      <h2>Jokes</h2>
      {load ? (
        renderLoadingView()
      ) : (
        <table className="table">
          <thead>
            <tr>
              {/* <th>Category</th>
            <th>Type</th> */}
              {/* <th>Joke</th> */}
            </tr>
          </thead>
          <tbody>
            {jokes.map((joke) => (
              <tr key={joke.id}>
                {/* <td>{joke.category}</td>
              <td>{joke.type}</td> */}
                <td className="data">{joke.joke}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className="logout" onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default Homepage;
