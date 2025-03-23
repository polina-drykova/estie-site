import React, { forwardRef } from "react";

interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "active";
}

const CTAButton = forwardRef<HTMLButtonElement, CTAButtonProps>(({ children, variant = "default", ...props }, ref) => {
  return (
    <button ref={ref} className={`layout-content__cta ${variant}`} {...props}>
      {children}
    </button>
  );
});

export default CTAButton;
