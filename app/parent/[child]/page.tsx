"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [timeElapsed, setTimeElapsed] = useState(0);
  useEffect(() => {
    console.log("Page loaded");
    const interval = setInterval(() => {
      setTimeElapsed((timeElapsed) => timeElapsed + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <div>Page loaded for: {timeElapsed}</div>;
}
