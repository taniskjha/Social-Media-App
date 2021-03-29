import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Bookmark from "./pages/Bookmark";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/video-bookmark" />;
          }}
        />
        <Route exact path="/video-bookmark" component={Bookmark} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
