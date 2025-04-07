import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { homeContent } from "../data/content";
import CustomTooltip from "../components/CustomTooltip";
import PasswordTooltip from "../components/PasswordTooltip";
import CTAButton from "../components/CTAButton";
import Landing from '/landing.svg';
import LandingMobile from '/landing-mobile.svg';
import LazyImage from '../components/LazyImage';
import '../styles/Index.scss';

const LandingSrc = {
  desktop: Landing,
  tablet: Landing,
  mobile: LandingMobile,
};

const Index = () => {
  const [isPasswordTooltipOpen, setIsPasswordTooltipOpen] = useState(false);
  const navigate = useNavigate();
  const tooltipRef = useRef<HTMLDivElement | null>(null); // ✅ Pass this ref to CustomTooltip
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // ✅ Close tooltip when clicking outside (but NOT when clicking the button)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        tooltipRef.current &&
        !tooltipRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsPasswordTooltipOpen(false);
      }
    };

    if (isPasswordTooltipOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPasswordTooltipOpen]);

  const handlePasswordSuccess = () => {
    sessionStorage.setItem("hasAccess", "true");
    setIsPasswordTooltipOpen(false);
    navigate("/work");
  };

  return (
    <Layout>
      <div className="layout-content">
        <LazyImage src={LandingSrc} alt="Logo" className="landing-image" />
        <div className="layout-content__container">
          <div className="layout-content__content">
            <h1 className="layout-content__headline landing-content">{homeContent.headline}</h1>
            <p className="layout-content__intro landing-content">{homeContent.introduction}</p>

            <div className="cta-container">
              <CustomTooltip open={isPasswordTooltipOpen} ref={tooltipRef}>
                {isPasswordTooltipOpen && (
                  <PasswordTooltip
                    onSuccess={handlePasswordSuccess}
                    onCancel={() => setIsPasswordTooltipOpen(false)}
                    tooltipRef={tooltipRef}
                  />
                )}
              </CustomTooltip>

              <CTAButton ref={buttonRef} onClick={() => setIsPasswordTooltipOpen((prev) => !prev)}>
                {homeContent.ctaText}
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
