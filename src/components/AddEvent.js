import React, { useState } from "react";
import * as api from "./api";

function AddEvent() {
  const [name, setName] = useState("");
  const [beginDate, setBeginDate] = useState({});
  const [endDate, setEndDate] = useState({});

  const addEvent = async () => {
    try {
      let addedEvent = await api.addEvent(name, beginDate, endDate);
      window.alert("Event " + name + " added [id=" + addedEvent.id + "]");
    } catch (err) {
      window.alert(err.message);
    }
  };

  const handleEndDate = (e) => {
    setEndDate(e.target.value);
  };

  const handleBeginDate = (e) => {
    setBeginDate(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Welcome to add event</h1>
      <form className="form">
        <label>
          <input
            type="text"
            placeholder="Name"
            value={name}
            className="event-input"
            onChange={handleNameChange}
          />
          <input
            type="date"
            value={beginDate}
            className="event-input"
            onChange={handleBeginDate}
          />
          <input
            type="date"
            value={endDate}
            className="event-input"
            onChange={handleEndDate}
          />
        </label>
      </form>
      <button onClick={addEvent}>
        Add
      </button>
    </>
  );
}

export default AddEvent;
