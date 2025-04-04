
import React from "react";
// import { Link } from "react-router-dom";
import { siteConfig } from "../data/content";
import logo from '@/assets/images/envelope.svg';
import LazyImage from './LazyImage';
import '../styles/Layout.scss';
import Floater from "./Floater";

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
        <LazyImage src={logo} alt="Logo" />
      </a>
    </div>
  );
};

export default Layout;
