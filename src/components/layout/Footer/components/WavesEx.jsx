import React from "react";
import Wave from "react-wavify";

const WavesEx = ({ customStyles }) => {
    const defaultStyles = [
      {
        height: "32rem",
        opacity: 0.6,
        color: "#1a9b61",
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
    ];
  
    const waveStyles = customStyles || defaultStyles;
  
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