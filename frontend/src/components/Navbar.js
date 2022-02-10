

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return (
<header className="header-static navbar-sticky navbar-light shadow">
   <div className="top-search collapse bg-light" id="search-open" data-parent="#search">
      <div className="container">
         <div className="row position-relative">
            <div className="col-md-8 mx-auto py-5">
               <form>
                  <div className="input-group">
                     <input className="form-control border-radius-right-0 border-right-0" type="text" name="search" /* autofocus */ placeholder="What are you looking for?" />
                     <button type="button" className="btn btn-grad border-radius-left-0 mb-0">Search</button>
                  </div>
               </form>
               <p className="small mt-2 mb-0"><strong>e.g.</strong>Template, TravelGo, WordPress </p>
            </div>
            <a className="position-absolute top-0 right-0 mt-3 mr-3" data-toggle="collapse" href="assets/#search-open"><i className="fas fa-window-close"></i></a> 
         </div>
      </div>
   </div>
   <div className="navbar-top d-none d-lg-block">
      <div className="container">
         <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
               <div className="dropdown">
                  <a className="dropdown-toggle" href="assets/#" role="button" id="dropdownLanguage" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img className="dropdown-item-icon" src="assets/images/flag/uk.svg" alt="" /> English </a>
                  <div className="dropdown-menu mt-2 shadow" aria-labelledby="dropdownLanguage">
                     <span className="dropdown-item-text">Select language</span>
                     <div className="dropdown-divider"></div>
                     <a className="dropdown-item" href="assets/#"><img className="dropdown-item-icon" src="assets/images/flag/sp.svg" alt="" /> Español</a> <a className="dropdown-item" href="assets/#"><img className="dropdown-item-icon" src="assets/images/flag/fr.svg" alt="" /> Français</a> <a className="dropdown-item" href="assets/#"><img className="dropdown-item-icon" src="assets/images/flag/gr.svg" alt="" /> Deutsch</a> 
                  </div>
               </div>
               <ul className="nav list-unstyled ml-3">
                  <li className="nav-item mr-3"> <a className="navbar-link" href="assets/#"><strong>Phone:</strong> (024) 123-1457</a> </li>
                  <li className="nav-item mr-3"> <a className="navbar-link" href="assets/#"><strong>Email:</strong> help@TravelGo.com</a> </li>
               </ul>
            </div>
            <div className="d-flex align-items-center">
               <div className="dropdown">
                  <a className="dropdown-toggle" href="assets/#" role="button" id="dropdownAccount" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="far fa-user mr-2"></i>Account </a>
                  <div className="dropdown-menu mt-2 shadow" aria-labelledby="dropdownAccount"> <a className="dropdown-item" href="assets/sign-in.html">Log In</a> 
                     <a className="dropdown-item" href="/register">Register</a> 
                  
                  <a className="dropdown-item" href="assets/#">Settings</a> </div>
               </div>
               <ul className="nav">
                  <li className="nav-item"> <a className="nav-link" href="assets/#">Contact</a> </li>
               </ul>
               <ul className="social-icons">
                  <li className="social-icons-item social-facebook m-0"> <a className="social-icons-link w-auto px-2" href="assets/#"><i className="fab fa-facebook-f"></i></a> </li>
                  <li className="social-icons-item social-instagram m-0"> <a className="social-icons-link w-auto px-2" href="assets/#"><i className="fab fa-twitter"></i></a> </li>
                  <li className="social-icons-item social-twitter m-0"> <a className="social-icons-link w-auto pl-2" href="assets/#"><i className="fab fa-instagram"></i></a> </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
   <nav className="navbar navbar-expand-lg">
      <div className="container">
         <a className="navbar-brand" href="assets/index.html"> <img src="http://localhost:4000/assets/images/logo-header.png" alt="travelgo" /> </a> 
         <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation"> <span className="navbar-toggler-icon"> </span> </button>
         <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
               <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="!#" id="demosMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</a>
                  <ul className="dropdown-menu" aria-labelledby="homeMenu">
                     <li><a className="dropdown-item" href="assets/index.html">Home Layout 1</a></li>
                     <li><a className="dropdown-item" href="assets/homepage2.html">Home Layout 2</a></li>
                     <li><a className="dropdown-item" href="assets/homepage3.html">Home Layout 3</a></li>
                     <li><a className="dropdown-item" href="assets/homepage4.html">Home Layout 4</a></li>
                     <li><a className="dropdown-item" href="assets/homepage5.html">Home Layout 5</a></li>
                     <li><a className="dropdown-item" href="assets/homepage6.html">Home Layout 6</a></li>
                     <li className="dropdown-header">Header Style</li>
                     <li><a className="dropdown-item" href="assets/header-1.html">Header Style 1</a></li>
                     <li><a className="dropdown-item" href="assets/header-2.html">Header Style 2</a></li>
                     <li><a className="dropdown-item" href="assets/header-3.html">Header Style 3</a></li>
                  </ul>
               </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="!#" id="docMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hotels</a>
                  <ul className="dropdown-menu" aria-labelledby="docMenu">
                     <li><a className="dropdown-item" href="assets/hotel-index.html">Home Hotels</a></li>
                     <li><a className="dropdown-item" href="assets/hotel-list-view.html">List View</a></li>
                     <li><a className="dropdown-item" href="assets/hotel-grid-view.html">Grid View</a></li>
                     <li><a className="dropdown-item" href="assets/hotel-detailed.html">Detailed</a></li>
                     <li><a className="dropdown-item" href="assets/hotel-booking.html">Booking</a></li>
                     <li><a className="dropdown-item" href="assets/hotel-thankyou.html">Thank You</a></li>
                  </ul>
               </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="!#" id="docMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Flights</a>
                  <ul className="dropdown-menu" aria-labelledby="docMenu">
                     <li><a className="dropdown-item" href="assets/flight-index.html">Home Flights</a></li>
                     <li><a className="dropdown-item" href="assets/flight-list-view.html">List View</a></li>
                     <li><a className="dropdown-item" href="assets/flight-grid-view.html">Grid View</a></li>
                     <li><a className="dropdown-item" href="assets/flight-detailed.html">Detailed</a></li>
                     <li><a className="dropdown-item" href="assets/flight-booking.html">Booking</a></li>
                     <li><a className="dropdown-item" href="assets/flight-thankyou.html">Thank You</a></li>
                  </ul>
               </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="!#" id="docMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cars</a>
                  <ul className="dropdown-menu" aria-labelledby="docMenu">
                     <li><a className="dropdown-item" href="assets/car-index.html">Home Cars</a></li>
                     <li><a className="dropdown-item" href="assets/car-list-view.html">List View</a></li>
                     <li><a className="dropdown-item" href="assets/car-grid-view.html">Grid View</a></li>
                     <li><a className="dropdown-item" href="assets/car-detailed.html">Detailed</a></li>
                     <li><a className="dropdown-item" href="assets/car-booking.html">Booking</a></li>
                     <li><a className="dropdown-item" href="assets/car-thankyou.html">Thank You</a></li>
                  </ul>
               </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="!#" id="docMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Cruises</a>
                  <ul className="dropdown-menu" aria-labelledby="docMenu">
                     <li><a className="dropdown-item" href="assets/cruise-index.html">Home Cruises</a></li>
                     <li><a className="dropdown-item" href="assets/cruise-list-view.html">List View</a></li>
                     <li><a className="dropdown-item" href="assets/cruise-grid-view.html">Grid View</a></li>
                     <li><a className="dropdown-item" href="assets/cruise-detailed.html">Detailed</a></li>
                     <li><a className="dropdown-item" href="assets/cruise-booking.html">Booking</a></li>
                     <li><a className="dropdown-item" href="assets/cruise-thankyou.html">Thank You</a></li>
                  </ul>
               </li>
               <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="!#" id="docMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tour</a>
                  <ul className="dropdown-menu" aria-labelledby="docMenu">
                     <li><a className="dropdown-item" href="assets/tour-index.html">Home Tour</a></li>
                     <li><a className="dropdown-item" href="assets/all_tours_list.html">All tours list</a></li>
                     <li><a className="dropdown-item" href="assets/all_tours_grid.html">All tours grid</a></li>
                     <li><a className="dropdown-item" href="assets/single_tour.html">Single tour page</a></li>
                     <li><a className="dropdown-item" href="assets/single_tour_with_gallery.html">Single tour with gallery</a></li>
                     <li><a className="dropdown-item" href="assets/payment.html">Single tour booking</a></li>
                  </ul>
               </li>
               <li className="nav-item dropdown megamenu">
                  <a className="nav-link dropdown-toggle" href="!#" id="elementsMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu" aria-labelledby="elementsMenu" >
                     <div className="container">
                        <div className="row">
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li><a className="dropdown-item" href="assets/pages-aboutus1.html">About Us</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-services1.html">Services</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-photogallery-4column.html">Gallery 4 Column</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-photogallery-3column.html">Gallery 3 Column</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-photogallery-2column.html">Gallery 2 Column</a></li>
                              </ul>
                           </div>
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li><a className="dropdown-item" href="assets/pages-faq1.html">Faq 1</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-404-1.html">404 Page</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-coming-soon1.html">Coming Soon</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-login1.html">Login </a></li>
                                 <li><a className="dropdown-item" href="">Registration </a></li>
                              </ul>
                           </div>
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li><a className="dropdown-item" href="assets/pages-layouts-twosidebar.html">Layouts Two Sidebar</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-layouts-fullwidth.html">Layouts Full Width</a></li>
                                 <li><a className="dropdown-item" href="!#">Contact Us</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-travelo-policies.html">Policies</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-sitemap.html">Site Map</a></li>
                              </ul>
                           </div>
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li><a className="dropdown-item" href="assets/pages-blog-rightsidebar.html">Blog Right Sidebar</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-blog-leftsidebar.html">Blog Left Sidebar</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-blog-fullwidth.html">Blog Full Width</a></li>
                                 <li><a className="dropdown-item" href="assets/pages-blog-read.html">Blog Details</a></li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
               <li className="nav-item dropdown megamenu">
                  <a className="nav-link dropdown-toggle" href="!#" id="elementsMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Elements</a>
                  <div className="dropdown-menu" aria-labelledby="elementsMenu" >
                     <div className="container">
                        <div className="row">
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li> <a className="dropdown-item" href="assets/elements-accordion.html">Accordion</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-action-box.html">Action box</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-alerts.html">Alerts</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-animated-headlines.html">Animated Headlines</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-blockquote.html">Blockquote</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-buttons.html">Buttons</a> </li>
                              </ul>
                           </div>
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li> <a className="dropdown-item" href="assets/elements-clients.html">Clients</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-counter.html">Counter</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-divider.html">Divider</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-feature-box.html">Feature box</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-forms.html">Forms</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-grid.html">Grid</a> </li>
                              </ul>
                           </div>
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li> <a className="dropdown-item" href="assets/elements-list-styles.html">list styles</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-map.html">Map</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-modal.html">Modal</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-skill.html">skill</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-social-icon.html">social icon</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-tab.html">Tab</a> </li>
                              </ul>
                           </div>
                           <div className="col-sm-6 col-lg-3">
                              <ul className="list-unstyled">
                                 <li> <a className="dropdown-item" href="assets/elements-table.html">Table</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-team.html">Team</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-typography.html">Typography</a> </li>
                                 <li> <a className="dropdown-item" href="assets/elements-video.html">Video</a> </li>
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </li>
            </ul>
         </div>
         <div className="navbar-nav">
            <div className="nav-item search border-0 pl-3 pr-0 px-lg-2" id="search"> <a className="nav-link" data-toggle="collapse" href="assets/#search-open"><i className="fas fa-search"></i></a> </div>
            <div className="nav-item border-0 d-none d-lg-inline-block align-self-center"> <a href="!#" className=" btn btn-sm btn-grad text-white mb-0">Online Booking</a> </div>
         </div>
      </div>
   </nav>
</header>
);
};
export default Navbar;

