import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <div className="header">
        <FontAwesomeIcon className="icon" icon={faDumbbell}></FontAwesomeIcon>
        <h1> Fitness Club</h1>
      </div>
      <h2>Choose Your Todays Excercise</h2>
    </div>
  );
};

export default Header;
