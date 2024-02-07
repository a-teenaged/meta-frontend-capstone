import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Assuming SubmitForm is a function passed via props
        props.SubmitForm(e);
    }

    const handleChange = (e) => {
        setDate(e.target.value);
        // If you intended to dispatch, do it through a Redux or context API
    }

    return (
        <header>
            <section>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div>
                            <label htmlFor="book-date">Choose Date</label>
                            <input id="book-date" value={date} onChange={handleChange} type="date" required />
                        </div>
                        <div>
                            <label htmlFor="book-time">Choose Time:</label>
                            <select id='book-time' value={times} onChange={(e) => setTimes(e.target.value)}>
                                <option value="">Select a Time</option>
                                {
                                    props.availableTimes.map(availableTime => (
                                        <option key={availableTime}>{availableTime}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div>
                            <label htmlFor="book-guests">Number of Guests:</label>
                            <input id='book-guests' min='1' value={guests} onChange={(e) => setGuests(e.target.value)} />
                        </div>

                        <div>
                            <label htmlFor="book-occasion">Occasion</label>
                            <select id='book-occasion' value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                                <option value="Birthday">Birthday</option>
                                <option value="Anniversary">Anniversary</option>
                            </select>
                            <div className="btnReceive">
                                <input aria-label="On Click" type="submit" value={"Make your Reservation"} />
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </header>
    );
};

export default BookingForm;
