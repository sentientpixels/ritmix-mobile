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

function CardDetail({ icon, detailValue }) {
  return (
    <div className="card-detail">
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

  return (
    <div className="EventCard">
      <div className="event-poster" style={posterStyle}></div>
      <div className="event-details">
        <Title order={3}>{event.name}</Title>
        <CardDetail icon={<IconUserPentagon />} detailValue={event.organiser} />
        <CardDetail icon={<IconMapPin />} detailValue={event.city} />
        <CardDetail icon={<IconClockHour10 />} detailValue={event.time} />
        <PillList
          pillItems={event.skill_levels}
          icon={<IconMoodCheck />}
          pillColor="rgba(176, 99, 99, 1)"
        />
        <PillList
          pillItems={event.dances}
          icon={<IconMusic />}
          pillColor="rgba(99, 157, 176, 1)"
        />
      </div>
      <div className="buttons">
        <button className="bookmark-button">
          <IconBookmark />
        </button>
      </div>
    </div>
  );
}
