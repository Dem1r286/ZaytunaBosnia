import React, { useEffect, useState } from "react";
import Wave from "react-wavify";

const WavesEx = ({ customStyles }) => {
  const [screenSize, setScreenSize] = useState("lg"); // "lg", "md", or "sm"

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize("sm");
      } else if (width < 1024) {
        setScreenSize("md");
      } else {
        setScreenSize("lg");
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const defaultStyles = {
    lg: [
      {
        height: "32rem",
        opacity: 0.6,
        color: "#22c55e",
        options: { amplitude: 10, speed: 0.2, points: 6 },
      },
      {
        height: "30rem",
        opacity: 0.8,
        color: "#1a9b61",
        options: { amplitude: 20, speed: 0.1, points: 5 },
      },
      {
        height: "27rem",
        opacity: 1,
        color: "#1a9b61",
        options: { amplitude: 20, speed: 0.1, points: 5 },
      },
    ],
    md: [
      {
        height: "52rem",
        opacity: 0.6,
        color: "#22c55e",
        options: { amplitude: 10, speed: 0.2, points: 6 },
      },
      {
        height: "50rem",
        opacity: 0.8,
        color: "#1a9b61",
        options: { amplitude: 20, speed: 0.1, points: 5 },
      },
      {
        height: "48rem",
        opacity: 1,
        color: "#1a9b61",
        options: { amplitude: 20, speed: 0.1, points: 5 },
      },
    ],
    sm: [
      {
        height: "45rem",
        opacity: 0.6,
        color: "#22c55e",
        options: { amplitude: 10, speed: 0.2, points: 6 },
      },
      {
        height: "43rem",
        opacity: 0.8,
        color: "#1a9b61",
        options: { amplitude: 20, speed: 0.1, points: 5 },
      },
      {
        height: "41rem",
        opacity: 1,
        color: "#1a9b61",
        options: { amplitude: 20, speed: 0.1, points: 5 },
      },
    ],
  };

  const waveStyles = customStyles || defaultStyles[screenSize];

  return (
    <div id="wave-container">
      {waveStyles.map((style, index) => (
        <Wave
          key={index}
          fill={style.color}
          paused={false}
          style={{
            position: "absolute",
            bottom: "0",
            zIndex: "-1",
            opacity: style.opacity,
            height: style.height,
          }}
          options={style.options}
        />
      ))}
    </div>
  );
};

export default WavesEx;
