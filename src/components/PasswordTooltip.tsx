import React, { useState, useRef, useEffect } from 'react';
import { siteConfig } from '../data/content';
import '../styles/PasswordTooltip.scss';

interface PasswordTooltipProps {
  onSuccess: () => void;
  onCancel: () => void;
  tooltipRef: React.RefObject<HTMLDivElement>;
}

const PasswordTooltip: React.FC<PasswordTooltipProps> = ({ onSuccess, onCancel, tooltipRef }) => {
  const [digits, setDigits] = useState<string[]>(["", "", "", ""]);
  const [hasError, setHasError] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [isValid, setIsValid] = useState(false);
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-Focus the first input when the tooltip is opened
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onCancel();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onCancel]);

  // Auto-trigger onSuccess after 2 seconds if valid
  useEffect(() => {
    if (isValid) {
      redirectTimerRef.current = setTimeout(() => {
        onSuccess();
      }, 2000);
    }
    return () => {
      if (redirectTimerRef.current) {
        clearTimeout(redirectTimerRef.current);
      }
    };
  }, [isValid, onSuccess]);

  const handleDigitChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Allow only numbers

    const newDigits = [...digits];
    newDigits[index] = value.slice(0, 1); // Store only 1 digit
    setDigits(newDigits);

    // Remove error state when user starts typing again
    if (hasError) {
      setHasError(false);
      tooltipRef.current?.classList.remove("shake");
    }

    // Move focus to the next input when a digit is entered
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check password when all 4 digits are entered
    if (index === 3 && newDigits.every((d) => d !== "")) {
      if (newDigits.join("") === siteConfig.password) {
        setHasError(false);
        setIsValid(true);
      } else {
        setHasError(true);
        triggerShake();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const newDigits = [...digits];
      if (newDigits[index]) {
        newDigits[index] = ""; // Clear current input
      } else if (index > 0) {
        newDigits[index - 1] = ""; // Clear previous input if empty
        inputRefs.current[index - 1]?.focus();
      }
      setIsValid(false);
      setHasError(false);
      setDigits(newDigits);
    }

    if (e.key === "Enter") {
      const fullInput = digits.join("");
      const isComplete = digits.every((d) => d !== "");
      if (isComplete && fullInput === siteConfig.password) {
        if (redirectTimerRef.current) clearTimeout(redirectTimerRef.current);
        onSuccess(); // Manual submit (Enter)
      } else if (!isValid) {
        triggerShake();
      }
    }
  };

  const triggerShake = () => {
    if (tooltipRef.current) {
      tooltipRef.current.classList.remove("shake");
      void tooltipRef.current.offsetWidth;
      tooltipRef.current.classList.add("shake");
    }
    setTimeout(() => {
      tooltipRef.current?.classList.remove("shake");
    }, 500);
  };

  return (
    <div className="password-tooltip">
      <div className="password-tooltip__header">
        <span className="password-tooltip__title">Password</span>
      </div>

      <div className="password-tooltip__input-container">
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            value={digit}
            onChange={(e) => handleDigitChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={`password-tooltip__input 
              ${hasError ? "error" : ""}
              ${isValid ? "success" : ""}
              ${digit ? "filled" : ""}`}
            maxLength={1}
            inputMode="numeric"
            autoComplete="off"
            aria-label={`Digit ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default PasswordTooltip;
