import React, { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => prev - 0.5);
    }, 10);
    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className="absolute bottom-0 right-0 w-full bg-gray-200 h-1.5 dark:bg-gray-700 rounded-b-md">
      <div
        className="bg-blue-600 h-1.5 rounded-md"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
