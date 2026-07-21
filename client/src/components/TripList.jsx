import { useEffect } from "react";
import { useState } from "react";

function TripList() {
        const [trips, setTrips] = useState([]);
        const [loading, setLoading] = useState (true);
        const [error, setError] = useState(null);


        useEffect(() => {
            fetch('http://localhost:5000/api/trips')
            .then((res)=>{
               return res.json();
            })
            .then((data)=>{
                    setTrips(data);
                    setLoading(false);
            }).catch((err)=>{
                setError(err.message);
                setLoading(false);
            })
        }, []);

        if (loading) return <p>Loading...</p>
        if (error) return <p>Error: {error}</p>

        return(
            <ul>
                {trips.map((trip) => (
                    <li key={trip._id}>
                        {trip.title} - {trip.destination}
                    </li>
                 ))}
            </ul>
        )
}

export default TripList;