import React, { useEffect, useState } from "react";
import "../Styles/View_Portfolio_Page.css";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import { websit } from "../HomePage/HomePagejson";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBars } from "react-icons/fa";
import { VscClose } from "react-icons/vsc";
import Navbarsecond from "../context/Navbarsecond";
import Footer from "./Footer";
const NavItems = [
  {
    title: "Website",
    url: "/viewportfolio",
    cName: "nav-links",
  },
  {
    title: "Ux UI Designs",
    url: "/designs/ui_ux_designs",
    cName: "nav-links",
  },
  {
    title: "Corporate Campaigns",
    url: "/designs/corporate_campaigns",
    cName: "nav-links",
  },
  {
    title: "Social Media & Branding",
    url: "/social_media_designs",
    cName: "nav-links",
  },
];
const View_Portfolio_Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  
  return (
    <div>
      
      <div>
        {navbar ? (
          <>
            <nav
              className="NavbarItems ps-4"
              style={{
                background:
                  "linear-gradient(224deg, #172271 9.84%, rgba(0, 0, 0, 0.00) 66.2%), #040229",
              }}
            >
              <div className="Hamburger-Cross-Icons" onClick={handleClick}>
                <div className="text-white fw-normal fs-6">
                  {open ? (
                    <VscClose className="text-white fw-bold" />
                  ) : (
                    <div className="d-flex align-items-center ">
                      <FaBars className="text-white fw-bolder fs-2" />{" "} &nbsp; &nbsp;
                      <span className="ms-2 fs-1">Menu</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="d-flex justify-content-center mx-auto">
                <div className={open ? "MenuItems active " : "MenuItems"}>
                  {NavItems.map((Item, index) => {
                    return (
                      <div key={index}>
                        <Link to={Item.url} className={`${Item.cName} ms-5`}>
                          {Item.title}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            </nav>
          </>
        ) : (
          <Navbarsecond />
        )}
        <div className="protfilo_bg ">
          <div
            className="py-5 d-flex justify-content-center "
            style={{ zIndex: "999" }}
          >
            <div
              className="ul_portfilo_vie_navbar  mt-5  shadow position-sticky top-0"
              style={{ zIndex: 999 }}
            >
              <div className="websit_font">
                <Link to="/viewportfolio" className="link_web1">
                  {" "}
                  Website
                </Link>
              </div>
              <div className="websit_font1">
                <Link to="/designs/ui_ux_designs" className="link_web1">
                  UX UI Design
                </Link>
              </div>
              <div className="websit_font1">
                <Link to="/designs/corporate_campaigns" className="link_web1">
                  Corporate Campaigns
                </Link>
              </div>
              <div className="websit_font1">
                <Link to="/designs/social_media" className="link_web1">
                  Social Media & Branding
                </Link>
              </div>
            </div>
          </div>
          <div className="">
            <Row className="Row_margin_view d-flex justify-content-center mx-3">
              {websit.map((item, i) => {
                return (
                  <Col
                    key={i}
                    md={4}
                    sm={6}
                    xs={12}
                    data-aos="fade-up"
                    className="text-center px-3"
                  >
                    <Link
                      to={`/viewportfolio/${item.id}`}
                      className="design_link_style"
                    >
                      <img
                        src={require(`../Images/Website/${item.pathimage}`)}
                        className="w-100 image-responsive image_hover_effect"
                        alt="webpage"
                        style={{ width: "100%" }}
                      />
                      <Link
                        to={`/viewportfolio/${item.id}`}
                        className="design_link_style"
                      >
                        <div className="titel_web text-decoration-none">
                          {item.title}
                        </div>
                      </Link>
                      <div className="year_web mb-5">{item.year}</div>
                    </Link>
                  </Col>
                );
              })}
            </Row>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default View_Portfolio_Page;
