import React from "react";
import Wave from "react-wavify";

const Footer = () => {
    const waveStyles = [
        { height: "25rem", opacity: 0.6, color: "#21ba71", options: { amplitude: 10, speed: 0.20, points: 6 } },
        { height: "23rem", opacity: 0.8, color: "#21ba71", options: { amplitude: 20, speed: 0.1, points: 5 } },
        { height: "19rem", opacity: 1, color: "#21ba71", options: { amplitude: 20, speed: 0.1, points: 5 } },
    ];

    return (
        <div id="footer" className="fixed bottom-0 left-0 w-screen">
            {waveStyles.map((style, index) => (
                <Wave
                    key={index}
                    fill={style.color}
                    paused={false}
                    style={{ position: "absolute", bottom: "0", zIndex: "-1", opacity: style.opacity, height: style.height }}
                    options={style.options}
                />
            ))}
        </div>
    );
};

export default Footer;
