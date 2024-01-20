import React from "react";
import "../Styles/PriceandPlan.css";
// import price_profileimage from "../Images/AboutImages/price_profileimage.png";
import ScrollCarousel from "scroll-carousel-react";
// import { RiAddBoxLine } from "react-icons/ri";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
// import Female from "../Images/AboutImages/Female.png";
// import malelogo from "../Images/AboutImages/malelogo.png";
// import Malelogoboy from "../Images/AboutImages/Malelogoboy.png";
// import Malelogobo from "../Images/AboutImages/Malelogobo.png";
// import logofemalelaka from "../Images/AboutImages/logofemalelaka.png";
// import logofemalela from "../Images/AboutImages/logofemalela.png";
// import logofemalelala from "../Images/AboutImages/logofemalelala.png";
// import logofemalelali from "../Images/AboutImages/logofemalelali.png";
const PriceandPlan = () => {
  const helped = [
    {
      id: 1,
      Lacus:
        "Thrilled with our website! The team understood our brand, delivered beyond expectations—absolute digital magic!",
      name: `Hellen Jummy`,
      disignation: "Financial Counselor",
      icon: "Female.png",
    },
    {
      id: 2,
      Lacus:
        "Couldn't be happier with our site. Seamless collaboration, innovative solutions—our online identity elevated remarkably!",
      name: "Ralph Edwards",
      disignation: "Math Teacher",
      icon: "malelogo.png",
    },
    {
      id: 3,
      Lacus:
        "Kudos to the team! Our website reflects perfection. They captured our essence and crafted a masterpiece.",
      name: "Hellena John",
      disignation: "Success Edge",
      icon: "Malelogoboy.png",
    },
  ];
  const helped1 = [
    {
      id: 1,
      Lacus:
        "Impressed by their client-centric approach. Our website is a testament to their dedication and excellence.",
      name: `Hellen Jummy`,
      disignation: "Financial Counselor",
      icon: "logofemalelaka.png",
    },
    {
      id: 2,
      Lacus:
        "Exemplary service! From ideation to execution, they turned our ideas into a visually stunning and functional website.",
      name: "Ralph Edwards",
      disignation: "Aktis engineering",
      icon: "logofemalela.png",
    },
    {
      id: 3,
      Lacus:
        "Bravo! The team seamlessly integrated our feedback, delivering a website that truly resonates with our audience.",
      name: "Hellena John",
      disignation: "Success Edge",
      icon: "logofemalelala.png",
    },
  ];

  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: "#FFF",
      color: "rgba(0, 0, 0, 0.87)",
      fontSize: theme.typography.pxToRem(12),
      borderRadius: "18.45px",
      boxShadow: "0px 8.6px 43.001px -2.15px rgba(6, 12, 59, 0.08)",
      maxWidth: "383.244px",
    },
  }));
  return (
    <div className="">
      <div>
        <div className="Hear_price">Hear from those we've helped</div>
        <div className="d-flex justify-content-center">
          <div className="Nexgen_pricewe pt-3 px-2">
            At Nexgen, we specialize in Custom Web Design solutions tailored to
            your specific needs. Our team crafts Responsive Web Designs that
            adapt seamlessly across{" "}
          </div>
        </div>
        <div className="">
          {/* <div className="slideimg"></div>
          <div className="slideimgRight"></div> */}
          {/* <div className="padingegs d-flex justify-content-center">
            <div className="back_styleprice">
              <div
                className=""
                style={{ marginTop: "5rem", marginLeft: "60%" }}
              >
                <span
                >
                  <div className="Lacus_price_bg ">
                    <p className="vestibulum_font_price">
                      Sagittis nunc egestas leo et malesuada urna risus. Morbi
                      proin et cras aliquam. Diam tellus, amet, hac imperdiet.
                      Tellus mi volutpat tellus, congue malesuada sit nisl donec
                      a.
                    </p>
                    <div className="d-flex gap-2">
                      <div className="text-center">
                        <img
                          src={price_profileimage}
                          alt="price_profileimage"
                          style={{ width: "60%" }}
                        />{" "}
                      </div>
                      <div className="py-2">
                        <div className="Hellen_price">Hellena John</div>
                        <div className="py-1 Counselor_price">
                          Aktis engineering
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>
              <div className="text-center" style={{ marginTop: "-1rem" }}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <div className="">
                        <span
                          placement="top"
                          target="ScheduleUpdateTooltip"
                          trigger="hover focus"
                          autohide={true}
                        >
                          <div className=" ">
                            <p className="vestibulum_font_price">
                              Thrilled with our website! The team understood our
                              brand, delivered beyond expectations—absolute
                              digital magic!
                            </p>
                            <div className="d-flex gap-2">
                              <div className="text-center">
                                <img
                                  src={Female}
                                  alt="Female"
                                  style={{ width: "60%" }}
                                />{" "}
                              </div>
                              <div className="py-2">
                                <div className="Hellen_price">Hellen Jummy</div>
                                <div className="py-1 Counselor_price">
                                  Financial Counselor
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </React.Fragment>
                  }
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#000",
                    }}
                  >
                    <RiAddBoxLine className="fs-4" />
                  </button>
                </HtmlTooltip>
              </div>
              <div className="text-center" style={{ marginTop: "4rem" }}>
                <HtmlTooltip
                  title={
                    <React.Fragment>
                      <div className="">
                        <span
                          placement="top"
                          target="ScheduleUpdateTooltip"
                          trigger="hover focus"
                          autohide={true}
                        >
                          <div className=" ">
                            <p className="vestibulum_font_price">
                              Couldn't be happier with our site. Seamless
                              collaboration, innovative solutions—our online
                              identity elevated remarkably!
                            </p>
                            <div className="d-flex gap-2">
                              <div className="text-center">
                                <img
                                  src={malelogo}
                                  alt="malelogo"
                                  style={{ width: "60%" }}
                                />{" "}
                              </div>
                              <div className="py-2">
                                <div className="Hellen_price">
                                  Ralph Edwards
                                </div>
                                <div className="py-1 Counselor_price">
                                  Math Teacher
                                </div>
                              </div>
                            </div>
                          </div>
                        </span>
                      </div>
                    </React.Fragment>
                  }
                >
                  <button
                    style={{
                      background: "none",
                      border: "none",
                      color: "#000",
                    }}
                  >
                    <RiAddBoxLine className="fs-4" />
                  </button>
                </HtmlTooltip>
              </div>
              <div className="d-flex gap-3">
                <div className="text-center" style={{ marginTop: "-4rem" }}>
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Kudos to the team! Our website reflects
                                perfection. They captured our essence and
                                crafted a masterpiece.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={Malelogoboy}
                                    alt="Malelogoboy"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena John
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Success Edge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
                <div
                  className="text-center"
                  style={{ marginTop: "13rem", marginLeft: "10%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Thank you for making our vision a reality.
                                Responsive, creative, and a joy to work with!
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={Malelogobo}
                                    alt="Malelogobo"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena Siva
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Psychology Student
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div
                  className="text-center"
                  style={{ marginTop: "-10rem", marginLeft: "30%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Impressed by their client-centric approach. Our
                                website is a testament to their dedication and
                                excellence.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={logofemalelaka}
                                    alt="logofemalelaka"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellen Jummy
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Financial Counselor
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
                <div
                  className="text-center"
                  style={{ marginTop: "-13rem", marginLeft: "10%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Exemplary service! From ideation to execution,
                                they turned our ideas into a visually stunning
                                and functional website.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={logofemalela}
                                    alt="logofemalela"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Ralph Edwards
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Aktis engineering
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div
                  className="text-center"
                  style={{ marginTop: "-30%", marginLeft: "10%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Bravo! The team seamlessly integrated our
                                feedback, delivering a website that truly
                                resonates with our audience.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={logofemalelala}
                                    alt="logofemalelala"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena John
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Success Edge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
                <div
                  className="text-center"
                  style={{ marginTop: "-20rem", marginLeft: "10%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                A heartfelt thanks for the stellar website.
                                Professionalism, creativity, and a commitment to
                                perfection—remarkable experience!
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={logofemalelali}
                                    alt="logofemalelali"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena Siva
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Iproledge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div
                  className="text-center"
                  style={{ marginTop: "-20%", marginLeft: "5%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Sagittis nunc egestas leo et malesuada urna
                                risus. Morbi proin et cras aliquam. Diam tellus,
                                amet, hac imperdiet. Tellus mi volutpat tellus,
                                congue malesuada sit nisl donec a.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={price_profileimage}
                                    alt="price_profileimage"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena John
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Psychology Student
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
                <div
                  className="text-center"
                  style={{ marginTop: "10rem", marginLeft: "10%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Impressed by their client-centric approach. Our
                                website is a testament to their dedication and
                                excellence.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={logofemalelaka}
                                    alt="logofemalelaka"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellen Jummy
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Financial Counselor
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
              </div>
              <div className="d-flex gap-3">
                <div
                  className="text-center"
                  style={{ marginTop: "-29%", marginLeft: "55%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Kudos to the team! Our website reflects
                                perfection. They captured our essence and
                                crafted a masterpiece.
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={Malelogoboy}
                                    alt="Malelogoboy"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena John
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Success Edge
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
                <div
                  className="text-center"
                  style={{ marginTop: "-1rem", marginLeft: "-26%" }}
                >
                  <HtmlTooltip
                    title={
                      <React.Fragment>
                        <div className="">
                          <span
                            placement="top"
                            target="ScheduleUpdateTooltip"
                            trigger="hover focus"
                            autohide={true}
                          >
                            <div className=" ">
                              <p className="vestibulum_font_price">
                                Thank you for making our vision a reality.
                                Responsive, creative, and a joy to work with!
                              </p>
                              <div className="d-flex gap-2">
                                <div className="text-center">
                                  <img
                                    src={Malelogobo}
                                    alt="Malelogobo"
                                    style={{ width: "60%" }}
                                  />{" "}
                                </div>
                                <div className="py-2">
                                  <div className="Hellen_price">
                                    Hellena Siva
                                  </div>
                                  <div className="py-1 Counselor_price">
                                    Psychology Student
                                  </div>
                                </div>
                              </div>
                            </div>
                          </span>
                        </div>
                      </React.Fragment>
                    }
                  >
                    <button
                      style={{
                        background: "none",
                        border: "none",
                        color: "#000",
                      }}
                    >
                      <RiAddBoxLine className="fs-4" />
                    </button>
                  </HtmlTooltip>
                </div>
              </div>
            </div>
          </div> */}
          <div className=" displayvastclocr py-5">
            <div className="vestibulum_price tdi9mq0 tdi9mq4">
              <div className="price_fromflex">
                {helped.map((uesr, index) => {
                  return (
                    <div className="">
                      <div className="Lacus_price_bg ">
                        <p className="vestibulum_font_price">{uesr.Lacus}</p>
                        <div className="d-flex gap-2">
                          <div className="text-center">
                            <img
                              src={require(`../Images/AboutImages/${uesr.icon}`)}
                              alt="price_profileimage"
                              style={{ width: "60%" }}
                            />{" "}
                          </div>
                          <div className="py-2">
                            <div className="Hellen_price">{uesr.name}</div>
                            <div className="Counselor_price">
                              {uesr.disignation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="my-2">
                <div className="price_fromflex">
                  {helped1.map((uesr, index) => {
                    return (
                      <div className="">
                        <div className="Lacus_price_bg ">
                          <p className="vestibulum_font_price">{uesr.Lacus}</p>
                          <div className="d-flex gap-2">
                            <div className="text-center">
                              <img
                                src={require(`../Images/AboutImages/${uesr.icon}`)}
                                alt="price_profileimage"
                                style={{ width: "60%" }}
                              />{" "}
                            </div>
                            <div className="py-2">
                              <div className="Hellen_price">{uesr.name}</div>
                              <div className="Counselor_price">
                                {uesr.disignation}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PriceandPlan;
