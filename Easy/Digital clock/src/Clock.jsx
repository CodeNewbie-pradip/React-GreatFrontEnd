import React, { useState, useEffect } from "react";
import "./Clock.css";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="digital-clock">
      {formatTime(time).split('').map((char, index) =>
        char === ':' ? (
          <span key={index} className="colon">:</span>
        ) : (
          <SevenSegmentDigit key={index} digit={char} />
        )
      )}
    </div>
  );
}

function SevenSegmentDigit({ digit }) {
  const segments = {
    0: [true, true, true, false, true, true, true],
    1: [false, false, true, false, false, true, false],
    2: [true, false, true, true, true, false, true],
    3: [true, false, true, true, false, true, true],
    4: [false, true, true, true, false, true, false],
    5: [true, true, false, true, false, true, true],
    6: [true, true, false, true, true, true, true],
    7: [true, false, true, false, false, true, false],
    8: [true, true, true, true, true, true, true],
    9: [true, true, true, true, false, true, true],
  };

  return (
    <div className="seven-segment-digit">
      {segments[digit].map((isOn, idx) => (
        <div
          key={idx}
          className={`segment segment-${idx + 1} ${isOn ? 'on' : ''}`}
        ></div>
      ))}
    </div>
  );
}
