import React, { useState } from "react";
import * as api from "./api";

function DeleteEvent() {
  const [id, setId] = useState("");

  const deleteEvent = async () => {
    try {
      let deletedEvent = await api.deleteEvent(id);
      window.alert("Event [id=" + deletedEvent.id + "] is deleted");
    } catch (err) {
      window.alert(err.message);
    }
  };
  const handleId = (e) => {
    setId(e.target.value);
  };

  return (
    <>
      <h1>Welcome to delete event</h1>
      <form className="form">
        <label>
          <input
            type="number"
            value={id}
            className="event-input"
            onChange={handleId}
          />
        </label>
      </form>
      <button onClick={deleteEvent}>
        Add
      </button>
    </>
  );
}

export default DeleteEvent;
