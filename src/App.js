import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ServicesPage from "./components/ServicesPage";
import ViewPortfolioPage from "./components/View_Portfolio_Page";
import "@fontsource/inter";
import "@fontsource/inter/400.css";
import DesignPage from "./components/Design_Page";
import Contacts from "./components/Contacts";
import ScrollToTop from "./context/ScrollToTop";
import ErrorBoundary from "./ErrorBoundary";
import MenuNavigations from "./components/Menu_Navigations";
import UiuxMenuPage from "./components/Ui_ux_Menu_Page";
import SociamediadesignPage from "./components/Social_media_design_Page";
import SocialmediaBranding from "./Socialmedia_Branding";
const App = () => {
  return (
    <div className="app_bg">
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <Routes basename="/nexgen_gangadhar">
            <Route element={<HomePage />} />
            <Route exact path="/nexgen_gangadhar" element={<HomePage />} />
            <Route exact path="/" element={<HomePage />} />
            <Route  path="*" element={<ErrorBoundary />} />
            <Route  path="/services" element={<ServicesPage />} />
            <Route
              
              path="/viewportfolio"
              element={<ViewPortfolioPage />}
            />
            <Route  path="/viewportfolio/:id" element={<DesignPage />} />
            <Route  path="/designs" element={<MenuNavigations />} />
            <Route  path="/designs/:id" element={<MenuNavigations />} />
            <Route
              
              path="/designs/:id/:designs"
              element={<UiuxMenuPage />}
            />
            <Route
              
              path="/social_media_designs"
              element={<SocialmediaBranding />}
            />
            <Route
              
              path="/social_media_designs/:id"
              element={<SociamediadesignPage />}
            />
            <Route  path="/contacts" element={<Contacts />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </div>
  );
};
export default App;
