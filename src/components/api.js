import axios from "axios";
import {
  FailAuthException,
  EventNotFoundException,
  FailCreateEvent,
} from "../exceptions.js";

const URL = "https://api.dev.eventdrive.com/public/v1";
const AUTH_URL = URL + "/token";
const EVENTS_URL = URL + "/events";
const AUTH_REQUEST_BODY = {
  client_id: 25,
  client_secret: "FgR7rnRi9AWe3Y0sgrQhLLJKEA0PQQJxdoyKqSxH",
};

export const getAllEvents = async () => {
  let header = await getRequestHeader();

  let ret = axios.get(EVENTS_URL, { headers: header }).then((response) => {
    return response.data.items;
  });
  return ret;
};

export const getEventById = async (id) => {
  let header = await getRequestHeader();

  let ret = axios
    .get(EVENTS_URL + `/${id}`, { headers: header })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new EventNotFoundException("Event id " + id + " not found", {
        cause: err,
      });
    });
  return ret;
};

export const addEvent = async (name, beginDate, endDate) => {
  let header = await getRequestHeader();
  let requestBody = {
    name: {
      fr: name,
    },
    main_manager_id: 5962,
    start_date: beginDate,
    end_date: endDate,
    default_locale: "fr",
    available_locales: ["fr"],
  };
  let ret = axios
    .post(EVENTS_URL, requestBody, { headers: header })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new FailCreateEvent("Fail to create event " + name, { cause: err });
    });
  return ret;
};

export const deleteEvent = async (id) => {
  let header = await getRequestHeader();

  let ret = axios
    .delete(EVENTS_URL + `/${id}`, { headers: header })
    .then((response) => {
      return true;
    })
    .catch((err) => {
      throw new EventNotFoundException("Event id " + id + " not found", {
        cause: err,
      });
    });
  return ret;
};

export const updateEventName = async (id, name) => {
  let header = await getRequestHeader();
  let requestBody = {
    name: {
      fr: name,
    },
    default_locale: "fr",
    available_locales: ["fr"],
  };
  let ret = axios
    .put(EVENTS_URL + `/${id}`, requestBody, { headers: header })
    .then((response) => {
      return response.data;
    })
    .catch((err) => {
      throw new FailCreateEvent("Fail to change event name " + name, {
        cause: err,
      });
    });
  return ret;
};

const getTokenAccess = async () => {
  return axios
    .post(AUTH_URL, AUTH_REQUEST_BODY)
    .then((res) => {
      return { tokenType : res.data.token_type, accessToken : res.data.access_token }
    })
    .catch((err) => {
      throw new FailAuthException("Cannot get token", { cause: err });
    });
};

const getRequestHeader = async () => {
  let token = await getTokenAccess();
  return { Authorization: token.tokenType + " " + token.accessToken };
};
