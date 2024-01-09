// useThrottle.js
import { useState, useEffect } from "react";

function useThrottle(callback, delay) {
  const [isThrottled, setIsThrottled] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isThrottled) {
      callback();
      setIsThrottled(true);
      timeout = setTimeout(() => setIsThrottled(false), delay);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [callback, delay, isThrottled]);

  return isThrottled;
}

export default useThrottle;
