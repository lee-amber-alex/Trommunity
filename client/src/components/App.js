import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Dashboard from "./Dashboard/Dashboard";
// import AuthPage from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";
import Profile from "./Dashboard/Profile";
// import Footer from "../components/Footer/Footer";
import Home from "../pages/Home";
import TradePostFormPage from "../pages/TradePostFormPage";
import Signup from "./signup";
import Login from "./Login";
import "./App.css";
import TransHistory from "./History/TransHistory";

function App() {
  return (
    <Container
      className="align-items-center"
      style={{ minHeight: "100vh" }}
    >
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
    </Container>
  );
}

export default App;

// const App = () => {
//   return (
//     <Router>
//       <div className="application">
//         <main className="main">
//           <Container>
//             <AuthProvider>
//               <Switch>
//                 <PrivateRoute exact path="/" component={Home} />
//                 <PrivateRoute
//                   exact
//                   path="/tradepost"
//                   component={TradePostFormPage}
//                 />
//                 {/* <Route path="/auth" component={AuthPage} /> */}
//               </Switch>
//             </AuthProvider>
//           </Container>
//           <Footer />
//         </main>
//       </div>
//     </Router>
//   );
// };

// export default App;
