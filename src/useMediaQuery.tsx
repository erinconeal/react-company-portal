import { useState, useEffect } from "react";

export default function useMediaQuery(queryToMatch = ""): boolean {
  const [matches, setMatches] = useState(
    window.matchMedia(queryToMatch).matches
  );

  useEffect(() => {
    const media = window.matchMedia(queryToMatch);
    // If there is a change update the match
    if (media.matches !== matches) setMatches(media.matches);
    // Add the listener to update the state
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, queryToMatch]);

  return matches;
}
