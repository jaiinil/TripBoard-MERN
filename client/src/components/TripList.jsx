
function TripList({ trips, onDelete }) {
  return (
    <ul>
      {trips.map((trip) => (
        <li key={trip._id}>
          {trip.title} — {trip.destination}
        <button onClick={() => onDelete(trip._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TripList;