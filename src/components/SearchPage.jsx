import { Title } from "@mantine/core";
import "./SearchPage.scss";
import { IconEdit } from "@tabler/icons-react";
import EventCard from "./EventCard";
import { useEffect, useState } from "react";
import { apiGetEvents } from "../api/endpoints";

export default function SearchPage() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const _events = await apiGetEvents();
    setEvents(_events);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div id="SearchPage">
      <div id="header">
        <Title order={2} id="filter-text">
          <span>All events</span> near <span>Toronto, ON.</span>
        </Title>
        <button id="filter-button">
          <IconEdit />
        </button>
      </div>
      <div id="event-list">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}
