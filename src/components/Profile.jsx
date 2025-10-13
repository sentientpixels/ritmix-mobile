import { Avatar } from "@mantine/core";
import "./Profile.scss";
import { IconSettings } from "@tabler/icons-react";

const ABDULLAH_URL =
  "https://cdn.bsky.app/img/avatar/plain/did:plc:cc77gqagiwz6xfsnfdyjw77j/bafkreifvvqyvidnjjb4njmztj63ugaqhvvuad5jq3tbfsgsufhaw4em57i@jpeg";
const COVER_URL =
  "https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473";

export default function Profile() {
  const coverStyle = {
    background: `linear-gradient(180deg,
        rgba(0, 0, 0, 1) 0%,
        transparent 50%,
        transparent 100%),
        url(${COVER_URL})`,
    with: "100%",
    height: "16rem",
    backgroundSize: "cover",
  };

  return (
    <div id="Profile">
      <div id="cover" style={coverStyle}></div>
      <Avatar
        src={ABDULLAH_URL}
        color="orange"
        id="profile-photo"
      />
      <div id="profile-content">
        <div id="profile-buttons">
          <IconSettings />
        </div>
        <h1 id="dancer-name">Abdullah Alam</h1>
        <p id="dancer-about">
          Bachata/Salsa dancer based in Toronto. Creator of the app you're
          looking at.
        </p>
      </div>
    </div>
  );
}
