import React, { useEffect, useState } from "react";
import { Environment, Sphere } from "react-360-web";
import image from "../../assets/historyImages/little-planet.jpg";

const TheaterGardenPage = () => {
  const [rotation, setRotation] = useState(0);

  const handleMouseMove = (event) => {
    const { movementX, movementY } = event;
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
        <Environment>
          <Sphere
            radius={20}
            widthSegments={32}
            heightSegments={32}
            texture={image}
            style={{
              transform: `rotateY(${rotation}deg)`,
            }}
          />
        </Environment>
      </div>
    </div>
  );
};

export default TheaterGardenPage;
