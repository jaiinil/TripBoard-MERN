import { useEffect } from "react";
import { useState } from "react";

function TripForm({onTripCreated}) {

    const [title, setTitle] = useState('');
    const [destination, setDestination] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [budget, setBudget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/trips', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, destination, startDate, endDate, budget: Number(budget) }),
        }).then((res) => res.json())
            .then(() => {
                setTitle('');
                setDestination('');
                setStartDate('');a
                setEndDate('');
                setBudget('');
                onTripCreated();

            })
    };

    


    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
            <input value={destination} onChange={(e) => setDestination(e.target.value)} placeholder="Destination" />
            <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
            <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="Budget" />
            <button type="submit">Add Trip</button>
        </form>
    )
}

export default TripForm;