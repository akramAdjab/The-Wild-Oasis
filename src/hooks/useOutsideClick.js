import { useEffect, useRef } from "react";

export function useOutsideClick(handler, lisntenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) handler();
      }

      document.addEventListener("click", handleClick, lisntenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, lisntenCapturing);
    },
    [handler, lisntenCapturing]
  );

  return ref;
}
