"use client";

import { useEffect, useState, useRef } from "react";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const FadeInTransition = ({ children }: props) => {
  const [isVisible, setIsVisible] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const elementRect = elementRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (elementRect.top <= windowHeight - 10) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity duration-1000 transform ${
        isVisible ? "opacity-100" : "opacity-0 translate-y-2"
      }`}
    >
      {children}
    </div>
  );
};

export default FadeInTransition;
