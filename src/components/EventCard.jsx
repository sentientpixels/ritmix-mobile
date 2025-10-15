import {
  IconBookmark,
  IconClockHour10,
  IconMapPin,
  IconUserPentagon,
} from "@tabler/icons-react";
import "./EventCard.scss";
import { Pill, Text, Title } from "@mantine/core";

function CardDetail({ icon, detailValue }) {
  return (
    <div className="card-detail">
      <div className="icon-div">{icon}</div>
      <Text className="detail-value" size="sm">{detailValue}</Text>
    </div>
  );
}

function SkillPills({ skill_levels, className }) {
  return (
    <div className={["SkillPills", className].join(" ")}>
      {skill_levels.map((skill_level) => (
        <Pill key={skill_level}>{skill_level}</Pill>
      ))}
    </div>
  );
}

export default function EventCard({ event }) {
  const posterStyle = {
    backgroundImage: `url(${event.poster})`,
  };

  return (
    <div className="EventCard">
      <div className="event-poster" style={posterStyle}></div>
      <div className="event-details">
        <Title order={3}>{event.name}</Title>
        <CardDetail
          icon={<IconUserPentagon stroke={2} />}
          detailValue={event.organiser}
        />
        <CardDetail
          icon={<IconMapPin stroke={2} />}
          detailValue={event.location}
        />
        <CardDetail
          icon={<IconClockHour10 stroke={2} />}
          detailValue={event.time}
        />
        <SkillPills skill_levels={event.skill_levels} />
      </div>
      <div className="buttons">
        <button className="bookmark-button">
          <IconBookmark />
        </button>
      </div>
    </div>
  );
}
