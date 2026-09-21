import type * as React from "react";

export interface GlowingBackgroundProps {
  zIndex?: number;
  height?: string;
  ringColors?: string[];
  blurStrength?: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
}

declare const GlowingBackground: React.FC<GlowingBackgroundProps>;

export default GlowingBackground;
