import { useEffect } from "react";

export const useOnClickOutside = (
  ref: React.RefObject<HTMLDivElement>,
  handler: (event: any) => void
) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        // console.log(event.target);
        return;
      }

      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
