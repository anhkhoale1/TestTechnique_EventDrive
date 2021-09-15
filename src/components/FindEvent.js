import React, { useState, useEffect, useRef } from "react";
import * as api from "./api";

function EventList() {
  const [id, setId] = useState("");
  const [event, setEvent] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const findEvent = async () => {
    try {
      let eventById = await api.getEventById(id);
      let dateFormatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      let item = (
        <div>
          <div className="name">
            {eventById.name[eventById.available_locales[0]]}
          </div>
          <div className="beginDate">
            {dateFormatter.format(new Date(eventById.start_date))}
          </div>
          <div className="endDate">
            {dateFormatter.format(new Date(eventById.end_date))}
          </div>
        </div>
      );
      setEvent(item);
    } catch (err) {
      window.alert(err.message);
    }
  };

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <h1>Find event</h1>
      <form>
        <label>
          <input
            type="number"
            placeholder="Find event by Id"
            value={id}
            className="event-input"
            onChange={handleChange}
            ref={inputRef}
          />
        </label>
      </form>
      <button onClick={findEvent}>Find Event</button>
      <div>{event}</div>
    </>
  );
}

export default EventList;
