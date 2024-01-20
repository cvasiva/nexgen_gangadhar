import React, { useEffect, useState } from "react";
import "./Styles/View_Portfolio_Page.css";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import { social_media } from "./HomePage/HomePagejson";
import Navbarsecond from "./context/Navbarsecond";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
import Footer from "./components/Footer";
const NavItems = [
  { title: "Website", url: "/viewportfolio", cName: "nav-links" },
  {
    title: "UX UI Design",
    url: "/viewportfolio",
    cName: "nav-links",
  },
  {
    title: "Corporate Campaigns",
    url: "/viewportfolio",
    cName: "nav-links",
  },
  {
    title: "Social Media & Branding",
    url: "/viewportfolio",
    cName: "nav-links",
  },
];
const Socialmedia_Branding = () => {
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
      <div className="protfilo_bg">
        {navbar ? (
          <>
            <nav
              className="NavbarItems py-4"
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
                      <CiMenuBurger className="text-white fw-bolder" />{" "}
                      <span className="ms-2 fs-4">Menu</span>
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
              <Link to="/social_media_designs" className="link_web1">
                Social Media & Branding
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <Row className="Row_margin_view d-flex justify-content-center mx-3">
            {social_media.map((item, i) => {
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
                    to={`/social_media_designs/${item.id}`}
                    className="design_link_style"
                  >
                    <img
                      src={require(`./Socialmedia_Banners/${item.pathimage}`)}
                      className="w-100 image-responsive image_hover_effect"
                      alt="webpage"
                      style={{ width: "100%" }}
                    />
                    <Link
                      to={`/social_media_designs/${item.id}`}
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
      <Footer />
    </div>
  );
};
export default Socialmedia_Branding;
