import React, { useState, useEffect } from "react";

function Bai2() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h2>Welcome to my website!</h2>
      <p>The current time is: {time}</p>
    </div>
  );
}

export default Bai2;