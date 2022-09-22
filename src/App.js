import React, { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch(url);
      const realData = await response.json();
      setTours(realData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removeTour = (theID) => {
    const remainingTours = tours.filter((tour) => tour.id !== theID);
    setTours(remainingTours);
  };

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className="no-tours">
        <h1>No Tours Left</h1>

        <button onClick={fetchData} className="refresh-btn">
          refresh
        </button>
      </main>
    );
  }

  return (
    <main className="app">
      <Tours tourData={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
