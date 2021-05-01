import React from "react";
// import Nav from "../components/Nav/Nav";
import Navbar from "../components/Nav/Navbar";
import ProfileCard from "../components/Profile/ProfileCard";
import Dashboard from "../components/Dashboard/Dashboard"

const Home = () => {


  return (
    <div>
      <Navbar />
      <ProfileCard />
      <Dashboard />
      
    </div>
  );
};

export default Home;
