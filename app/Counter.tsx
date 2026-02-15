"use client";

import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-8 text-center">
      <p className="text-6xl font-mono font-bold tabular-nums">{count}</p>
      <p className="text-sm text-gray-500 mt-2">seconds elapsed</p>
    </div>
  );
}
