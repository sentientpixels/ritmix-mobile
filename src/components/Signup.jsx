import { PasswordInput, Text, TextInput, Title } from "@mantine/core";
import "./Signup.scss";
import { IconLogin } from "@tabler/icons-react";
import { useState } from "react";
import { useLocation } from "wouter";
import { getSupabaseClient } from "../auth";
import { notifications } from "@mantine/notifications";

export default function Signup() {
  const [passwordDescription, setPasswordDescription] = useState(undefined);
  const [cPasswordDescription, setCPasswordDescription] = useState(undefined);
  const [signingUp, setSigningUp] = useState(false);
  const [location, navigate] = useLocation();
  const [signUpForm, setSignupForm] = useState({
    email: "",
    username: "",
    password: "",
    confirm_password: "",
  });

  const onSignUpClick = async () => {
    setSigningUp(true);

    const supabase = getSupabaseClient();

    let { data, error } = await supabase.auth.signUp({
      email: signUpForm.email,
      password: signUpForm.password,
      options: {
        data: {
          username: signUpForm.username,
        },
      },
    });

    if (error !== null) {
      notifications.show({
        title: "Error signing up",
        message: "Check your internet connection or try again later.",
        color: "red",
      });
      return;
    }

    goToConfirmationPage();
    setSigningUp(false);
  };

  const goToConfirmationPage = () => {
    navigate("/confirm-signup");
  };

  return (
    <div id="Signup">
      <Title order={1} className="app-logo">
        RX
      </Title>
      <form id="signup-form">
        <Title order={2}>Signup</Title>
        <TextInput
          label="E-Mail"
          placeholder="E-Mail Address"
          value={signUpForm.email}
          onChange={(e) =>
            setSignupForm({ ...signUpForm, email: e.currentTarget.value })
          }
        />
        <TextInput
          label="Username"
          placeholder="Pick a username"
          value={signUpForm.username}
          onChange={(e) =>
            setSignupForm({ ...signUpForm, username: e.currentTarget.value })
          }
        />

        <PasswordInput
          label="Password"
          placeholder="Create a password"
          description={passwordDescription}
          value={signUpForm.password}
          onChange={(e) =>
            setSignupForm({ ...signUpForm, password: e.currentTarget.value })
          }
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Re-enter Password"
          description={cPasswordDescription}
          value={signUpForm.confirm_password}
          onChange={(e) =>
            setSignupForm({
              ...signUpForm,
              confirm_password: e.currentTarget.value,
            })
          }
        />
      </form>
      <button
        className="ritmix-button-colored"
        id="signup-button"
        onClick={onSignUpClick}
      >
        <IconLogin />
        <Text>{signingUp ? "Signing up..." : "Sign Up"}</Text>
      </button>
    </div>
  );
}
