import React, { useState, useCallback, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import API from "../../utils/API";
// import "./style.css";
import HistoryCard from "../TradeCard/HistoryCard";
import SideNavbar from "../Nav/SideNavbar";
import Header from "../Header/Header";
import ClaimedHistory from "./ClaimedHistory";

const TransHistory = () => {
  const { currentUser } = useAuth();
  // console.log(currentUser);
  const asyncOne = useAsync(API.getMyTrade, currentUser.uid);
  const { loading, value, error } = asyncOne;
  if (loading) return "loading...";
  if (error) {
    console.log(error);
    return <div>error</div>;
  }
  if (value) {
    const dbData = value.data;
    console.log(dbData);
    
    function handleSubmit() {
      // console.log(data);
      //   console.log("Trade Claimed");
      //   API.deleteTrade({
      //   dbData:dbData
      //   })
      // .then((result) => {
      //     console.log("Claims data", result);
      //   })
      //   .catch((err) => console.log(err));
      alert("You deleted this post.");
    }

    return (
      <div>
        <Header />
        <SideNavbar />
        {dbData.map((data) => (
          <HistoryCard
            dbData={dbData}
            // image would go here once available
            id={data.id}
            key={data.id}
            email={data.email}
            need={data.need}
            trades={data.trades}
            description={data.description}
            onClick={handleSubmit}
          />
        ))}
  
        <ClaimedHistory/>
    
      </div>
    );
  }
  return (
    <div className="container">
      <div>
        <p>Dashboard</p>
      </div>
      <div className="row">
        <div className="col-md-2">
          <p>thrumup with icon</p>
        </div>
        <div className="col-md-10"></div>
      </div>
    </div>
  );
};
export default TransHistory;

const useAsync = (asyncFunction, ...args) => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setLoading(true);
    setValue(null);
    setError(null);

    return asyncFunction(...args)
      .then((response) => {
        setValue(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [asyncFunction]);

  useEffect(() => {
    execute();
    
  }, [execute]);

  return { execute, loading, value, error };
};
