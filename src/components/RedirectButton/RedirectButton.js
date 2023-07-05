import React from "react";
import "./RedirectButton.css"
import { useNavigate } from "react-router-dom";

const RedirectButton = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return <button className="photos_link" onClick={handleClick}>{children}</button>;
};

export default RedirectButton;

