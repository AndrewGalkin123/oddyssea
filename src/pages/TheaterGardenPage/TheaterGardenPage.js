import React, { useEffect, useState } from "react";
import image from "../../assets/historyImages/little-planet.jpg";

const TheaterGardenPage = () => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (event) => {
    const { movementX } = event;
    setRotation((prevRotation) => prevRotation - movementX * 0.5);
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="content" style={{ maxWidth: "1300px", top: "100px" }}>
        <div className="environment">
          <div
            className="sphere"
            style={{
              transform: `rotateY(${rotation}deg)`,
              backgroundImage: image,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default TheaterGardenPage;
