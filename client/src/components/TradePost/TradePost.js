import React from "react";
import TradePostForm from "../TradePostForm/TradePostForm";

const TradePost = () => {
  return (
    <Link className="navbar-brand" to="/tradepostform">
      <TradePostForm />
    </Link>
  );
};

export default TradePost;
