import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";
import { defineCustomElements } from "@ionic/pwa-elements/loader";
import { Notifications } from "@mantine/notifications";

import { createRoot } from "react-dom/client";
import "./main.scss";
import App from "./App.jsx";

// core styles are required for all packages

// other css files are required only if
// you are using components from the corresponding package
// import '@mantine/dates/styles.css';
// import '@mantine/dropzone/styles.css';
// import '@mantine/code-highlight/styles.css';
// ...

const theme = createTheme({});
defineCustomElements(window);

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <Notifications />
    <App />
  </MantineProvider>
);
