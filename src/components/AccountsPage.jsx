import { Avatar, Text, Title } from "@mantine/core";
import "./AccountsPage.scss";
import { IconUserPlus } from "@tabler/icons-react";

function AccountCard() {
  return (
    <div className="account-card">
      <Avatar size="md" />
      <Text fw="bold">Abdullah Alam</Text>
    </div>
  );
}

export default function AccountsPage() {
  return (
    <div id="AccountsPage">
      <Title order={1} className="app-logo">
        RX
      </Title>
      <Text fw="bold" c="dimmed" size="xs">Let's Go Dancing</Text>
      <button className="add-account-button">
        <IconUserPlus />
        <Text>Add Account</Text>
      </button>
    </div>
  );
}
