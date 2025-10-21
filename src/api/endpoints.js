import { fakeConnections, fakeEventDetails, fakeEvents } from "./fakeData";

export async function apiGetEvents() {
  return Promise.resolve(fakeEvents);
}

export async function apiGetConnections() {
  return Promise.resolve(fakeConnections);
}

export async function apiGetEventDetails(){
  return Promise.resolve(fakeEventDetails)
}
