import "./Navbar.css"
import { useState,useEffect } from "react";
import logo from '../../images/logo.png'

import {Link,useLocation} from 'react-router-dom'
export default function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isDisplay, setIsDisplay] = useState(false)

  const handleClick = ()=>{
    setIsDisplay(!isDisplay)
  }

  let location = useLocation()
  useEffect(()=>{
  },[location])
  return (
    <nav className="navigation">
      <div className="logo-cont">
        <img src={logo} className='logo' alt="" />
        <h1>TATA Adventures</h1>
      </div>
      <button className="hamburger" 
      onClick={() => {
        setIsNavExpanded(!isNavExpanded);
      }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <Link to="/" className={location.pathname === '/' ? 'click' : 'unclick'} >Home</Link>
          </li>
          <li>
            <Link to="/adventures" className={location.pathname === '/adventures' ? 'click' : 'unclick'}>Adventures</Link>
          </li>
          <li>
            <Link to="/fitprep" className={location.pathname === '/fitprep' ? 'click' : 'unclick'}>Fitprep</Link>
          </li>
          <li>
            <Link to="/courses" className={location.pathname === '/courses' ? 'click' : 'unclick'}>Courses</Link>
          </li>
          <li>
            <Link to="/blog" className={location.pathname === '/blog' ? 'click' : 'unclick'}>Blog</Link>
          </li>
          <li>
            <Link to="/mission" className={location.pathname === '/mission' ? 'click' : 'unclick'}>Mission</Link>
          </li>
          <li>
            <Link to="/team" className={location.pathname === '/team' ? 'click' : 'unclick'}>Team</Link>
          </li>
          <li>
            <Link to="/login" className={location.pathname === '/team' ? 'click' : 'unclick'}>Login</Link>
          </li>
        </ul>
      </div>

    </nav>
  );
}