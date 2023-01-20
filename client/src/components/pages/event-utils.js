
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'Here\'s an example full day event. You can also create timed events.',
    start: todayStr
  },
//   {
//     id: createEventId(),
//     title: 'Here\'s an example of a timed event.',
//     start: todayStr + 'T12:00:00'
//   }
]

export function createEventId() {
  return String(eventGuid++)
}
