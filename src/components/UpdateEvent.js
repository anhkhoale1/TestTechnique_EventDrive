import React, { useState } from "react";
import * as api from "./api";

function UpdateEvent() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const updateEvent = async () => {
    try {
      let event = await api.updateEventName(id, name);
      window.alert("Event " + event.id + " updated !");
    } catch (err) {
      window.alert(err.message);
    }
  };

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1>Welcome to add event</h1>
      <form className="form">
        <label>
          <input
            type="number"
            placeholder="Id"
            value={id}
            className="event-input"
            onChange={handleId}
          />
          <input
            type="name"
            placeholder="Enter new name"
            value={name}
            className="event-input"
            onChange={handleName}
          />
        </label>
      </form>
      <button onClick={updateEvent}>
        Add
      </button>
    </>
  );
}

export default UpdateEvent;
