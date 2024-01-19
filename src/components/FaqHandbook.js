import React, { useEffect, useState } from "react";
import "../Styles/FaqHandbookstyle.css";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";
import { Queries_Decoded } from "../HomePage/HomePagejson";
import laptogaqimage from "../Images/AboutImages/laptogaqimage.png";
import digital from "../Images/AboutImages/digital.png";
import profile_homelogo12 from "../Images/HomeImages/profile_homelogo12.png";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const FaqHandbook = () => {
  const [toggle, setToggle] = useState(true);
  useEffect(() => {
    if (!toggle) {
      var val = {};
      Queries_Decoded.map((v) => (val[v.id] = false));
      setToggle(!val);
    }
  }, [toggle]);
  const handledropdown = (item) => {
    setToggle({ ...toggle, [item.id]: !toggle[item.id] });
  };
  return (
    <>
      <div className="tdi9mq0 tdi9mq4">
        <div className="Queries_handbook py-5">
          Queries Decoded:{" "}
          <span className="Queries_handbookfont">Your FAQ Handbook</span>
        </div>
        <div className="faqhand_bg_grid pb-3">
          {Queries_Decoded.map((item, index) => {
            console.log("toggle[item.id]", toggle[item.id]);
            return (
              <div className="">
                <div className="faqhand_bg_white">
                  <div className={"invoice_accordintrue"}>
                    <div
                      className="faqhandbook_arrowicons pointer"
                      onClick={(e) => handledropdown(item)}
                    >
                      <div className="Professional_font">
                        {" "}
                        {item.Professional}
                      </div>
                      <div>
                        <div
                          className="pointer"
                          style={{ transition: "all 1m ease" }}
                          onClick={(e) => handledropdown(item)}
                          width={15}
                        >
                          {toggle[item.id] ? (
                            <BsChevronUp className="BsChevronDown_color fw-bold fs-5" />
                          ) : (
                            <BsChevronDown className="BsChevronDown_color fw-bold fs-5" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    {" "}
                    {toggle[item.id] && (
                      <div className="content_bspan"> {item.discription} </div>
                    )}{" "}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="py-5 " style={{ background: "#FFF" }}>
        <div className="tdi9mq0 tdi9mq4">
          <div className="your_faq">
            <div className="pading_callfaq">
              <div className="Digital_faq">
                Let's Create Your{" "}
                <span className="Digital_faq1">Digital Success</span> Story
                Together 🤝
              </div>
              <div className="ensuring_flex_home pt-3">
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
              <div className="ensuring_flex_home1 text-center pt-3">
                <img src={digital} alt="digital" style={{width:"80%"}}/>
              </div>
            </div>
            <div className="callback_flexfaq">
              <div className="top_call_back w-100 txet-center">
                {" "}
                <Link to="contacts">
                  <button className="Call_faq_style py-2">
                    Get a Call back
                  </button>
                </Link>
              </div>
              <div className="text-end w-100">
                <img
                  src={laptogaqimage}
                  alt="laptogaqimage"
                  className="laptogaqimage_style"
                />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqHandbook;
