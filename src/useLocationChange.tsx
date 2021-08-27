import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function useLocationChange(action: () => void): void {
  const location = useLocation();
  useEffect(() => {
    action();
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
}
