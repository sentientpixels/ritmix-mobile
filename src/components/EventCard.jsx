import {
  IconBookmark,
  IconClockHour10,
  IconMapPin,
  IconMoodCheck,
  IconMusic,
  IconUserPentagon,
} from "@tabler/icons-react";
import "./EventCard.scss";
import { Badge, Pill, Text, Title } from "@mantine/core";
import { useLocation } from "wouter";

function CardDetail({ icon, detailValue, className }) {
  return (
    <div className={["card-detail", className].join(" ")}>
      <div className="icon-div">{icon}</div>
      <Text className="detail-value" size="sm">
        {detailValue}
      </Text>
    </div>
  );
}

function PillList({ pillItems, className, icon, pillColor }) {
  return (
    <div className={["SkillPills", className].join(" ")}>
      <div className="icon-div">{icon}</div>
      <div className="badges">
        {pillItems?.map((skill_level) => (
          <Badge key={skill_level} color={pillColor}>
            {skill_level}
          </Badge>
        ))}
      </div>
    </div>
  );
}

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
      <CardDetail
        icon={<IconUserPentagon />}
        detailValue={event.organiser}
        className="organiser"
      />
      <div className="event-poster" style={posterStyle}></div>
      <div className="event-details">
        <Title order={3}>{event.name}</Title>
        <CardDetail icon={<IconMapPin />} detailValue={event.city} />
        <CardDetail icon={<IconClockHour10 />} detailValue={event.time} />
        <div className="buttons">
          <button className="ritmix-button event-button">
            <IconBookmark size={16} />
            <Text size="xs">Save</Text>
          </button>
          <button className="ritmix-button event-button" onClick={goToEventDetails}>
            <IconBookmark size={16} />
            <Text size="xs">View</Text>
          </button>
        </div>
      </div>
      <div className="pills-div">
        <PillList
          pillItems={event.skill_levels}
          icon={<IconMoodCheck />}
          // pillColor="rgba(176, 99, 99, 0.3)"
          pillColor="rgba(255, 255, 255, 0.1)"
          className="skill-levels"
        />
        <PillList
          pillItems={event.dances}
          icon={<IconMusic />}
          // pillColor="rgba(99, 157, 176, 0.3)"
          pillColor="rgba(255, 255, 255, 0.1)"
          className="dances"
        />
      </div>
    </div>
  );
}
