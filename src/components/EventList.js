import React, { useState, useEffect, useRef } from "react";
import * as api from "./api";

function EventList() {
  const [events, setEvents] = useState("");

  const showEvents = async () => {
    try {
      let allEvents = await api.getAllEvents();
      let dateFormatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      let listItems = allEvents.map((es) => (
        <div className="container">
          <div className="name">
            {es.name[es.available_locales[0]] ? (
              <em>
                <strong> {es.name[es.available_locales[0]]}</strong>
              </em>
            ) : (
              "None"
            )}
          </div>
          <div className="beginDate">
            {dateFormatter.format(new Date(es.start_date))}
          </div>
          <div className="endDate">
            {dateFormatter.format(new Date(es.end_date))}
          </div>
        </div>
      ));
      setEvents(listItems);
    } catch (err) {
      window.alert(err.message);
    }
  };

  return (
    <>
      <h1>The event list</h1>
      <button onClick={showEvents}>Show all events</button>
      <div>{events}</div>
    </>
  );
}

export default EventList;
