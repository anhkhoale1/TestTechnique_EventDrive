export class EventNotFoundException extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, EventNotFoundException)
    }
  }
}

export class FailCreateEvent extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FailCreateEvent)
    }
  }
}


export class FailAuthException extends Error {
  constructor(...params) {
    super(...params);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, FailAuthException)
    }
  }
}
