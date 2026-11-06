import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check for touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    // Use GSAP quickTo for 60fps buttery tracking
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.1, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.1, ease: "power3" });

    const fxTo = gsap.quickTo(follower, "x", { duration: 0.35, ease: "power3.out" });
    const fyTo = gsap.quickTo(follower, "y", { duration: 0.35, ease: "power3.out" });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);
      fxTo(e.clientX);
      fyTo(e.clientY);
    };

    // Detect hover targets with data-cursor attributes
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("[data-cursor]") as HTMLElement | null;
      if (target) {
        const text = target.getAttribute("data-cursor") || "";
        setCursorText(text);
        setIsHovered(true);
        gsap.to(follower, {
          scale: text ? 2.5 : 1.8,
          backgroundColor: text ? "rgba(28, 25, 23, 0.9)" : "rgba(28, 25, 23, 0.08)",
          borderColor: text ? "transparent" : "rgba(28, 25, 23, 0.4)",
          duration: 0.3,
          ease: "power2.out",
        });
      } else {
        const isClickable = (e.target as HTMLElement).closest("a, button, [role='button'], input, select");
        if (isClickable) {
          setIsHovered(true);
          setCursorText("");
          gsap.to(follower, {
            scale: 1.5,
            backgroundColor: "rgba(28, 25, 23, 0.08)",
            borderColor: "rgba(28, 25, 23, 0.3)",
            duration: 0.25,
          });
        } else {
          setIsHovered(false);
          setCursorText("");
          gsap.to(follower, {
            scale: 1,
            backgroundColor: "transparent",
            borderColor: "rgba(28, 25, 23, 0.3)",
            duration: 0.25,
          });
        }
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      {/* Central Cursor Point */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-2 h-2 -ml-1 -mt-1 rounded-full bg-[#1c1917] pointer-events-none z-[100] transition-opacity duration-200"
        style={{ willChange: "transform" }}
      />

      {/* Trailing Fluid Follower */}
      <div
        ref={followerRef}
        className="fixed top-0 left-0 w-9 h-9 -ml-4.5 -mt-4.5 rounded-full border border-[#1c1917]/30 pointer-events-none z-[99] flex items-center justify-center transition-colors duration-200"
        style={{ willChange: "transform" }}
      >
        {cursorText && (
          <span
            ref={textRef}
            className="text-[8px] font-mono uppercase tracking-widest text-[#faf8f5] select-none pointer-events-none font-bold"
          >
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
