import React, { useState, useEffect } from "react";

const OdessaMap = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTitleText = () => {
    if (windowWidth <= 500) {
      return "Карта Одессы";
    } else {
      return "Карта Одессы. Места съемок";
    }
  };

  return (
    <div style={{ justifyContent: "center", marginBottom: "25px" }}>
      <div>
        <br />
        <div className="title">
          <hr />
          <span>{getTitleText()}</span>
        </div>
        <br />
        <br />
        <br />
        <div
          className="content"
          style={{ maxWidth: "1290px", textAlign: "center" }}
        >
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=14h5r74Wg4V75i8AC2_SOBeYQ_3mBcEE&ehbc=2E312F"
            width="100%"
            height="600"
            title="Google Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OdessaMap;
