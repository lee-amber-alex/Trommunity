import React, { Component } from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Dashboard/Profile";
import Home from "../pages/Home";
import TradePostFormPage from "../pages/TradePostFormPage";
import Signup from "./Signup";
import Login from "./Login";
import "./App.css";
import TransHistory from "./History/TransHistory";
import Headers from "./Header/Header"

function App() {
  return (
    <>
    <Headers/>
      
      <div className="w-100" style={{ maxWidth: "450px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute
                exact
                path="/tradepost"
                component={TradePostFormPage}
              />
              <PrivateRoute exact path="/transhistory" component={TransHistory} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    
    </>
  );
}

export default App;

