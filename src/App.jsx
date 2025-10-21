import { Route, Switch, useLocation } from "wouter";
import "./App.scss";
import BottomBar from "./components/BottomBar";
import Connections from "./components/Connections";
import SearchPage from "./components/SearchPage";
import { useEffect } from "react";
import { getSupabaseClient } from "./auth";
import DynamicProfile from "./components/DynamicProfile";
import Signup from "./components/Signup";
import { App as CapacitorApp } from "@capacitor/app";

import { Toast } from "@capacitor/toast";
import Profile from "./components/Profile";
import Saved from "./components/Saved";
import ConfirmSignup from "./components/ConfirmSignup";
import EventDetails from "./components/EventDetails";

const showToast = async (text) => {
  await Toast.show({
    text: text,
  });
};

function App() {
  const logUser = async () => {
    const supabase = getSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.debug(user);
  };

  const [location, navigate] = useLocation();

  useEffect(() => {
    CapacitorApp.addListener("backButton", ({ canGoBack }) => {
      const homeRoutes = ["/", "/search", "/saved", "/connections", "/profile"];

      if (homeRoutes.includes(location)) {
        CapacitorApp.exitApp();
        return;
      }

      window.history.back();
    });

    return () => {
      CapacitorApp.removeAllListeners();
    };
  }, [location]);

  useEffect(() => {
    logUser();
  }, []);

  return (
    <div id="App">
      <Switch>
        <Route path="/search" component={SearchPage} />
        <Route path="/connections" component={Connections} />
        <Route path="/saved" component={Saved} />

        <Route path="/profile" component={DynamicProfile} />
        <Route path="/profile-page" component={Profile} />

        <Route path="/signup" component={Signup} />
        <Route path="/confirm-signup" component={ConfirmSignup} />

        <Route path="/event-details" component={EventDetails} />

        <Route component={SearchPage} />
      </Switch>

      <BottomBar />
    </div>
  );
}

export default App;
