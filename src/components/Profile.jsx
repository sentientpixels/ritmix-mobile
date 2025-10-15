import { Avatar, Button, Progress, Text } from "@mantine/core";
import "./Profile.scss";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconEdit,
  IconLink,
  IconLogout,
  IconSettings,
  IconStretching2,
} from "@tabler/icons-react";
import { PrimaryColor } from "./colors";

const ABDULLAH_URL =
  "https://cdn.bsky.app/img/avatar/plain/did:plc:cc77gqagiwz6xfsnfdyjw77j/bafkreifvvqyvidnjjb4njmztj63ugaqhvvuad5jq3tbfsgsufhaw4em57i@jpeg";
const COVER_URL =
  "https://images.unsplash.com/photo-1454486837617-ce8e1ba5ebfe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1473";

// naive profile page, assumes logged in user
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
      <Avatar src={ABDULLAH_URL} color="orange" id="profile-photo" />
      <div id="profile-content">
        <div id="profile-buttons">
          <IconEdit />
          <IconSettings />
        </div>

        <div id="overview">
          <div id="dancer-details">
            <h1 id="dancer-name">Abdullah Alam</h1>
            <p id="dancer-about">
              Bachata/Salsa dancer based in Toronto. Creator of the app you're
              looking at.
            </p>
          </div>
          <div id="score-card">
            <Text id="score-text">
              Ritmix
              <br />
              Score
            </Text>
            <Text id="score-number">127</Text>
          </div>
        </div>

        <div className="stat-card">
          <Text className="stat-card-name">Attended</Text>
          <div className="stats">
            <div className="stat">
              <Text className="stat-name">Socials</Text>
              <Text className="stat-number">67</Text>
            </div>
            <div className="stat">
              <Text className="stat-name">Classes</Text>
              <Text className="stat-number">67</Text>
            </div>
            <div className="stat">
              <Text className="stat-name">Congresses</Text>
              <Text className="stat-number">67</Text>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <Text className="stat-card-name">Organized</Text>
          <div className="stats">
            <div className="stat">
              <Text className="stat-name">Socials</Text>
              <Text className="stat-number">67</Text>
            </div>
            <div className="stat">
              <Text className="stat-name">Classes</Text>
              <Text className="stat-number">67</Text>
            </div>
          </div>
        </div>

        <div className="stat-card">
          <Text className="stat-card-name">Dances</Text>
          <div className="dance">
            <div className="dance-name-line">
              <IconStretching2 size={18} />
              <Text className="dance-name">Bachata</Text>
            </div>
            <Progress value={75} size="xl" color={PrimaryColor} />
            <Text size="sm" c="dimmed">
              Advanced Intermediate
            </Text>
          </div>
          <div className="dance">
            <div className="dance-name-line">
              <IconStretching2 size={18} />
              <Text className="dance-name">Salsa</Text>
            </div>
            <Progress value={50} size="xl" color={PrimaryColor} />
            <Text size="sm" c="dimmed">
              Intermediate
            </Text>
          </div>
          <div className="dance">
            <div className="dance-name-line">
              <IconStretching2 size={18} />
              <Text className="dance-name">Zouk</Text>
            </div>
            <Progress value={25} size="xl" color={PrimaryColor} />
            <Text size="sm" c="dimmed">
              Advanced Beginner
            </Text>
          </div>
        </div>

        <div id="social-media">
          <div className="sm-item">
            <IconBrandInstagram className="sm-icon" />
            <Text>Instagram</Text>
          </div>
          <div className="sm-item">
            <IconBrandFacebook className="sm-icon" />
            <Text>Facebook</Text>
          </div>
          <div className="sm-item">
            <IconLink className="sm-icon" />
            <Text>Website</Text>
          </div>
        </div>
        <button id="logout-button">
          <IconLogout />
          <Text>Logout</Text>
        </button>
      </div>
    </div>
  );
}
