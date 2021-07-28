import { useEffect, useCallback, useRef, MutableRefObject } from "react";
import { CombinedData } from "./Blog";

// lazy load images with intersection observer
const useLazyLoading = (
  elementSelector: string,
  items: CombinedData[]
): void => {
  const observer = useCallback((node) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          const currentListItem = en.target as HTMLLIElement;
          const firstChild = currentListItem.children[0] as HTMLImageElement;
          if (firstChild.tagName === "IMG") {
            const newImgSrc = firstChild.dataset.src;

            // only swap out the image source if the new url exists
            if (!newImgSrc) {
              console.error("Image source is invalid");
            } else {
              firstChild.src = newImgSrc;
            }
          }
          intObs.unobserve(node);
        }
      });
    });
    intObs.observe(node);
  }, []);

  const listRef: MutableRefObject<HTMLLIElement[] | null> = useRef(null);

  useEffect(() => {
    listRef.current = Array.from(document.querySelectorAll(elementSelector));

    if (listRef.current) {
      listRef.current.forEach((listItem: HTMLLIElement) => observer(listItem));
    }
  }, [observer, listRef, elementSelector, items]);
};

export default useLazyLoading;
