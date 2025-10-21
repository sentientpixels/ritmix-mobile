import { Text, Title } from "@mantine/core";
import "./ConfirmSignup.scss";
import { IconLogin } from "@tabler/icons-react";

export default function ConfirmSignup() {
  return (
    <div id="ConfirmSignup">
      <Title order={1} className="app-logo">
        RX
      </Title>
      <Title order={2} id="title">Signup Succesful!</Title>
      <Text id="message">
        Thank you for signing up on Ritmix! Check your inbox for a confirmation
        email.
      </Text>
      <button className="ritmix-button-colored button" id="login-button">
        <IconLogin />
        <Text>Login to my account</Text>
      </button>
    </div>
  );
}
