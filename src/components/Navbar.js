import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

  const [click, setClick] = useState(false);
  const [click2, setClick2] = useState(false);

  const handleClick = () => {
    setClick(!click);
    console.log("working")
  };
  const handleClick2 = () => {
    setClick2(!click2);
  };
    return (
        <div className="navbar">

            <div className="text__wrapper">
              <h3 className="text__a">
                <a href="https://dribbble.com">
                dribbble</a></h3>

              <div className="text">
              <p className="text__b">
                <a href="https://dribbble.com/shots/15040336-Landing-Page-Quillow">
                Landing Page: Quillow</a></p>

              <p className="text__c">
                <a href="https://dribbble.com/oguzyagiz">
                by Oğuz Yağız Kara</a></p>
              </div>
              
            </div>
          
            <div className="image">
              <div>
              <NavLink to="/">
              <img src="https://cdn.dribbble.com/users/1774675/screenshots/15040336/media/25f81c2a8079494d677ec8ef7a5cad51.png"
              className={click ? "highlight" : "thumbnail1"} 
              onClick={handleClick} />
              
              </NavLink>
              </div>

              <div>
              <NavLink to="/pageb">
              <img src="https://cdn.dribbble.com/users/1774675/screenshots/15040336/media/6e8419d2d887261fd4f0b7bf73784c7f.jpg"
              className={click2 ? "highlight" : "thumbnail2"}  
              onClick={handleClick2} />
              </NavLink>
              </div>

            </div>
          
        </div>
    )
}

export default Navbar;
