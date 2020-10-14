import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./notes-main.css";
import Gallery from "./gallery/Gallery";
import Note from "./notes/Note";
import Home from "./home/Home";
import Game from "./game/Game";
import NotFound from "./NotFound";

import Signup from "./authenticate/Signup";
import Login from "./authenticate/Login";
import ForgotPassword from "./authenticate/ForgotPassword";
import UpdateProfile from "./authenticate/UpdateProfile";

import PrivateRoute from "./authenticate/PrivateRoute";
import { AuthProvider } from "./authenticate/contexts/AuthContext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute Route exact path="/home" component={Home} />
          <PrivateRoute Route exact path="/gallery" component={Gallery} />
          <PrivateRoute Route exact path="/notes" component={Note} />
          <PrivateRoute Route exact path="/hangman" component={Game} />
          <PrivateRoute Route component={NotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
