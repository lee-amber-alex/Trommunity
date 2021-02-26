import React from "react";
import Header from "../components/Header/Header";

import SideNavbar from "../components/Nav/SideNavbar";
import HomeDashboard from "../components/HomeDashboard/HomeDashboard";

const styles = {
  margin: {
    margin: "20px",
  },
};
const Home = () => {
  return (
    <div>
      
      <SideNavbar />
     <Header /> 

      <div className="container main">
      
        <div className="row">
          <div className="col-md-10" style={styles.margin}>
            <HomeDashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
