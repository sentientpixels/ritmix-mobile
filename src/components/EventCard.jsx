import {
  IconActivity,
  IconBookmark,
  IconClockHour10,
  IconMapPin,
  IconMoodCheck,
  IconMusic,
  IconUserPentagon,
} from "@tabler/icons-react";
import "./EventCard.scss";
import { Text, Title } from "@mantine/core";
import { useLocation } from "wouter";
import EventDetailItem from "./EventDetailItem";
import PillList from "./PillList";

export default function EventCard({ event }) {
  const posterStyle = {
    backgroundImage: `url(${event.poster})`,
  };

  const [location, navigate] = useLocation();

  const goToEventDetails = () => {
    navigate("/event-details");
  };

  return (
    <div className="EventCard">
      <EventDetailItem
        icon={<IconUserPentagon />}
        detailValue={event.organiser}
        className="organiser"
      />
      <div className="event-poster" style={posterStyle}></div>
      <div className="event-details">
        <Title order={3}>{event.name}</Title>
        <EventDetailItem icon={<IconMapPin />} detailValue={event.city} />
        <EventDetailItem icon={<IconClockHour10 />} detailValue={event.time} />
        <div className="buttons">
          <button className="ritmix-button event-button">
            <IconBookmark size={16} />
            <Text size="xs">Save</Text>
          </button>
          <button
            className="ritmix-button event-button"
            onClick={goToEventDetails}
          >
            <IconBookmark size={16} />
            <Text size="xs">View</Text>
          </button>
        </div>
      </div>
      <div className="pills-div">
        <PillList
          pillItems={event.skill_levels}
          icon={<IconMoodCheck />}
          pillColor="rgba(255, 255, 255, 0.1)"
          className="skill-levels"
        />
        <PillList
          pillItems={event.dances}
          icon={<IconMusic />}
          pillColor="rgba(255, 255, 255, 0.1)"
          className="dances"
        />
        <PillList
          pillItems={["Group Class", "Social"]}
          icon={<IconActivity />}
          pillColor="rgba(255, 255, 255, 0.1)"
          className="dances"
        />
      </div>
    </div>
  );
}
