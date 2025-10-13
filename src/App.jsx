import { Route, Switch } from "wouter";
import "./App.scss";
import BottomBar from "./components/BottomBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div id="App">
      <Switch>
        <Route path="/saved">
          <h1>Saved</h1>
        </Route>

        <Route path="/profile" component={Profile} />

        <Route path="/explore">
          <h1>Ritmix</h1>
        </Route>

        <Route>
          <h1>Ritmix</h1>
        </Route>
      </Switch>

      <BottomBar />
    </div>
  );
}

export default App;
