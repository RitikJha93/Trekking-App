import "./Navbar.css"
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Badge from '@mui/material/Badge';
import logo from '../../images/logo.png'

export default function Navbar() {

  const [isNavExpanded, setIsNavExpanded] = useState(false)
  const [isDisplay, setIsDisplay] = useState(false)

  const handleClick = ()=>{
    setIsDisplay(!isDisplay)
  }
  return (
    <nav className="navigation">
      <div className="logo-cont">
        <img src={logo} className='logo' alt="" />
        <h1>Unoia</h1>
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
      {/* <div className="search">
            <div className={isDisplay ? "searchicon" : "searchicon1"}>
                <SearchIcon onClick={handleClick}/>
            </div>
            <div className={isDisplay ? "searchbox1" : "searchbox"}>
                <input type="text" placeholder='Search....' />
            </div>
      </div> */}
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/signup">Register</a>
          </li>
        </ul>
      </div>

      {/* <div className="cart" style={{marginRight:'1rem'}}>  
            <Badge badgeContent={4} color="primary">
                <ShoppingBagOutlinedIcon color='action' style={{fontSize: "30px",color: "black",cursor:'pointer'}}/>
            </Badge>
          </div> */}
    </nav>
  );
}