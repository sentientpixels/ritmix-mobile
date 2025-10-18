import { Avatar, Text, Title } from "@mantine/core";
import "./AccountsPage.scss";
import { IconUserPlus } from "@tabler/icons-react";
import { useLocation } from "wouter";

function AccountCard() {
  return (
    <div className="account-card">
      <Avatar size="md" />
      <Text fw="bold">Abdullah Alam</Text>
    </div>
  );
}

export default function AccountsPage() {
  const [location, navigate] = useLocation();

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div id="AccountsPage">
      <Title order={1} className="app-logo">
        RX
      </Title>
      <Text fw="bold" c="dimmed" size="xs">
        Let's Go Dancing
      </Text>
      <div className="account-list">
        <AccountCard />
        <AccountCard />
        <AccountCard />
        <AccountCard />
      </div>
      <div className="buttons">
        <button className="add-account-button">
          <IconUserPlus />
          <Text>Login</Text>
        </button>
        <button className="add-account-button" onClick={goToSignup}>
          <IconUserPlus />
          <Text>Sign Up</Text>
        </button>
      </div>
    </div>
  );
}
