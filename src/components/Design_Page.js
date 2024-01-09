import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { websit } from '../HomePage/HomePagejson'
import { Card } from 'reactstrap'
import { RxHome } from "react-icons/rx";
import { CiMenuBurger } from "react-icons/ci";
import { VscClose } from "react-icons/vsc";
const NavItems = [
  {
    title: "Mobile App",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "Dashboard",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "UX Research",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "Social Media",
    url: "/viewportfolio",
    cName: "nav-links"
  },
  {
    title: "Advertisement",
    url: "/viewportfolio",
    cName: "nav-links"
  },
];
const Design_Page = () => {
  const { id } = useParams()
  const filter_web = websit.filter(p => p.id == id)
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className="NavbarItems bg-dark py-4">
        <div className='ms-5' style={{ width: '20%' }}>
          <Link to="/viewportfolio" className='link_web1'> <RxHome className='fs-2' />
          </Link>
        </div>
        <div className="Hamburger-Cross-Icons" onClick={handleClick}>
          <div className='text-white fw-bold fs-3'>{open ? <VscClose className='text-white fw-bold'/>
            : <CiMenuBurger className='text-white fw-bold'/>
          }</div>
        </div>
        <div className={open ? "MenuItems active" : "MenuItems"}>
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
      </nav>
      <div className='' style={{ background: '#424245' }}>
        <Card className='m-5 border-0 shadow'>
          <img src={require(`../Images/WebsiteImage/${filter_web[0].path_svg}`)} />
        </Card>
      </div>
    </div>
  )
}
export default Design_Page
