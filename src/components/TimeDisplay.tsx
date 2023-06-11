import React, { useState, useEffect } from 'react';

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
    console.log(intervalId)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Current Time</h1>
      <p>{currentTime}</p>
    </div>
  );
};

export default TimeDisplay;