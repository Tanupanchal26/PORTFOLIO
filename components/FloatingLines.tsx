"use client";

import React from "react";

interface FloatingLinesProps {
  enabledWaves?: string[];
  lineCount?: number;
  lineDistance?: number;
  bendRadius?: number;
  bendStrength?: number;
  animationSpeed?: number;
  interactive?: boolean;
  parallax?: boolean;
  parallaxStrength?: number;
  mixBlendMode?: "normal" | "multiply" | "screen" | "overlay" | "darken" | "lighten" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
}

const FloatingLines: React.FC<FloatingLinesProps> = ({
  enabledWaves = ["top", "middle", "bottom"],
  lineCount = 8,
  lineDistance = 25,
  bendRadius = 10,
  bendStrength = 2,
  animationSpeed = 0.6,
  interactive = true,
  parallax = true,
  parallaxStrength = 0.1,
  mixBlendMode = "screen",
}) => {
  // Placeholder for custom Three.js shader component
  // Replace this with your actual FloatingLines implementation
  return (
    <div 
      className="floating-lines-container"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        mixBlendMode: mixBlendMode,
      }}
      data-line-count={lineCount}
      data-line-distance={lineDistance}
      data-bend-radius={bendRadius}
      data-bend-strength={bendStrength}
      data-animation-speed={animationSpeed}
      data-interactive={interactive}
      data-parallax={parallax}
      data-parallax-strength={parallaxStrength}
    >
      {/* TODO: Integrate custom Three.js FloatingLines shader here */}
    </div>
  );
};

export default FloatingLines;
