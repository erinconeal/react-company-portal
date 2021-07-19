import { useEffect, useCallback, useRef, MutableRefObject } from "react";
import { PicsumPhotosAPIResponse } from "./APIResponsesTypes";

// lazy load images with intersection observer
const useLazyLoading = (
  imgSelector: string,
  items: PicsumPhotosAPIResponse[]
): void => {
  const imgObserver = useCallback((node) => {
    const intObs = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.intersectionRatio > 0) {
          const currentImg = en.target as HTMLImageElement;
          const newImgSrc = currentImg.dataset.src;

          // only swap out the image source if the new url exists
          if (!newImgSrc) {
            console.error("Image source is invalid");
          } else {
            currentImg.src = newImgSrc;
          }
          intObs.unobserve(node);
        }
      });
    });
    intObs.observe(node);
  }, []);

  const imagesRef: MutableRefObject<HTMLImageElement[] | null> = useRef(null);

  useEffect(() => {
    imagesRef.current = Array.from(document.querySelectorAll(imgSelector));

    if (imagesRef.current) {
      imagesRef.current.forEach((img: HTMLImageElement) => imgObserver(img));
    }
  }, [imgObserver, imagesRef, imgSelector, items]);
};

export default useLazyLoading;
