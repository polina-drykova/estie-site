import React, { forwardRef } from "react";

interface CustomTooltipProps {
  open: boolean;
  children: React.ReactNode;
}

// ✅ Fix: Use `forwardRef` to allow tooltip to work correctly
const CustomTooltip = forwardRef<HTMLDivElement, CustomTooltipProps>(({ open, children }, ref) => {
  return (
    <div ref={ref} className={`password-tooltip-container ${open ? "visible" : ""}`}>
      {children}
    </div>
  );
});

export default CustomTooltip;
