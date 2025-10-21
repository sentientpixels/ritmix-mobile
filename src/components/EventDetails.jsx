import { Title } from "@mantine/core";
import "./EventDetails.scss";
import ColorThief from "colorthief";
import { useEffect, useState } from "react";
import { document } from "postcss";
import { apiGetEventDetails } from "../api/endpoints";
import { notifications } from "@mantine/notifications";

export default function EventDetails() {
  const [coverString, setCoverString] = useState("");
  const [eventDetails, setEventDetails] = useState({});

  const coverStyle = {
    background: `linear-gradient(180deg,
        rgba(0, 0, 0, 1) 0%,
        transparent 50%,
        transparent 100%),
        ${coverString}`,
    with: "100%",
    height: "16rem",
    backgroundSize: "cover",
  };

  const setCoverColorFromPoster = async (_eventDetails) => {
    if (_eventDetails.poster === undefined) {
      return;
    }

    if (_eventDetails.poster === null) {
      return;
    }

    const colorThief = new ColorThief();
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = _eventDetails.poster;

    if (img.complete) {
      const _color = colorThief.getColor(img);
      setCoverString(`rgb(${_color[0]}, ${_color[1]}, ${_color[2]})`);
    } else {
      img.addEventListener("load", function() {
        const _color = colorThief.getColor(img);
        setCoverString(`rgb(${_color[0]}, ${_color[1]}, ${_color[2]})`);
      });
    }
  };

  const fetchEventDetails = async () => {
    try {
      const _eventDetails = await apiGetEventDetails();
      setEventDetails(_eventDetails);
    } catch (err) {
      console.error(err);
      notifications.show({
        title: "Error fetching event",
        message: "Check you internet or try again later.",
      });
    }
  };

  const eventHasCover = (_eventDetails) => {
    if (_eventDetails.cover === undefined) {
      return false;
    }

    if (_eventDetails.cover === null) {
      return false;
    }

    return true;
  };

  useEffect(() => {
    if (eventHasCover(eventDetails)) {
      setCoverString(`url(${eventDetails.cover})`);
    } else {
      setCoverColorFromPoster(eventDetails);
    }
  }, [eventDetails]);

  useEffect(() => {
    fetchEventDetails();
  }, []);

  return (
    <div id="EventDetails">
      <div id="event-cover" style={coverStyle}></div>
      <div id="event-details">
        <img src={eventDetails.poster} alt="" />
        <Title order={3}>{ eventDetails.name }</Title>
      </div>
    </div>
  );
}
