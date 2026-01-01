/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, type DependencyList, type RefObject } from "react";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

type ScrollPosition = { x: number; y: number };
type ScrollEffect = (positions: {
  prevPos: ScrollPosition;
  currPos: ScrollPosition;
}) => void;

const isBrowser = typeof window !== "undefined";

function getScrollPosition({
  element,
  useWindow,
}: {
  element?: RefObject<HTMLElement> | false;
  useWindow?: boolean;
}): ScrollPosition {
  if (!isBrowser) return { x: 0, y: 0 };

  const target = element && element.current ? element.current : document.body;
  const position = target.getBoundingClientRect();

  return useWindow
    ? { x: window.scrollX, y: window.scrollY }
    : { x: position.left, y: position.top };
}

export function useScrollPosition(
  effect: ScrollEffect,
  deps: DependencyList = [],
  element: RefObject<HTMLElement> | false = false,
  useWindow = false,
  wait: number | null = null
) {
  const position = useRef<ScrollPosition>(getScrollPosition({ useWindow }));
  let throttleTimeout: ReturnType<typeof setTimeout> | null = null;

  const callBack = () => {
    const currPos = getScrollPosition({ element, useWindow });
    effect({ prevPos: position.current, currPos });
    position.current = currPos;
    throttleTimeout = null;
  };

  useIsomorphicLayoutEffect(() => {
    if (!isBrowser) {
      return;
    }

    const handleScroll = () => {
      if (wait) {
        if (throttleTimeout === null) {
          throttleTimeout = setTimeout(callBack, wait);
        }
      } else {
        callBack();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) {
        clearTimeout(throttleTimeout);
      }
    };
  }, deps);
}
