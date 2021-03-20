import React from "react";
import { AuthProvider } from "./contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
// import TradeFormPage from "./pages/TradeFormPage";
import "./components/Styles/App.css";
import Post from "./pages/Post";
import MyTrades from "./pages/MyTrades"
import Stuff from "./pages/Stuff"
import Messages from './pages/Messages'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/post" component={Post} />
          <PrivateRoute exact path="/mytrades" component={MyTrades} />
          <PrivateRoute exact path="/messages" component={Messages} />
          <PrivateRoute exact path="/stuff" component={Stuff} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
