import React, { useEffect, useState } from "react";
import "../Styles/View_Portfolio_Page.css";
import { Link } from "react-router-dom";
import { corporate_banners } from "../HomePage/HomePagejson";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { Card } from "reactstrap";
const Corporate_campaigns = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, [])
  const [navbar, setNavbar] = useState(false);
  const changeNavbar = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <div>
      <div className="protfilo_bg">
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
        <div>
          <div className="text-center fs-4 text-white fw-400 mb-4">
            Explore our collection of newsletters and <br /> posters for leading
            corporates
          </div>
          <div>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 3, 900: 4 }}
              className="mx-2"
            >
              <Masonry gutter='10px' className="grid">
                {corporate_banners.map((item, i) => {
                  return (
                    <Card className='shadow rounded rounded-3 p-1 bg-dark border border-dark' data-aos="fade-up" key={i} style={{opacity:'0.8'}}>
                      <img
                        src={require(`../Corporate-Designs/${item.pathimage}`)}
                        style={{ width: "100%",height:'100%',display:'inline-block' }}
                        className="shadow rounded  rounded-3"
                        alt="webpage"
                      />
                    </Card>
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Corporate_campaigns;
