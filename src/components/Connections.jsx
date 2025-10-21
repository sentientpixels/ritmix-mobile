import { Avatar, Text, TextInput, Title } from "@mantine/core";
import "./Connections.scss";
import { useEffect, useState } from "react";
import { apiGetConnections } from "../api/endpoints";
import { PrimaryColor } from "./colors";

function ContactItem({ contact }) {
  return (
    <div className="ContactItem">
      <Avatar color={PrimaryColor}>{contact.name[0]}</Avatar>
      <div className="contact-text">
        <Text fw="bold">{contact.name}</Text>
        <Text size="xs" c="dimmed">
          {contact.username}
        </Text>
      </div>
    </div>
  );
}

export default function Connections() {
  const [connections, setConnections] = useState([]);

  const fetchConnections = async () => {
    try {
      const _connections = await apiGetConnections();
      setConnections(_connections);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  return (
    <div id="Connections">
      <div id="header">
      <Title order={2} id="title">Connections</Title>
      <TextInput placeholder="Search Dancers..." id="connections-filter-input" />
      </div>
      <div className="connection-list">
        <div className="connections">
          {connections.map((connection) => (
            <ContactItem key={connection.id} contact={connection} />
          ))}
        </div>
        <div className="people"></div>
      </div>
    </div>
  );
}
