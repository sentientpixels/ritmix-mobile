import {
  fakeConnections,
  fakeEventDetails,
  fakeEvents,
  fakeOrganizedEvents,
} from "./fakeData";

export async function apiGetEvents() {
  return Promise.resolve(fakeEvents);
}

export async function apiGetOrganizedEvents() {
  return Promise.resolve(fakeOrganizedEvents);
}

export async function apiGetConnections() {
  return Promise.resolve(fakeConnections);
}

export async function apiGetEventDetails() {
  return Promise.resolve(fakeEventDetails);
}
