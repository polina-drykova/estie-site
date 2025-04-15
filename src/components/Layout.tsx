
import React from "react";
import { siteConfig } from "../data/content";
import Floater from "./Floater";
import InlineSVG from './InlineSVG';
import envelope from '@/assets/images/envelope.svg?raw';
import '../styles/Layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Floater />
      <header className="layout__header">
        <div className="layout__header-container" />
      </header>

      <main className="layout__main">
        <div className="animate-fade-in">
          {children}
        </div>
      </main>
      
      <a 
        href={`mailto:${siteConfig.email}`}
        className="layout__email-button"
        aria-label="Send email"
        target="_blank"
      >
        <InlineSVG src={envelope} alt="envelope" />
      </a>
    </div>
  );
};

export default Layout;
