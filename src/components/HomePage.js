import React, { useEffect, useRef, useState } from "react";
import "../Styles/HomePage.css";
import Homeimage2 from "../Images/HomeImages/Homeimage2.png";
import { BsArrowRight } from "react-icons/bs";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import malelogo from "../Images/AboutImages/malelogo.png";
import nexgen_log_seection from "../Images/HomeImages/nexgen_log_seection.png";
import companes_logs_home123 from "../Images/AboutImages/companes_logs_home123.png";
import companelogomobile from "../Images/AboutImages/companelogomobile.png";
import FrameHome9 from "../Images/HomeImages/FrameHome9.png";
import FrameHome8 from "../Images/HomeImages/FrameHome8.png";
import FrameHome7 from "../Images/HomeImages/FrameHome7.png";
import FrameHome10 from "../Images/HomeImages/FrameHome10.png";
import FrameHome6 from "../Images/HomeImages/FrameHome6.png";
import FrameHome5 from "../Images/HomeImages/FrameHome5.png";
import FrameHome4 from "../Images/HomeImages/FrameHome4.png";
import FrameHome3 from "../Images/HomeImages/FrameHome3.png";
import FrameHome2 from "../Images/HomeImages/FrameHome2.png";
import FrameHome1 from "../Images/HomeImages/FrameHome1.png";
import ScrollCarousel from "scroll-carousel-react";
import { Col, Row } from "reactstrap";
import { hamePage } from "../HomePage/HomePagejson";
import system_homeimage from "../Images/HomeImages/system_homeimage.png";
import PriceandPlan from "./PriceandPlan";
import FaqHandbook from "./FaqHandbook";
import video from "../Images/HomeImages/nexgen_mp4.mp4";
import profile_homelogo12 from "../Images/HomeImages/profile_homelogo12.png";
import desine_homegold from "../Images/HomeImages/desine_homegold.png";
import desine_homeimages from "../Images/HomeImages/desine_homeimages.png";
import desine_homeimages3 from "../Images/HomeImages/desine_homeimages3.png";
import desine_homeimages2 from "../Images/HomeImages/desine_homeimages2.png";
import NavbarPage from "../context/Navbar";
import { FcGoogle } from "react-icons/fc";
import Fade from "react-reveal/Fade";
import homepagelogo2 from "../Images/AboutImages/homepagelogo2.png";
import homelogpage1 from "../Images/AboutImages/homelogpage1.png";
import whateabutbg from "../Images/AboutImages/whateabutbg.png";
import bgbackimghome from "../Images/AboutImages/bgbackimghome.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { PiStarFourFill } from "react-icons/pi";
function HomePage() {
  const [, setItems] = useState(10);
  useEffect(() => {
    if (window.innerWidth < 576) setItems(1);
    else setItems(3);
    window.addEventListener("resize", () => {
      if (window.innerWidth < 576) setItems(1);
      else setItems(3);
    });
  }, []);
  var TxtRotate = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };
  TxtRotate.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";
    var that = this;
    var delta = 300 - Math.random() * 100;
    if (this.isDeleting) {
      delta /= 2;
    }
    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }
    setTimeout(function () {
      that.tick();
    }, delta);
  };
  window.onload = function () {
    var elements = document.getElementsByClassName("txt-rotate");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-rotate");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
    document.body.appendChild(css);
  };
  const [toggle1, setToggle1] = useState(true);
  useEffect(() => {
    if (!toggle1) {
      var val = {};
      hamePage.map((v) => (val[v.id] = false));
      setToggle1(val);
    }
  }, [toggle1]);
  const videoEl = useRef(null);
  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
  };
  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    <>
      <NavbarPage />
      <div className="" style={{ overflow: "hidden", overflowX: "hidden" }}>
        <Fade bottom>
          <div className="home_dev_card ">
            <div className="slideimg1"></div>
            <div className="slideimgRight1"></div>
            <div className="dev_flex_home tdi9mq0 tdi9mq4">
              <video
                src={video}
                type="video/mp4"
                autostart
                autoPlay
                className="videoTag"
                playsInline
                loop
                muted
                alt="All the devices"
                ref={videoEl}
              />
              <div className="higher_home1">
                <div className="align-item-center">
                  <div>
                    <div className="home_dev_font">
                      We build Stunning
                      <br />
                      Websites to boost
                      <br />
                      your <span className="home_dev1_Revenue">Revenue</span>
                    </div>
                  </div>
                  <div className=" dev_flex1_home">
                    <div>
                      <Link to="contacts">
                        <button className="home_botton py-2 px-3">
                          <img
                            src={Homeimage2}
                            alt="Homeimage2"
                            style={{ width: "22px" }}
                          />{" "}
                          Get a Proposal
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="margin_our">
                  <div className="d-flex gap-2">
                    <div>
                      <IoIosStar className="homestar_color" />
                    </div>
                    <div>
                      <IoIosStar className="homestar_color" />
                    </div>
                    <div>
                      <IoIosStar className="homestar_color" />
                    </div>
                    <div>
                      <IoIosStar className="homestar_color" />
                    </div>
                    <div>
                      <IoIosStarHalf className="homestar_color" />
                    </div>
                  </div>
                  <div className="home_dev3_our pt-2">
                    “Our new site has a 60% higher
                    <br />
                    conversion rate than our old one”
                  </div>
                  <div className="d-flex gap-2 my-2">
                    <div className="text-center">
                      <img
                        src={malelogo}
                        alt="Homeimage3"
                        width={50}
                        style={{ position: "relative" }}
                      />{" "}
                    </div>
                    <div className="">
                      <div className="home_font1_aswin">RamaKrishna K</div>
                      <div className="home_font2_aswin">Zell Founder</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="corosal_image">
                <img
                  src={homepagelogo2}
                  alt="homepagelogo2"
                  className="homepagelogo2"
                />
                <img
                  src={homelogpage1}
                  alt="homelogpage1"
                  className="homelogpage1"
                />
                <div className="centermargi">
                  <div className="margin_our12">
                    <div className="centermargi1">
                      <div>
                        <IoIosStar className="homestar_color" />
                      </div>
                      <div>
                        <IoIosStar className="homestar_color" />
                      </div>
                      <div>
                        <IoIosStar className="homestar_color" />
                      </div>
                      <div>
                        <IoIosStar className="homestar_color" />
                      </div>
                      <div>
                        <IoIosStarHalf className="homestar_color" />
                      </div>
                    </div>
                    <div className="home_dev3_our pt-2">
                      “Our new site has a 60% higher
                      <br />
                      conversion rate than our old one”
                    </div>
                    <div className="d-flex gap-4 my-2 justify-content-center">
                      <div className="text-center">
                        <img
                          src={malelogo}
                          alt="Homeimage3"
                          width={50}
                          style={{ position: "relative" }}
                        />{" "}
                      </div>
                      <div className="py-1">
                        <div className="home_font1_aswin">RamaKrishna K</div>
                        <div className="home_font2_aswin">Zell Founder</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home_dev5_card">
            <ScrollCarousel autoplay autoplaySpeed={80} speed={5}>
              <div className="d-flex w-100 gap-3 py-1">
                <div>
                  {" "}
                  <PiStarFourFill />
                </div>
                <div className="home_webfont w-100 text-nowrap">
                  Web Development & Design
                </div>
              </div>
              <div className="d-flex w-100 gap-3 py-1">
                <div>
                  <PiStarFourFill />
                </div>
                <div className="home_webfont w-100 text-nowrap">
                  Mobile applications
                </div>
              </div>
              <div className="d-flex w-100 gap-3 py-1">
                <div>
                  {" "}
                  <PiStarFourFill />
                </div>
                <div className="home_webfont w-100 text-nowrap">
                  UX / UI Design
                </div>
              </div>
              <div className="d-flex w-100 gap-3 py-1">
                <div>
                  {" "}
                  <PiStarFourFill />
                </div>
                <div className="home_webfont w-100 text-nowrap">
                  E - Commerce website
                </div>
              </div>
              <div className="d-flex w-100 gap-3 py-1">
                <div>
                  <PiStarFourFill />
                </div>
                <div className="home_webfont w-100 text-nowrap">
                  Branding & Design
                </div>
              </div>
              <div className="d-flex w-100 gap-3 py-1">
                <div>
                  <PiStarFourFill />
                </div>
                <div className="home_webfont w-100 text-nowrap">
                  Dashboard UI
                </div>
              </div>
            </ScrollCarousel>
          </div>
          <div className="home_card3_bg">
            <div className="home_bg_images">
              <div className="tdi9mq0 tdi9mq4d pypadingvi">
                <div className="d-flex justify-content-center">
                  <div className="Covering_hme_font width_top py-3">
                    Top{" "}
                    <span className="Design_home_font">
                      Design and Development
                    </span>{" "}
                    Company Covering India and it's Vicinity
                  </div>
                </div>
                <div className="d-flex justify-content-center">
                  <div className="Nexgen_home_at text-center">
                    At Nexgen, we specialize in Custom Web Design solutions
                    tailored to your specific needs. Our team crafts Responsive
                    Web Designs that adapt seamlessly across{" "}
                  </div>
                </div>
                <div className="button_flex_homeget">
                  <button className="Proposal_home_button py-1">
                    <Link
                      to="contacts"
                      style={{ textDecoration: "none", color: "#FDF9FF" }}
                    >
                      Get Proposal
                    </Link>
                  </button>
                  <button className="Proposal_home_button1 py-1">
                    <Link
                      to="contacts"
                      style={{ textDecoration: "none", color: "#0F1825" }}
                    >
                      Get Website Audit
                    </Link>
                  </button>
                </div>
              </div>
              <div className="pb-5">
                <ScrollCarousel
                  // smartSpeed={true}
                  autoplay
                  autoplaySpeed={80}
                  speed={5}
                >
                  <div className="framasieflex">
                    <div>
                      {" "}
                      <img
                        src={FrameHome9}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome8}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome7}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome10}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome6}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome5}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome4}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome3}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome2}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                    <div>
                      {" "}
                      <img
                        src={FrameHome1}
                        alt="FrameHome9"
                        className="FrameHome9_style"
                      />
                    </div>
                  </div>
                </ScrollCarousel>
              </div>
            </div>
            <div className="home_gride_bg_color">
              <div className="home_gride tdi9mq0 py-4">
                <div>
                  <div className="home_yourfont1">
                    Your{" "}
                    <span className="home_yourfont1_Expert">
                      Expert Web Design & Development
                    </span>{" "}
                    Partner
                  </div>
                  <div className="home_arefont2 py-3">
                    Are you looking for top-notch Website Design Services that
                    resonate with your brand's uniqueness? At Nexgen, we
                    specialize in Custom Web Design solutions tailored to your
                    specific needs. Our team crafts Responsive Web Designs that
                    adapt seamlessly across devices, ensuring an optimal user
                    experience for your audience.
                  </div>
                  <div className="ensuring_flex_home">
                    <div className="w-25">
                      <img
                        src={profile_homelogo12}
                        alt="profile_homelogo12"
                        style={{ width: "100%" }}
                      />{" "}
                    </div>
                    <div className="">
                      <div className="faont_47_home">473+</div>
                      <div className="home_Happy_font">Happy customers</div>
                    </div>
                    <div className="border_happy_font"></div>
                    <div>
                      <div className="Reviews_font_home">
                        <FcGoogle className="fs-4" /> Reviews
                      </div>
                      <div>
                        <div className="d-flex gap-1">
                          <div className="font_5P_home"> 5.0 </div>
                          <div>
                            <IoIosStar className="homestar_color" />
                          </div>
                          <div>
                            <IoIosStar className="homestar_color" />
                          </div>
                          <div>
                            <IoIosStar className="homestar_color" />
                          </div>
                          <div>
                            <IoIosStar className="homestar_color" />
                          </div>
                          <div>
                            <IoIosStarHalf className="homestar_color" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-3 pb-5">
                    <Link to="contacts">
                      <button className="home_get_style_Consultation py-2 px-4">
                        Free Consultation <BsArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="py-3">
                  <img
                    src={nexgen_log_seection}
                    alt="nexgen_log_seection"
                    className="Homeimage5_style"
                  />
                </div>
              </div>
            </div>
            <div className="margi_top_desine d-flex justify-content-center">
              <Row className="tdi9mq0">
                <Col md={3} sm={6}>
                  <div className="Design_home_card12">
                    <div>
                      <img
                        src={desine_homegold}
                        alt="desine_homegold"
                        style={{ width: "20%" }}
                      />{" "}
                    </div>
                    <div className="Responsive_font_home">
                      Responsive Design & Development Services
                    </div>
                    <div className="Fintech_home_font py-2">
                      Boost online presence with sleek designs. Google favors
                      mobile-friendly sites; our responsive design ensures
                      consistency, user-friendliness, and engagement.
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="Design_home_card12">
                    <div>
                      <img
                        src={desine_homeimages}
                        alt="desine_homeimages"
                        style={{ width: "20%" }}
                      />{" "}
                    </div>
                    <div className="Responsive_font_home">
                      E-commerce Solutions
                      <br />
                      <span style={{ visibility: "hidden" }}>1</span>
                    </div>
                    <div className="Fintech_home_font py-2">
                      Nexgen crafts E-commerce Solutions, tailoring platforms to
                      your brand, prioritizing user experience, ensuring secure
                      payments, and data protection.
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="Design_home_card12">
                    <div>
                      <img
                        src={desine_homeimages2}
                        alt="desine_homeimages1"
                        style={{ width: "20%" }}
                      />{" "}
                    </div>
                    <div className="Responsive_font_home">
                      UI/UX Design Excellence
                    </div>
                    <div className="Fintech_home_font py-2">
                      Prioritize user-centric design, marrying aesthetics with
                      functionality. Designs ensure beauty, usability, and
                      cross-device performance.
                    </div>
                  </div>
                </Col>
                <Col md={3} sm={6}>
                  <div className="Design_home_card12">
                    <div>
                      <img
                        src={desine_homeimages3}
                        alt="desine_homeimages2"
                        style={{ width: "20%" }}
                      />{" "}
                    </div>
                    <div className="Responsive_font_home">
                      Social media Design & branding
                    </div>
                    <div className="Fintech_home_font py-2">
                      Create compelling stories with visuals for lasting impact.
                      Ensure consistent brand image on social channels,
                      reinforcing trust.
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="firmspading">
              <div className="home_mostly_font mt-5">
                Experienced with top overseas firms
              </div>
              <div className="text-center  pt-4 pb-5">
                <img
                  src={companes_logs_home123}
                  alt="companes_logs_home123"
                  className="companes_logs_homestyle"
                />
                <img
                  src={companelogomobile}
                  alt="companelogomobile"
                  className="companelogomobilestyle"
                />
              </div>
            </div>
          </div>
          <div className="Hpme_card5_bg">
            <div>
              <div className="d-flex justify-content-center tdi9mq0 tdi9mq4">
                <div className="bg_home_card_makes">
                  <div>
                    <img
                      src={whateabutbg}
                      alt="whateabutbg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Hpme_card5_bg1">
            <div>
              <div className="d-flex justify-content-center">
                <div className="bg_home_card_makes">
                  <div>
                    <img
                      src={bgbackimghome}
                      alt="bgbackimghome"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
        <div className="Hpme_card5_bg_create ">
          <div className="dev_flex_home_constant tdi9mq0 tdi9mq4">
            <div className="system_homeimage13">
              <div className="home_Create_font">
                Achieve{" "}
                <span className="constant_home_Create_font">
                  High Returns (ROI)
                </span>{" "}
                using your website.
              </div>
              <div className="Homeimage2_button pb-5 pt-4">
                <Link to="contacts">
                  <button className="home_botton py-2 px-3">
                    <img
                      src={Homeimage2}
                      alt="Homeimage2"
                      style={{ width: "22px" }}
                    />{" "}
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
            <div className="system_homeimage12">
              <img
                src={system_homeimage}
                alt="system_homeimage"
                className="system_homeimage"
              />{" "}
            </div>
          </div>
        </div>
        <div className="home_card3_bg">
          <PriceandPlan />
        </div>
        <div className="home_card6_bg pb-5">
          <FaqHandbook />
        </div>
        <Footer />
      </div>
    </>
  );
}
export default HomePage;
