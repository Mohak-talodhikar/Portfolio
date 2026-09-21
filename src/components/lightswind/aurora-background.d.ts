import type * as React from "react";

export interface AuroraBackgroundProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  showRadialGradient?: boolean;
}

export declare const AuroraBackground: React.FC<AuroraBackgroundProps>;
