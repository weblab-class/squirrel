// import { get } from "../../utilities";

let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Here\'s an example full day event. You can also create timed events.',
    start: todayStr
  },
]

/*
get("/api/chat", {}).then((messages) => {
  export const INITIAL_EVENTS = messages;
});});
*/

export function createEventId() {
  return String(eventGuid++)
}
