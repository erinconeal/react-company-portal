import { useEffect, useCallback, MutableRefObject, Dispatch } from "react";

// infinite scrolling with intersection observer
const useInfiniteScroll = (
  scrollRef: MutableRefObject<HTMLDivElement | null>,
  dispatch: Dispatch<{ type: "ADVANCE_PAGE" }>
): void => {
  const scrollObserver = useCallback(
    (node) => {
      new IntersectionObserver((entries) => {
        entries.forEach((en) => {
          if (en.intersectionRatio > 0) {
            dispatch({ type: "ADVANCE_PAGE" });
          }
        });
      }).observe(node);
    },
    [dispatch]
  );

  useEffect(() => {
    if (scrollRef.current) {
      scrollObserver(scrollRef.current);
    }
  }, [scrollObserver, scrollRef]);
};

export default useInfiniteScroll;
