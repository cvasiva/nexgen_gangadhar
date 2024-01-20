import React, { useEffect, useState } from "react";
import { NavbarBrand } from "reactstrap";
import Nexgen_icon from "../context/Images/Nexgen_icon.png";
import "../context/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
const NavbarPage = (args) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  const location = useLocation(); // once ready it returns the 'window.location' object
  const [url, setUrl] = useState(null);
  useEffect(() => {
    setUrl(location.pathname);
  }, [location]);
  return (
    <div>
      <div className="nav_bg">
        <div className={colorChange ? "nav13 nav12" : "nav13"}>
          <nav
            className={colorChange ? "nav1 tdi9mq0" : "nav1 tdi9mq0 tdi9mq4"}
          >
            <Link to="/" className="title">
              <NavbarBrand href="/">
                <img
                  src={Nexgen_icon}
                  alt="Nexgen_icon"
                  style={{ width: "40%" }}
                />
              </NavbarBrand>
            </Link>
            <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <FaTimes className="fs-2" />
              ) : (
                <FaBars className="fs-2" />
              )}
            </div>
            <ul className={menuOpen ? "open ul1" : "ul1"}>
              <li className="li1">
                <Link
                  to="/nexgen_gangadhar"
                  className={url === "/nexgen_gangadhar" ? " nav_bgfont" : "nav_bgfont1"}
                >
                  <span>Home</span>
                </Link>
              </li>
              <li className="li1">
                <Link
                  to="/services"
                  className={
                    url === "/services" ? " nav_bgfont" : "nav_bgfont1"
                  }
                >
                  Services
                </Link>
              </li>

              <li className="li1">
                <Link
                  to="/viewportfolio"
                  className={
                    url === "/viewportfolio" ? " nav_bgfont" : "nav_bgfont1"
                  }
                >
                  {" "}
                  Our Works
                </Link>
              </li>
              <li className="li1">
                <Link
                  to="/contacts"
                  className={
                    url === "/contacts" ? " nav_bgfont" : "nav_bgfont1"
                  }
                >
                  Free Consultation
                </Link>
              </li>
              {colorChange ? (
                <li className="li1 mobilenone">
                  <div className="">
                    <a
                      href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                      target="_blank"
                      className="Contact_button_nav py-1 px-3"
                    >
                      <FaWhatsapp className="fs-5" />{" "}
                      <span className="py-1">Contact Us</span>
                    </a>
                  </div>
                </li>
              ) : (
                ""
              )}
              {colorChange ? (
                <li className="li1 mobilenone1">
                  <div className="">
                    <a
                      href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                      target="_blank"
                      className="Contact_button_nav py-1 px-3"
                    >
                      <FaWhatsapp className="fs-5" />{" "}
                      <span className="py-1">Contact Us</span>
                    </a>
                  </div>
                </li>
              ) : (
                <li className="li1 mobilenone1">
                  <div className="">
                    <a
                      href="https://wa.me/919344338444?text=Hello I am looking for support with website development, Graphic design, SEO, or lead generation services"
                      target="_blank"
                      className="Contact_button_nav py-1 px-3"
                    >
                      <FaWhatsapp className="fs-5" />{" "}
                      <span className="py-1">Contact Us</span>
                    </a>
                  </div>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
export default NavbarPage;
