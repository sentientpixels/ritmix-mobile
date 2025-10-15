import { Route, Switch } from "wouter";
import "./App.scss";
import BottomBar from "./components/BottomBar";
import Connections from "./components/Connections";
import SearchPage from "./components/SearchPage";
import { useEffect } from "react";
import { getSupabaseClient } from "./auth";
import DynamicProfile from "./components/DynamicProfile";

function App() {
  const logUser = async () => {
    const supabase = getSupabaseClient();

    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.debug(user);
  };

  useEffect(() => {
    logUser();
  }, []);

  return (
    <div id="App">
      <Switch>
        <Route path="/saved">
          <h1>Saved</h1>
        </Route>

        <Route path="/profile" component={DynamicProfile} />
        <Route path="/connections" component={Connections} />

        <Route path="/search" component={SearchPage} />

        <Route component={SearchPage} />
      </Switch>

      <BottomBar />
    </div>
  );
}

export default App;
