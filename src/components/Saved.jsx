import "./Saved.scss";
import { Tabs, Title } from "@mantine/core";
import { apiGetOrganizedEvents } from "../api/endpoints";
import { useEffect, useState } from "react";
import EventCard from "./EventCard";
import { PrimaryColor } from "./colors";

export default function Saved() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const _events = await apiGetOrganizedEvents();
    console.debug(_events);
    setEvents(_events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div id="Saved">
      <div id="header">
        <Title order={2}>Saved</Title>
        <Tabs
          color={PrimaryColor}
          variant="pills"
          radius="xl"
          defaultValue="saved"
          id="tabs-bar"
        >
          <Tabs.List>
            <Tabs.Tab value="saved">Saved</Tabs.Tab>
            <Tabs.Tab value="organized">Organized</Tabs.Tab>
          </Tabs.List>
        </Tabs>
      </div>
      <div id="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
