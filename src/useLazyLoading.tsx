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
          console.log("current list item", currentListItem.children);
          if (currentListItem.children[0].tagName === "IMG") {
            const newImgSrc = currentListItem.children[0].dataset.src;

            // only swap out the image source if the new url exists
            if (!newImgSrc) {
              console.error("Image source is invalid");
            } else {
              currentListItem.children[0].src = newImgSrc;
            }
          }
          intObs.unobserve(node);
        }
      });
    });
    intObs.observe(node);
  }, []);

  const imagesRef: MutableRefObject<HTMLLIElement[] | null> = useRef(null);

  useEffect(() => {
    imagesRef.current = Array.from(document.querySelectorAll(elementSelector));

    if (imagesRef.current) {
      imagesRef.current.forEach((img: HTMLLIElement) => observer(img));
    }
  }, [observer, imagesRef, elementSelector, items]);
};

export default useLazyLoading;
