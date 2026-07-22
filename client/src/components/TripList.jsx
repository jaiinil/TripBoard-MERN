
function TripList({ trips }) {
  return (
    <ul>
      {trips.map((trip) => (
        <li key={trip._id}>
          {trip.title} — {trip.destination}
        </li>
      ))}
    </ul>
  );
}

export default TripList;