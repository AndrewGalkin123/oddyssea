import React from "react";
import odessaFerrisWheel from "../../../assets/cultureImages/odessa-ferris-wheel.jpg";
import "./HistoryListType.css";

const HistoryListType = () => {
  return (
    <div className="content" style={{ maxWidth: "1400px", top: "30px" }}>
      <div className="photo_item_container">
        <a className="photo_list_item">
          <img src={odessaFerrisWheel} alt="Одесский колесо обозрения" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </span>
        </a>
        <a className="photo_list_item even">
          <img src={odessaFerrisWheel} alt="Одесский колесо обозрения" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </span>
        </a>
        <a className="photo_list_item">
          <img src={odessaFerrisWheel} alt="Одесский колесо обозрения" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </span>
        </a>
        <a className="photo_list_item even">
          <img src={odessaFerrisWheel} alt="Одесский колесо обозрения" />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
          </span>
        </a>
      </div>
    </div>
  );
};

export default HistoryListType;
