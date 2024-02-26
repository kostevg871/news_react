import { useEffect, useState } from "react";

export const useDebounce = (value: string, delay: number) => {
  const [debaunceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debaunceValue;
};
