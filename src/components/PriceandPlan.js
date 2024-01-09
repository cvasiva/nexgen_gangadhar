import React, { useState } from 'react'
import "../Styles/PriceandPlan.css"
import { AiFillCheckCircle } from "react-icons/ai";
import sectionprice1 from "../Images/AboutImages/sectionprice1.png"
import price_profileimage from "../Images/AboutImages/price_profileimage.png"
import indamaplogo_home from "../Images/AboutImages/indamaplogo_home.png"
import ScrollCarousel from 'scroll-carousel-react';
import profile_homelogo12 from "../Images/HomeImages/profile_homelogo12.png"
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle,UncontrolledTooltip } from 'reactstrap';
import { RiAddBoxLine } from "react-icons/ri";
const PriceandPlan = () => {
    const helped = [
        {
            id: 1,
            Lacus: 'Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.',
            name: `Hellen Jummy`,
            disignation: 'Financial Counselor'
        },
        {
            id: 2,
            Lacus: 'Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.',
            name:
                'Ralph Edwards',
            disignation: 'Math Teacher'
        },
        {
            id: 3,
            Lacus: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.',
            name: 'Hellena John',
            disignation: 'Psychology Student'
        },
        {
            id: 4,
            Lacus: 'Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.',
            name: 'Hellena Siva',
            disignation: 'Psychology Student'

        },
    ];
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const checkNext = () => {
        const labels = document.querySelectorAll('#slider label');
        const nextIndex = selectedIndex === (labels.length - 1) ? 0 : selectedIndex + 1;
        setSelectedIndex(nextIndex);
    }
    const check = index => setSelectedIndex(index);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);
    return (
        <div className=''>
            <div className='tdi9mq0 tdi9mq4 py-5'>
                <div className='price_font'>Choose a package that fits your needs <br></br>with our <span className='convenient_style_price'>convenient EMI</span></div>
                <div className='price_bg_flex'>
                    <div className="price_bg py-4 my-5">
                        <div className="">
                            <div className="">
                                <section
                                    id="slider"
                                    className=""
                                >
                                    <input
                                        type="radio"
                                        name="slider"
                                        id="s1"
                                        checked={selectedIndex === 0}
                                        onClick={() => check(0)}
                                    />
                                    <input
                                        type="radio"
                                        name="slider"
                                        id="s2"
                                        checked={selectedIndex === 1}
                                        onClick={() => check(1)}
                                    />
                                    <input
                                        type="radio"
                                        name="slider"
                                        id="s3"
                                        checked={selectedIndex === 2}
                                        onClick={() => check(2)}
                                    />
                                    <label htmlFor="s1" id="slide1">

                                        <Card
                                            className="my-2 bg-transparent  border-0 "

                                        >
                                            <CardHeader className='border-0 bg-transparent'>
                                                <div className='Starter_price pb-2'>Starter</div>
                                                <div className='Unleash_price'>Unleash the power of <br />automation.</div>
                                            </CardHeader>
                                            <CardBody style={{ height: '52vh' }}>
                                                <div className='price_ul'>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span>  Upto 1 Page Designing</span></li>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Mobile responsive </span></li>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Up to 2 contact Forms </span></li>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Social Media Integration </span></li>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span>   What’s app chat Integration </span></li>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span>   Website Performance Report </span></li>
                                                    <li className='price_li my-3'><AiFillCheckCircle className='fs-4 price_icon' /><span> 12 Months Free Support </span></li>
                                                </div>
                                            </CardBody>
                                            <CardFooter className='border-0 bg-transparent'>
                                                <div className='text-center'><button className='Feed_price_button'><img src={sectionprice1} alt="sectionprice1" style={{ width: "20%" }} /> Feed 100 meals</button></div>
                                                <div>{selectedIndex === 0 && <div className='text-center fw-normal text-white my-1' style={{ fontSize: '0.7rem' }}>Pricing involves upto the after the launch<sup>*</sup></div>}</div>
                                            </CardFooter>
                                        </Card>



                                    </label>
                                    <label htmlFor="s2" id="slide2">

                                        <Card
                                            className="my-2 bg-transparent  border-0 "

                                        >
                                            <CardHeader className='border-0 bg-transparent'>
                                                <div className='Starter_price pb-2'>Business Plan</div>
                                                <div className='Unleash_price'><img src={profile_homelogo12} alt="profile_homelogo12" style={{ width: "30%" }} />  (654+ benefited)</div>
                                            </CardHeader>
                                            <CardBody style={{ height: '52vh' }}>
                                                <div className='price_ul'>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Upto 3 Pages Designing</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> 100% Responsive for all Devices</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Website Performance Report</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> SEO Friendly Pages</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />Accept all Integrations</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Full Source code</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> 12 Months Free Support</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Weekly Lead Reports</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Competitor Surveillance</li>
                                                </div>
                                            </CardBody>
                                            <CardFooter className='border-0 bg-transparent'>
                                                <div className='text-center'><button className='Feed_price_button'><img src={sectionprice1} alt="sectionprice1" style={{ width: "20%" }} /> Feed 150 meals</button></div>
                                                <div>{selectedIndex === 1 && <div className='text-center fw-normal text-white my-1' style={{ fontSize: '0.7rem' }}>Pricing involves upto the after the launch<sup>*</sup></div>}</div>
                                            </CardFooter>
                                        </Card>


                                    </label>
                                    <label htmlFor="s3" id="slide3">



                                        <Card
                                            className="my-2 bg-transparent  border-0 "

                                        >
                                            <CardHeader className='border-0 bg-transparent'>
                                                <div className='Starter_price pb-2'>Futuristic Web</div>
                                                <div className='Unleash_price'>Unleash the power of <br />automation.</div>
                                            </CardHeader>
                                            <CardBody style={{ height: '52vh' }}>
                                                <div className='price_ul'>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> All Pages Designing</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />100% Responsive for all Devices</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />Full Source Code</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />SEO Friendly Pages</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Website Performance Report</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Weekly Lead Reports</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' /> Competitor surveillance</li>
                                                    <li className='price_li py-2'><AiFillCheckCircle className='fs-4 price_icon' />12 Months Free Support</li>
                                                </div>
                                            </CardBody>
                                            <CardFooter className='border-0 bg-transparent'>
                                                <div className='text-center'><button className='Feed_price_button'><img src={sectionprice1} alt="sectionprice1" style={{ width: "20%" }} /> Feed 500 meals</button></div>
                                                <div>{selectedIndex === 2 && <div className='text-center fw-normal text-white my-1' style={{ fontSize: '0.7rem' }}>Pricing involves upto the after the launch<sup>*</sup></div>}</div>
                                            </CardFooter>
                                        </Card>


                                    </label>
                                </section>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='Hear_price'>Hear from those we've helped</div>
                <div className='Nexgen_pricewe pt-3'>At Nexgen, we specialize in Custom Web Design solutions tailored to your specific<br /> needs. Our team crafts Responsive Web Designs that adapt seamlessly across </div>
                <div className=''>
                    <div className='my-5 d-flex justify-content-center'>{/*<img src={indamaplogo_home} alt='back_styleimageprice' className='back_styleprice' />*/}
                        <div className='back_styleprice'>
                            <div className="text-center" style={{ marginTop: "3rem", marginLeft: "60%" }}>
                                <span
                                    placement="top"
                                    target="ScheduleUpdateTooltip"
                                    trigger="hover focus"
                                    autohide={true}
                                    style={{ background: "#FFF", maxWidth: "100% !important" }}
                                >
                                    <div className='Lacus_price_bg '>
                                        <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                        <div className='d-flex gap-2'>
                                            <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                            <div className='py-2'>
                                                <div className='Hellen_price'>Hellena John</div>
                                                <div className='py-1 Counselor_price'>Psychology Student</div>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                    <RiAddBoxLine className='fs-4' />
                                </Button>
                            </div>
                            <div className="text-center" style={{ marginTop: "-8rem" }}>
                                <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                    <RiAddBoxLine className='fs-4' />
                                </Button>
                                <UncontrolledTooltip
                                    placement="top"
                                    target="ScheduleUpdateTooltip"
                                    trigger="hover focus"
                                    autohide={true}
                                    style={{ background: "#FFF", maxWidth: "100% !important" }}
                                >
                                    <div className='Lacus_price_bg '>
                                        <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                        <div className='d-flex gap-2'>
                                            <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                            <div className='py-2'>
                                                <div className='Hellen_price'>Hellena John</div>
                                                <div className='py-1 Counselor_price'>Psychology Student</div>
                                            </div>
                                        </div>
                                    </div>
                                </UncontrolledTooltip>
                            </div>
                            <div className="text-center" style={{ marginTop: "4rem" }}>
                                <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                    <RiAddBoxLine className='fs-4' />
                                </Button>
                                <UncontrolledTooltip
                                    placement="top"
                                    target="ScheduleUpdateTooltip"
                                    trigger="hover focus"
                                    autohide={true}
                                    style={{ background: "#FFF", maxWidth: "100% !important" }}
                                >
                                    <div className='Lacus_price_bg '>
                                        <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                        <div className='d-flex gap-2'>
                                            <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                            <div className='py-2'>
                                                <div className='Hellen_price'>Hellena John</div>
                                                <div className='py-1 Counselor_price'>Psychology Student</div>
                                            </div>
                                        </div>
                                    </div>
                                </UncontrolledTooltip>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className="text-center" style={{ marginTop: "-4rem" }}>
                                    <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                        <RiAddBoxLine className='fs-4' />
                                    </Button>
                                    <UncontrolledTooltip
                                        placement="top"
                                        target="ScheduleUpdateTooltip"
                                        trigger="hover focus"
                                        autohide={true}
                                        style={{ background: "#FFF", maxWidth: "100% !important" }}
                                    >
                                        <div className='Lacus_price_bg '>
                                            <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                            <div className='d-flex gap-2'>
                                                <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                                <div className='py-2'>
                                                    <div className='Hellen_price'>Hellena John</div>
                                                    <div className='py-1 Counselor_price'>Psychology Student</div>
                                                </div>
                                            </div>
                                        </div>
                                    </UncontrolledTooltip>
                                </div>
                                <div className="text-center" style={{ marginTop: "13rem", marginLeft: "10%" }}>
                                    <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                        <RiAddBoxLine className='fs-4' />
                                    </Button>
                                    <UncontrolledTooltip
                                        placement="top"
                                        target="ScheduleUpdateTooltip"
                                        trigger="hover focus"
                                        autohide={true}
                                        style={{ background: "#FFF", maxWidth: "100% !important" }}
                                    >
                                        <div className='Lacus_price_bg '>
                                            <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                            <div className='d-flex gap-2'>
                                                <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                                <div className='py-2'>
                                                    <div className='Hellen_price'>Hellena John</div>
                                                    <div className='py-1 Counselor_price'>Psychology Student</div>
                                                </div>
                                            </div>
                                        </div>
                                    </UncontrolledTooltip>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className="text-center" style={{ marginTop: "-10rem", marginLeft: "30%" }}>
                                    <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                        <RiAddBoxLine className='fs-4' />
                                    </Button>
                                    <UncontrolledTooltip
                                        placement="top"
                                        target="ScheduleUpdateTooltip"
                                        trigger="hover focus"
                                        autohide={true}
                                        style={{ background: "#FFF", maxWidth: "100% !important" }}
                                    >
                                        <div className='Lacus_price_bg '>
                                            <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                            <div className='d-flex gap-2'>
                                                <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                                <div className='py-2'>
                                                    <div className='Hellen_price'>Hellena John</div>
                                                    <div className='py-1 Counselor_price'>Psychology Student</div>
                                                </div>
                                            </div>
                                        </div>
                                    </UncontrolledTooltip>
                                </div>
                                <div className="text-center" style={{ marginTop: "-13rem", marginLeft: "10%" }}>
                                    <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                        <RiAddBoxLine className='fs-4' />
                                    </Button>
                                    <UncontrolledTooltip
                                        placement="top"
                                        target="ScheduleUpdateTooltip"
                                        trigger="hover focus"
                                        autohide={true}
                                        style={{ background: "#FFF", maxWidth: "100% !important" }}
                                    >
                                        <div className='Lacus_price_bg '>
                                            <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                            <div className='d-flex gap-2'>
                                                <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                                <div className='py-2'>
                                                    <div className='Hellen_price'>Hellena John</div>
                                                    <div className='py-1 Counselor_price'>Psychology Student</div>
                                                </div>
                                            </div>
                                        </div>
                                    </UncontrolledTooltip>
                                </div>
                            </div>
                            <div className='d-flex gap-3'>
                                <div className="text-center" style={{ marginTop: "-30%", marginLeft: "10%" }}>
                                    <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                        <RiAddBoxLine className='fs-4' />
                                    </Button>
                                    <UncontrolledTooltip
                                        placement="top"
                                        target="ScheduleUpdateTooltip"
                                        trigger="hover focus"
                                        autohide={true}
                                        style={{ background: "#FFF", maxWidth: "100% !important" }}
                                    >
                                        <div className='Lacus_price_bg '>
                                            <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                            <div className='d-flex gap-2'>
                                                <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                                <div className='py-2'>
                                                    <div className='Hellen_price'>Hellena John</div>
                                                    <div className='py-1 Counselor_price'>Psychology Student</div>
                                                </div>
                                            </div>
                                        </div>
                                    </UncontrolledTooltip>
                                </div>
                                <div className="text-center" style={{ marginTop: "-20rem", marginLeft: "10%" }}>
                                    <Button id="ScheduleUpdateTooltip" style={{ background: "none", border: "none", color: "#000" }}>
                                        <RiAddBoxLine className='fs-4' />
                                    </Button>
                                    <UncontrolledTooltip
                                        placement="top"
                                        target="ScheduleUpdateTooltip"
                                        trigger="hover focus"
                                        autohide={true}
                                        style={{ background: "#FFF", maxWidth: "100% !important" }}
                                    >
                                        <div className='Lacus_price_bg '>
                                            <p className='vestibulum_font_price'>Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.</p>
                                            <div className='d-flex gap-2'>
                                                <div className='text-center'><img src={price_profileimage} alt='price_profileimage' style={{ width: "60%" }} /> </div>
                                                <div className='py-2'>
                                                    <div className='Hellen_price'>Hellena John</div>
                                                    <div className='py-1 Counselor_price'>Psychology Student</div>
                                                </div>
                                            </div>
                                        </div>
                                    </UncontrolledTooltip>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default PriceandPlan
