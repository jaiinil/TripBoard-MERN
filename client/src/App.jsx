import { useState, useEffect } from 'react';
import TripList from './components/TripList';
import TripForm from './components/TripForm';

function App() {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchTrips = () => {
    setLoading(true);
    fetch('http://localhost:5000/api/trips')
      .then((res) => res.json())
      .then((data) => {
        setTrips(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  return (
    <div>
      <h1>TripBoard</h1>
      <TripForm onTripCreated={fetchTrips} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && !error && <TripList trips={trips} />}
    </div>
  );
}

export default App;
