import React from 'react';
import { Link } from 'react-router-dom';
import LogoImage from './../../assets/mainLogo.png';

function MenuBar() {

  const mobileMenuToggle = () => {
    const mobileMenu = document.getElementsByClassName('slicknav_nav')[0];
    mobileMenu.classList.toggle('slicknav_hidden');
  }

  return (
    <header>
      <div className="header-area header-transparent">
        <div className="main-header ">
          <div className="header-bottom  header-sticky">
            <div className="container-fluid">
              <div className="row align-items-center">
                <div className="col-xl-2 col-lg-2">
                  <div className="logo">
                    <Link to="/"><img src={LogoImage} alt="" height="50" /></Link>
                  </div>
                </div>
                <div className="col-xl-10 col-lg-10">
                  <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                    <div className="main-menu d-none d-lg-block">
                      <nav>
                        <ul id="navigation">                                                                                          
                          <li className="active" ><a href="#home">Home</a></li>
                          <li><a href="#bookwash">Book a Wash &amp; Detail</a></li>
                          <li><a href="#shop">Shop</a></li>
                          <li><a href="#careers">Careers</a></li>
                          <li><a href="#gallery">Gallery</a>
                            {/* <ul className="submenu">
                              <li><a href="blog.html">Blog</a></li>
                              <li><a href="blog_details.html">Blog Details</a></li>
                              <li><a href="elements.html">Element</a></li>
                            </ul> */}
                          </li>
                          <li><a href="#aboutus">About Us</a></li>
                          <li><a href="#contactus">Contact Us</a></li>
                        </ul>
                      </nav>
                    </div>
                    {/* <div className="header-right-btn d-none d-lg-block ml-65">
                      <a href="login.html" className="border-btn">Log in</a>
                    </div> */}
                  </div>
                </div> 
                <div className="col-12">
                  <div className="mobile_menu d-block d-lg-none">
                    <div className="slicknav_menu">
                      <a href="#" aria-haspopup="true" role="button" tabIndex="0" className="slicknav_btn" onClick={mobileMenuToggle}>
                        <span className="slicknav_menutxt">MENU</span>
                        <span className="slicknav_icon">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      <ul className="slicknav_nav slicknav_hidden" aria-hidden="false" role="menu" style={{display: 'block'}}>
                        <li className="active"><a href="#home" role="menuitem" tabIndex="0">Home</a></li>
                        <li><a href="#bookwash" role="menuitem" tabIndex="0">Book a Wash &amp; Detail</a></li>
                        <li><a href="#shop" role="menuitem" tabIndex="0">Shop</a></li>
                        <li><a href="#careers" role="menuitem" tabIndex="0">Careers</a></li>
                        <li><a href="#gallery" role="menuitem" tabIndex="0">Gallery</a></li>
                        <li><a href="#aboutus" role="menuitem" tabIndex="0">About Us</a></li>
                        <li><a href="#contactus" role="menuitem" tabIndex="0">Contact Us</a></li>
                        {/* <li className="slicknav_parent slicknav_collapsed">
                          <a href="#" role="menuitem" aria-haspopup="true" tabIndex="0" className="slicknav_item slicknav_row"><a href="/" tabIndex="0">Blog</a>
                          <span className="slicknav_arrow">+</span></a>
                          <ul className="submenu slicknav_hidden" role="menu" aria-hidden="true" style={{display: 'none'}}>
                            <li><a href="blog.html" role="menuitem" tabIndex="-1">Blog</a></li>
                            <li><a href="blog_details.html" role="menuitem" tabIndex="-1">Blog Details</a></li>
                            <li><a href="elements.html" role="menuitem" tabIndex="-1">Element</a></li>
                          </ul>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default MenuBar;