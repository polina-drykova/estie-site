
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import ProjectDetailWrapper from "./pages/ProjectDetailWrapper";
// import ProjectDetailFlurry from "./pages/ProjectDetailFlurry";
import NotFound from "./pages/NotFound";
import { siteConfig } from "./data/content";

const queryClient = new QueryClient();

// Component to handle route transitions
const RouteTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  
  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
    
    // Set page metadata
    document.title = `${siteConfig.metaTitle} | ${location.pathname === "/" ? "Home" : location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)}`;
  }, [location]);
  
  return <>{children}</>;
};

// Authentication route guard
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const hasAccess = sessionStorage.getItem("hasAccess") === "true";
  
  useEffect(() => {
    if (!hasAccess) {
      // Set hasAccess to true when password is correct (demo only)
      // In a real app, this would use a more secure method
      const handlePasswordSuccess = () => {
        sessionStorage.setItem("hasAccess", "true");
      };
      
      // This is for demonstration; in a real app, this would be handled by a proper auth system
      const handlePasswordCheck = (password: string) => {
        if (password === siteConfig.password) {
          handlePasswordSuccess();
        }
      };
      
      // For demo purposes only - this simulates checking the password
      // Don't do this in a real app!
      if (siteConfig.password === "1234") {
        // Auto-setup for demo
        sessionStorage.setItem("hasAccess", "true");
      }
    }
  }, [hasAccess]);
  
  return hasAccess ? <>{children}</> : <Navigate to="/" />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <RouteTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/projects" 
              element={
                <ProtectedRoute>
                  <Projects />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/project/:slug" 
              element={
                <ProtectedRoute>
                  <ProjectDetailWrapper />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </RouteTransition>
      </BrowserRouter>
  </QueryClientProvider>
);

export default App;
