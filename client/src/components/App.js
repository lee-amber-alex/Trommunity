import React from "react";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home";
import Signup from "./Signup";
import Login from "./Login";
import TradeFormPage from "../pages/TradeFormPage";
import "./App.css";



function App() {
  return (
    <>
   
    
      
      <div >
        <Router>
          <AuthProvider>
            <Switch>
              
              <PrivateRoute exact path="/" component={Home} />
              <PrivateRoute
                exact
                path="/tradepost"
                component={TradeFormPage}
              />
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

