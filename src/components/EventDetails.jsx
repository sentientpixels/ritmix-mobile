import { Avatar, Modal, Text, Title, useModalsStack } from "@mantine/core";
import "./EventDetails.scss";
import ColorThief from "colorthief";
import { useEffect, useState } from "react";
import { document } from "postcss";
import { apiGetEventDetails } from "../api/endpoints";
import { notifications } from "@mantine/notifications";
import EventDetailItem from "./EventDetailItem";
import {
  IconActivity,
  IconBookmark,
  IconCalendar,
  IconClockHour10,
  IconMapPin,
  IconMoodCheck,
  IconMusic,
  IconTicket,
  IconUserPentagon,
  IconUserQuestion,
} from "@tabler/icons-react";
import PillList from "./PillList";
import { PrimaryColor } from "./colors";
import RSVPModal from "./RSVPModal";

export default function EventDetails() {
  const [coverString, setCoverString] = useState("");
  const [eventDetails, setEventDetails] = useState({});
  const modals = useModalsStack(["rsvp-modal"]);

  const coverStyle = {
    background: `linear-gradient(180deg,
        rgba(0, 0, 0, 1) 0%,
        transparent 50%,
        transparent 100%),
        ${coverString}`,
    with: "100%",
    height: "12rem",
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
      img.addEventListener("load", function () {
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

  const openRsvpModal = () => {
    modals.open("rsvp-modal");
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
      <Modal.Stack>
        <Modal {...modals.register("rsvp-modal")} title="RSVP" centered>
          <RSVPModal />
        </Modal>
      </Modal.Stack>

      <div id="event-cover" style={coverStyle}></div>
      <div id="event-details">
        <div id="poster-details">
          <img src={eventDetails.poster} alt="" id="event-poster" />
          <div id="details">
            <EventDetailItem
              icon={<IconUserPentagon />}
              detailValue="Dovercourt House"
              className="organiser"
            />
            <Title order={3} id="event-name">
              {eventDetails.name}
            </Title>
            <EventDetailItem icon={<IconMapPin />} detailValue="Rouge Hill" />
            <EventDetailItem icon={<IconCalendar />} detailValue="Saturday" />
            <EventDetailItem
              icon={<IconClockHour10 />}
              detailValue="10:00PM - 02:00AM"
            />
          </div>
        </div>

        <div id="pills-div">
          <PillList
            pillItems={["Beginner", "Intermediate", "Advanced"]}
            icon={<IconMoodCheck />}
            pillColor="rgba(255, 255, 255, 0.1)"
            className="skill-levels"
          />
          <PillList
            pillItems={["Bachata", "Salsa", "Zouk"]}
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

        <div id="also-going">
          <Text size="xs" fw="bold" c={PrimaryColor}>
            ALSO GOING
          </Text>
          <Avatar.Group>
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-7.png"
              radius="xl"
              size="lg"
            />
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-8.png"
              radius="xl"
              size="lg"
            />
            <Avatar
              src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-9.png"
              radius="xl"
              size="lg"
            />
            <Avatar radius="xl" size="lg">
              <Text size="sm">+150</Text>
            </Avatar>
          </Avatar.Group>
        </div>
        <div id="buttons-div">
          <button className="ritmix-button event-button">
            <IconBookmark size={16} />
            <Text size="sm" fw="bold">
              Save
            </Text>
          </button>
          <button
            className="ritmix-button event-button"
            onClick={openRsvpModal}
          >
            <IconUserQuestion size={16} />
            <Text size="sm" fw="bold">
              RSVP
            </Text>
          </button>
          <button className="ritmix-button event-button">
            <IconTicket size={16} />
            <Text size="sm" fw="bold">
              Tickets
            </Text>
          </button>
        </div>

        <div id="event-description">
          <Title order={3}>About</Title>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            labore, voluptatibus numquam perferendis non optio.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            voluptatibus aliquid recusandae perferendis tempora in voluptatem,
            consequatur mollitia dignissimos commodi similique placeat, rerum
            doloribus iusto ratione beatae, eius explicabo? Distinctio dicta
            libero porro ea? Animi consectetur nisi beatae recusandae hic at
            veritatis velit ducimus itaque laborum illum quaerat maxime ab,
            temporibus deserunt. Fugiat?
          </p>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            fugit quod quia! Ipsa cumque iusto, incidunt molestias quia corrupti
            aut cupiditate dolore labore vel rerum repellendus aspernatur.
            Aspernatur similique beatae animi fugiat ad eveniet debitis!
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste,
            ratione!
          </p>
        </div>
      </div>
    </div>
  );
}
