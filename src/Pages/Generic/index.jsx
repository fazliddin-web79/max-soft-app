import React from "react";
import "./style.css";
import { useLocation } from "react-router-dom";

const Generic = () => {
  const location = useLocation();
  return (
    <div className="generic-wrap">
      Ooops, sorry! <span>{location.pathname}</span> This page is coming soon
    </div>
  );
};

export default Generic;
