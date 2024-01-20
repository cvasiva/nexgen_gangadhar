import React, { useRef } from "react";
import NavbarPage from "../context/Navbar";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Contacts = () => {
  const form = useRef();
  const Navigate = useNavigate();

  var intialvalues = {
    Name: "",
    Phone_Number: "",
    Mail_id: "",
    Interested: "",
  };

  const Validations = Yup.object({
    Name: Yup.string().required("Required"),
    Phone_Number: Yup.string().required("Required"),
    Mail_id: Yup.string().required("Required"),
    Interested: Yup.string().required("Required"),
  });
  const { values, handleSubmit, handleChange, errors } = useFormik({
    initialValues: intialvalues,
    validationSchema: Validations,
    onSubmit: () => {
      emailjs
        .sendForm(
          "service_js8o73p",
          "template_i4avavj",
          form.current,
          "r3px-G0tW4EdqpPcJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            Navigate("/");
          },
          (error) => {
            console.log(error.text);
          }
        );
    },
  });
  return (
    <div>
      <NavbarPage />
      <div className="home_card6_bg">
        <div className="letspaddingcrete">
          <div className="Together_handbook pb-5">
            Let's Create Your <br />
            Digital Success Story Together 🤝
          </div>
          <div className="d-flex justify-content-center">
            <div className="Consultation_handbook">
              <div className="Consultation1_faq align-item-center">
                <div className="width_freedback">
                  <div className="Free_handbook">Free Consultation 🤙</div>
                  <div className="hearhandbook">
                    We’re happy to hear from you!{" "}
                  </div>
                  <form ref={form} onSubmit={handleSubmit}>
                    <div className=" py-3">
                      <div className="">
                        <div className="py-2">
                          <label className="name_handbook">Name*</label>
                          <br />
                          <input
                            className="handbook_input"
                            placeholder="Name"
                            name="Name"
                            value={values.Name}
                            onChange={handleChange}
                          />
                          <div className="text-danger">{errors.Name}</div>
                        </div>
                        <div className="py-2">
                          <label className="name_handbook">Phone Number*</label>
                          <br />
                          <input
                            className="handbook_input"
                            placeholder="Phone Number"
                            name="Phone_Number"
                            value={values.Phone_Number}
                            onChange={handleChange}
                          />
                          <div className="text-danger">
                            {errors.Phone_Number}
                          </div>
                        </div>
                        <div className="py-2">
                          <label className="name_handbook">Mail ID*</label>
                          <br />
                          <input
                            className="handbook_input"
                            placeholder="Mail ID"
                            name="Mail_id"
                            value={values.Mail_id}
                            onChange={handleChange}
                          />
                          <div className="text-danger">{errors.Mail_id}</div>
                        </div>
                        <div className="py-2">
                          <label className="name_handbook">Interested in</label>
                          <br />
                          <select
                            className="handbook_input"
                            // placeholder=""
                            name="Interested"
                            value={values.Interested}
                            onChange={handleChange}
                          >
                            <option>Select</option>
                            <option>Website Design & Development</option>
                            <option>E-commerce Solutions</option>
                            <option>UI/UX Design</option>
                            <option>Social Media Design</option>
                            <option>Get Website Audit</option>
                          </select>
                          <div className="text-danger">{errors.Interested}</div>
                        </div>
                        {/* <div className="d-flex gap-3">
                        <div className="py-2 w-50">
                          <label className="name_handbook">
                            Preferred Time to talk
                          </label>
                          <br />
                          <input className="handbook_input" placeholder="" />
                        </div>
                        <div className="py-2 w-50">
                          <label className="name_handbook">
                            Preferred Mode
                          </label>
                          <br />
                          <input className="handbook_input" placeholder="" />
                        </div>
                      </div> */}
                        <div className="text-center">
                          <button className="handbook_submit py-3 my-2">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="laptogaqimage_bg px-5">
                  <div className="Information_font">Contact Information</div>
                  <div className="withinfont">
                    Fill up the form and our Team will get back to you within 2
                    hours.
                  </div>
                  <div className="d-flex justify-content-start py-3">
                    <div>
                      <div className="BsFillTelefont pt-2 d-flex gap-2">
                        <BsFillTelephoneFill
                          className="fs-5"
                          style={{ color: "#FFC644" }}
                        />{" "}
                        +91 93443 38444
                      </div>
                      <div className="BsFillTelefont pt-2 d-flex gap-2">
                        <IoMail style={{ color: "#FFC644" }} className="fs-5" />{" "}
                        aravind.nexgen@gmail.com
                      </div>
                      <div className="BsFillTelefont pt-2 d-flex gap-2">
                        <FaLocationDot
                          style={{ color: "#FFC644" }}
                          className="fs-5"
                        />{" "}
                        <div>
                          Bangalore,
                          <br /> Basavanagudi, Karnataka-560004 <br />
                          <div className="mt-3">Chennai,</div>
                          T-nagar, Tamil Nadu-600017 <br />
                          Your Digital Partner from India❤️
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contacts;
