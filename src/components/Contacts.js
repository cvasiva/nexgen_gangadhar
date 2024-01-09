import React from "react";
import imagehandbook from "../Images/AboutImages/imagehandbook.png";
import NavbarPage from "../context/Navbar";
const Contacts = () => {
  return (
    <div>
    <NavbarPage/>
    <div className="home_card6_bg pb-5">
      <div className="letspaddingcrete">
        <div className="Together_handbook pb-5">
          Let's Create Your <br />
          Digital Success Story Together 🤝
        </div>
        <div className="d-flex justify-content-center">
          <div className="Consultation_handbook">
            <div className="Consultation1_faq align-item-center">
              <div className="w-100">
                <div className="Free_handbook">Free Consultation 🤙</div>
                <div className="hearhandbook">
                  We’re happy to hear from you!{" "}
                </div>
                <div className=" py-3">
                  <div className="">
                    <div className="py-2">
                      <label className="name_handbook">Name*</label>
                      <br />
                      <input
                        className="handbook_input"
                        placeholder="Enter Your Name"
                      />
                    </div>
                    <div className="py-2">
                      <label className="name_handbook">Phone Number*</label>
                      <br />
                      <input className="handbook_input" placeholder="Enter Your Mobile" />
                    </div>
                    <div className="py-2">
                      <label className="name_handbook">Mail ID*</label>
                      <br />
                      <input className="handbook_input" placeholder="Enter Your Email" />
                    </div>
                    <div className="py-2">
                      <label className="name_handbook">Interested in</label>
                      <br />
                      <input className="handbook_input" placeholder="" />
                    </div>
                    <div className="d-flex gap-3">
                      <div className="py-2 w-50">
                        <label className="name_handbook">
                          Preferred Time to talk
                        </label>
                        <br />
                        <input className="handbook_input" placeholder="" />
                      </div>
                      <div className="py-2 w-50">
                        <label className="name_handbook">Preferred Mode</label>
                        <br />
                        <input className="handbook_input" placeholder="" />
                      </div>
                    </div>
                    <div className="text-center">
                      <button className="handbook_submit py-3 my-2">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <img
                  src={imagehandbook}
                  alt="imagehandbook"
                  className="imagehandbook_syle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contacts;