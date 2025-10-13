import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { createTheme } from "@mantine/core";

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

createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme} defaultColorScheme="dark">
    <App />
  </MantineProvider>,
);
