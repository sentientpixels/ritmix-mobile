import { fakeEvents } from "./fakeData";

export async function apiGetEvents() {
  return Promise.resolve(fakeEvents);
}
