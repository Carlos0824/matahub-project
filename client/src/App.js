import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Profile from "./pages/profile/profile";
import Register from "./pages/register/register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

//import { useContext } from "react";
//import { AuthContext } from "./context/AuthContext";

function App() {
  //const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
          {/* {user ? <Home /> : <Register />} */}
        </Route>
        <Route path="/login">
          <Login />
          {/* {user ? <Redirect to="/" /> : <Login />} */}
        </Route>
        <Route path="/register">
          <Register />
          {/* {user ? <Redirect to="/" /> : <Register />} */}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
