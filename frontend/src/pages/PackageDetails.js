import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Cookies } from "react-cookie";
import axios from "axios";

const PackageDetails = () => {
  const {id} = useParams();
  //const [newCategory, SetCategory] = useState([]);
  var url = "http://localhost:3000/api/v1/package/get-package";
  //let newCategory = [];
  axios
    .post(url, {"id" : id})
    .then((response) => {
      if (response.data) {
        console.log(response.data)
      }
    })
    .catch((error) => {
      if (error.response) {
      }
    });

  return (
<div>
<section> 
    <div className="swiper-container detail-slider slider-gallery"> 
      <div className="swiper-wrapper"> 
        <div className="swiper-slide"><a data-toggle="gallery-top" title="Our street"><img src="../assets/images/cruises/room-details1.jpg" alt="Our street" className="img-fluid" /></a></div>
        <div className="swiper-slide"><a data-toggle="gallery-top" title="Outside"><img src="../assets/images/cruises/room-details2.jpg" alt="Outside" className="img-fluid" /></a></div>
        <div className="swiper-slide"><a data-toggle="gallery-top" title="Rear entrance"><img src="../assets/images/cruises/room-details3.jpg" alt="Rear entrance" className="img-fluid" /></a></div>
        <div className="swiper-slide"><a data-toggle="gallery-top" title="Kitchen"><img src="../assets/images/cruises/room-details4.jpg" alt="Kitchen" className="img-fluid " /></a></div>
        <div className="swiper-slide"><a data-toggle="gallery-top" title="Bedroom"><img src="../assets/images/cruises/room-details5.jpg" alt="Bedroom" className="img-fluid " /></a></div>
        <div className="swiper-slide"><a data-toggle="gallery-top" title="Bedroom"><img src="../assets/images/cruises/room-details6.jpg" alt="Bedroom" className="img-fluid " /></a></div>
      </div>
      <div className="swiper-pagination swiper-pagination-white"></div>
      <div className="swiper-button-prev swiper-button-white"></div>
      <div className="swiper-button-next swiper-button-white"></div>
    </div>
  </section>
  <section className="pt80 pb80 listingDetails Campaigns">
    <div className="container">
      <div className="row"> 
        
        <div className="col-lg-8 col-md-12 col-sm-12 ">
          <ul className="nav nav-tabs tab-line">
            <li className="nav-item"> <a className="nav-link active" data-toggle="tab" href="#tab-de-1"> Description </a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tab-de-3"> Amenities </a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tab-de-4"> Calendar </a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tab-de-5"> Gallery </a> </li>
            <li className="nav-item"> <a className="nav-link" data-toggle="tab" href="#tab-de-6"> Reviews </a> </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane booking-search show active" id="tab-de-1">
              <div className="text-block NopaddingDetails">
                <h5 className="mb-4">Panpacific Blue Hill Resturant &amp; Bar</h5>
                <p className="text-muted font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. </p>
                <p className="text-muted font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p className="text-muted font-weight-light">Also in the apartment:</p>
                <ul className="text-muted font-weight-light roomlist">
                  <li>Lorem ipsum dolor sit amet, consectetur</li>
                  <li>dolore eu fugiat nulla pariatur</li>
                  <li>sed do eiusmod tempor incididunt</li>
                  <li>Fresh Sheets and Towels</li>
                  <li>dolore eu fugiat nulla pariatur</li>
                </ul>
                <p className="text-muted font-weight-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
              <div className="text-block"> 
                <h5 className="mb-4">Location</h5>
                <div className="map-wrapper-300 mb-3">
                  <div className="map-container fw-map">
                    <div id="map-main"> </div>
                  </div>
                </div>
              </div>
              <div className="text-block"> 
                <h5 className="mb-4">Gallery</h5>
                <div className="row gallery ml-n1 mr-n1">
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details1.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details2.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details3.jpg" alt="..." className="img-fluid" /></a></div>
                </div>
              </div>
              <div className="text-block">
                <h5 className="mb-4">Amenities</h5>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2"><i className="fa fa-wifi text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Wifi</span></li>
                      <li className="mb-2"><i className="fa fa-tv text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Cable TV</span></li>
                      <li className="mb-2"><i className="fa fa-snowflake text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Air conditioning</span></li>
                      <li className="mb-2"><i className="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Heating</span></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2"><i className="fa fa-bath text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Toiletteries</span></li>
                      <li className="mb-2"><i className="fa fa-utensils text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Equipped Kitchen</span></li>
                      <li className="mb-2"><i className="fa fa-laptop text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Desk for work</span></li>
                      <li className="mb-2"><i className="fa fa-tshirt text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Washing machine</span></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="text-block">
                <p className="subtitle text-sm text-primary">Reviews </p>
                <h5 className="mb-4">Listing Reviews </h5>
                <div className="media d-block d-sm-flex review">
                  <div className="text-md-center mr-4 mr-xl-5"><img src="../assets/images/img-22.jpg" alt="Padmé Amidala" className="avatar avatar-xl p-2 mb-2" /></div>
                  <div className="media-body">
                    <h6 className="mt-2 mb-1">Deho Smith</h6>
                    <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i> </div>
                    <p className="text-muted text-sm">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
                <div className="media d-block d-sm-flex review">
                  <div className="text-md-center mr-4 mr-xl-5"><img src="../assets/images/img-11.jpg" alt="Jabba Hut" className="avatar avatar-xl p-2 mb-2" /></div>
                  <div className="media-body">
                    <h6 className="mt-2 mb-1">S. M Smithrs</h6>
                    <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i> </div>
                    <p className="text-muted text-sm">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
                <div className="rebiew_section">
                  <div id="leaveReview" className="mt-4 collapse show" >
                    <h5 className="mb-4">Leave a review</h5>
                    <form id="contact-form" method="get" action="#" className="form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" name="name" id="name" placeholder="Enter your name" required className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <select name="rating" id="rating" className="custom-select focus-shadow-0">
                              <option value="5">★★★★★ (5/5)</option>
                              <option value="4">★★★★☆ (4/5)</option>
                              <option value="3">★★★☆☆ (3/5)</option>
                              <option value="2">★★☆☆☆ (2/5)</option>
                              <option value="1">★☆☆☆☆ (1/5)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Enter your  email" required className="form-control" />
                      </div>
                      <div className="form-group">
                        <textarea rows="4" name="review" id="review" placeholder="Enter your review" required className="form-control"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Post review</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-de-3">
              <div className="text-block NopaddingDetails">
                <h5 className="mb-4">Amenities</h5>
                <p className="mb-4">Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis.Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis. <br />
                  <br/>
                  Praesent dolor lectus, rutrum sit amet risus vitae, imperdiet cursus neque. Nulla tempor nec lorem eu suscipit. Donec dignissim lectus a nunc molestie consectetur. Nulla eu urna in nisi adipiscing placerat. Nam vel scelerisque magna. Donec justo urna, posuere ut dictum quis. </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2"><i className="fa fa-wifi text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Wifi</span></li>
                      <li className="mb-2"><i className="fa fa-tv text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Cable TV</span></li>
                      <li className="mb-2"><i className="fa fa-snowflake text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Air conditioning</span></li>
                      <li className="mb-2"><i className="fa fa-thermometer-three-quarters text-secondary w-1rem mr-3 text-center"></i> <span className="text-sm">Heating</span></li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="list-unstyled text-muted">
                      <li className="mb-2"><i className="fa fa-bath text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Toiletteries</span></li>
                      <li className="mb-2"><i className="fa fa-utensils text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Equipped Kitchen</span></li>
                      <li className="mb-2"><i className="fa fa-laptop text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Desk for work</span></li>
                      <li className="mb-2"><i className="fa fa-tshirt text-secondary w-1rem mr-3 text-center"></i><span className="text-sm">Washing machine</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-de-4">
              <div className="text-block NopaddingDetails"> 
                <h5 className="mb-4">Calender</h5>
                <div id="calendar">
                  <table>
                    <tr>
                      <td className="lastmonth">30</td>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                      <td className="hastask">4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td className="current">8</td>
                      <td className="hastask">9</td>
                      <td>10</td>
                      <td>11</td>
                      <td className="hastask">12</td>
                      <td>13</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td className="hastask">15</td>
                      <td>16</td>
                      <td>17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td className="hastask">21</td>
                      <td>22</td>
                      <td>23</td>
                      <td>24</td>
                      <td>25</td>
                      <td className="hastask">26</td>
                      <td>27</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>29</td>
                      <td className="hastask">30</td>
                      <td>31</td>
                      <td className="nextmonth">1</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-de-5">
              <div className="text-block NopaddingDetails"> 
                <h5 className="mb-4">Gallery</h5>
                <div className="row gallery ml-n1 mr-n1">
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details1.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details7.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details2.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details3.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details4.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details5.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details6.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details7.jpg" alt="..." className="img-fluid" /></a></div>
                  <div className="col-lg-4 col-6 px-1 mb-2"><a href="#"><img src="../assets/images/cruises/room-details8.jpg" alt="..." className="img-fluid" /></a></div>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="tab-de-6">
              <div className="text-block NopaddingDetails">
                <h5 className="mb-4">Reviews</h5>
                <div className="media d-block d-sm-flex review">
                  <div className="text-md-center mr-4 mr-xl-5"><img src="../assets/images/img-22.jpg" alt="Padmé Amidala" className="avatar avatar-xl p-2 mb-2" /></div>
                  <div className="media-body">
                    <h6 className="mt-2 mb-1">Deho Smith</h6>
                    <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i> </div>
                    <p className="text-muted text-sm">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
                <div className="media d-block d-sm-flex review">
                  <div className="text-md-center mr-4 mr-xl-5"><img src="../assets/images/img-11.jpg" alt="Jabba Hut" className="avatar avatar-xl p-2 mb-2" /></div>
                  <div className="media-body">
                    <h6 className="mt-2 mb-1">S. M Smithrs</h6>
                    <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i><i className="fa fa-xs fa-star text-primary"></i> </div>
                    <p className="text-muted text-sm">ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                  </div>
                </div>
                <div className="rebiew_section">
                  <div id="leaveReview" className="mt-4 collapse show" >
                    <h5 className="mb-4">Leave a review</h5>
                    <form id="contact-form" method="get" action="#" className="form">
                      <div className="row">
                        <div className="col-sm-6">
                          <div className="form-group">
                            <input type="text" name="name" id="name" placeholder="Enter your name" required className="form-control" />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <select name="rating" id="rating" className="custom-select focus-shadow-0">
                              <option value="5">★★★★★ (5/5)</option>
                              <option value="4">★★★★☆ (4/5)</option>
                              <option value="3">★★★☆☆ (3/5)</option>
                              <option value="2">★★☆☆☆ (2/5)</option>
                              <option value="1">★☆☆☆☆ (1/5)</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <input type="email" name="email" id="email" placeholder="Enter your  email" required className="form-control" />
                      </div>
                      <div className="form-group">
                        <textarea rows="4" name="review" id="review" placeholder="Enter your review" required className="form-control"></textarea>
                      </div>
                      <button type="submit" className="btn btn-primary">Post review</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 right_Details">
          <div className="p-4 shadow ml-lg-4 rounded sticky-top" /* style="top: 100px;" */>
            <p className="text-muted"><span className="text-primary h2">$80</span> per night</p>
            <hr className="my-4" />
            <form id="booking-form" method="get" action="#" autoComplete="off" className="form">
              <div className="form-group">
                <label htmlFor="bookingDate" className="form-label">Your stay *</label>
                <div className="datepicker-container datepicker-container-right">
                  <input type="text" name="bookingDate" id="bookingDate" placeholder="Choose your dates" required className="form-control" />
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="guests" className="form-label">Guests *</label>
                <select name="guests" id="guests" className="form-control">
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                </select>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="guests" className="form-label">Child *</label>
                <select name="guests" id="guests" className="form-control">
                  <option value="1">1 Child</option>
                  <option value="2">2 Child</option>
                  <option value="3">3 Child</option>
                </select>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">Confirm Booking</button>
              </div>
            </form>
            <hr className="my-4" />
            <div className="text-center">
              <p> <a href="#" className="text-secondary text-sm"> <i className="fa fa-heart"></i> Bookmark This Cruise</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="Categories pt80 pb60">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8">
          <p className="subtitle text-secondary nopadding">Similar Cruise</p>
          <h1 className="paddtop1 font-weight lspace-sm">You may also like </h1>
        </div>
        <div className="col-md-4 d-lg-flex align-items-center justify-content-end"><a href="#" className="blist text-sm ml-2"> See all Cruise<i className="fas fa-angle-double-right ml-2"></i></a></div>
      </div>
      <div className="row asdasdas">
        <div className="swiper-container guides-slider-popular"> 
          <div className="swiper-wrapper"> 
            
            <div className="col-lg-4 col-md-6 col-sm-12 swiper-slide">
              <div className="listing-item ">
                <article className="TravelGo-category-listing fl-wrap">
                  <div className="TravelGo-category-img"> <a href="hotel-detailed.html"><img src="../assets/images/cruises/1.jpg" alt="" /></a>
                    <div className="TravelGo-category-opt">
                      <div className="listing-rating card-popup-rainingvis" data-starrating2="5"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                      <div className="rate-class-name">
                        <div className="score"><strong>Very Good</strong>27 Reviews </div>
                        <span>5.0</span> </div>
                    </div>
                  </div>
                  <div className="TravelGo-category-content fl-wrap title-sin_item">
                    <div className="TravelGo-category-content-title fl-wrap">
                      <div className="TravelGo-category-content-title-item">
                        <h3 className="title-sin_map"><a href="hotel-detailed.html">Asia & African Cruise</a></h3>
                        <div className="TravelGo-category-location fl-wrap"><a href="#" className="map-item"><i className="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a> <span>$ 200</span> </div>
                      </div>
                    </div>
                    <p>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                    <ul className="facilities-list fl-wrap">
                      <li><i className="fas fa-wifi"></i><span>Free WiFi</span></li>
                      <li><i className="fas fa-parking"></i><span>Parking</span></li>
                      <li><i className="fas fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                      <li><i className="fas fa-utensils"></i><span> Restaurant</span></li>
                    </ul>
                    <div className="TravelGo-category-footer fl-wrap">
                      <div className="TravelGo-category-price btn-grad"><span>2 days 3 nights</span></div>
                      <div className="TravelGo-opt-list"> <a href="#" className="single-map-item"><i className="fas fa-map-marker-alt"></i><span className="TravelGo-opt-tooltip">On the map</span></a> <a href="#" className="TravelGo-js-favorite"><i className="fas fa-heart"></i><span className="TravelGo-opt-tooltip">Save</span></a> <a href="#" className="TravelGo-js-booking"><i className="fas fa-retweet"></i><span className="TravelGo-opt-tooltip">Find Directions</span></a> </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
              <div className="col-lg-4 col-md-6 col-sm-12 swiper-slide">
              <div className="listing-item ">
                <article className="TravelGo-category-listing fl-wrap">
                  <div className="TravelGo-category-img"> <a href="hotel-detailed.html"><img src="../assets/images/cruises/4.jpg" alt="" /></a>
                    <div className="TravelGo-category-opt">
                      <div className="listing-rating card-popup-rainingvis" data-starrating2="5"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                      <div className="rate-class-name">
                        <div className="score"><strong>Very Good</strong>27 Reviews </div>
                        <span>5.0</span> </div>
                    </div>
                  </div>
                  <div className="TravelGo-category-content fl-wrap title-sin_item">
                    <div className="TravelGo-category-content-title fl-wrap">
                      <div className="TravelGo-category-content-title-item">
                        <h3 className="title-sin_map"><a href="hotel-detailed.html">Asia & African Cruise</a></h3>
                        <div className="TravelGo-category-location fl-wrap"><a href="#" className="map-item"><i className="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a> <span>$ 200</span> </div>
                      </div>
                    </div>
                    <p>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                    <ul className="facilities-list fl-wrap">
                      <li><i className="fas fa-wifi"></i><span>Free WiFi</span></li>
                      <li><i className="fas fa-parking"></i><span>Parking</span></li>
                      <li><i className="fas fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                      <li><i className="fas fa-utensils"></i><span> Restaurant</span></li>
                    </ul>
                    <div className="TravelGo-category-footer fl-wrap">
                      <div className="TravelGo-category-price btn-grad"><span>2 days 3 nights</span></div>
                      <div className="TravelGo-opt-list"> <a href="#" className="single-map-item"><i className="fas fa-map-marker-alt"></i><span className="TravelGo-opt-tooltip">On the map</span></a> <a href="#" className="TravelGo-js-favorite"><i className="fas fa-heart"></i><span className="TravelGo-opt-tooltip">Save</span></a> <a href="#" className="TravelGo-js-booking"><i className="fas fa-retweet"></i><span className="TravelGo-opt-tooltip">Find Directions</span></a> </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
              <div className="col-lg-4 col-md-6 col-sm-12 swiper-slide">
              <div className="listing-item ">
                <article className="TravelGo-category-listing fl-wrap">
                  <div className="TravelGo-category-img"> <a href="hotel-detailed.html"><img src="../assets/images/cruises/6.jpg" alt="" /></a>
                    <div className="TravelGo-category-opt">
                      <div className="listing-rating card-popup-rainingvis" data-starrating2="5"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                      <div className="rate-class-name">
                        <div className="score"><strong>Very Good</strong>27 Reviews </div>
                        <span>5.0</span> </div>
                    </div>
                  </div>
                  <div className="TravelGo-category-content fl-wrap title-sin_item">
                    <div className="TravelGo-category-content-title fl-wrap">
                      <div className="TravelGo-category-content-title-item">
                        <h3 className="title-sin_map"><a href="hotel-detailed.html">Asia & African Cruise</a></h3>
                        <div className="TravelGo-category-location fl-wrap"><a href="#" className="map-item"><i className="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a> <span>$ 200</span> </div>
                      </div>
                    </div>
                    <p>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                    <ul className="facilities-list fl-wrap">
                      <li><i className="fas fa-wifi"></i><span>Free WiFi</span></li>
                      <li><i className="fas fa-parking"></i><span>Parking</span></li>
                      <li><i className="fas fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                      <li><i className="fas fa-utensils"></i><span> Restaurant</span></li>
                    </ul>
                    <div className="TravelGo-category-footer fl-wrap">
                      <div className="TravelGo-category-price btn-grad"><span>2 days 3 nights</span></div>
                      <div className="TravelGo-opt-list"> <a href="#" className="single-map-item"><i className="fas fa-map-marker-alt"></i><span className="TravelGo-opt-tooltip">On the map</span></a> <a href="#" className="TravelGo-js-favorite"><i className="fas fa-heart"></i><span className="TravelGo-opt-tooltip">Save</span></a> <a href="#" className="TravelGo-js-booking"><i className="fas fa-retweet"></i><span className="TravelGo-opt-tooltip">Find Directions</span></a> </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          <div className="col-lg-4 col-md-6 col-sm-12 swiper-slide">
              <div className="listing-item ">
                <article className="TravelGo-category-listing fl-wrap">
                  <div className="TravelGo-category-img"> <a href="hotel-detailed.html"><img src="../assets/images/cruises/7.jpg" alt="" /></a>
                    <div className="TravelGo-category-opt">
                      <div className="listing-rating card-popup-rainingvis" data-starrating2="5"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div>
                      <div className="rate-class-name">
                        <div className="score"><strong>Very Good</strong>27 Reviews </div>
                        <span>5.0</span> </div>
                    </div>
                  </div>
                  <div className="TravelGo-category-content fl-wrap title-sin_item">
                    <div className="TravelGo-category-content-title fl-wrap">
                      <div className="TravelGo-category-content-title-item">
                        <h3 className="title-sin_map"><a href="hotel-detailed.html">Asia & African Cruise</a></h3>
                        <div className="TravelGo-category-location fl-wrap"><a href="#" className="map-item"><i className="fas fa-map-marker-alt"></i> 27th Brooklyn New York, USA</a> <span>$ 200</span> </div>
                      </div>
                    </div>
                    <p>Sed interdum metus at nisi tempor laoreet. Integer gravida orci a justo sodales.</p>
                    <ul className="facilities-list fl-wrap">
                      <li><i className="fas fa-wifi"></i><span>Free WiFi</span></li>
                      <li><i className="fas fa-parking"></i><span>Parking</span></li>
                      <li><i className="fas fa-smoking-ban"></i><span>Non-smoking Rooms</span></li>
                      <li><i className="fas fa-utensils"></i><span> Restaurant</span></li>
                    </ul>
                    <div className="TravelGo-category-footer fl-wrap">
                      <div className="TravelGo-category-price btn-grad"><span>2 days 3 nights</span></div>
                      <div className="TravelGo-opt-list"> <a href="#" className="single-map-item"><i className="fas fa-map-marker-alt"></i><span className="TravelGo-opt-tooltip">On the map</span></a> <a href="#" className="TravelGo-js-favorite"><i className="fas fa-heart"></i><span className="TravelGo-opt-tooltip">Save</span></a> <a href="#" className="TravelGo-js-booking"><i className="fas fa-retweet"></i><span className="TravelGo-opt-tooltip">Find Directions</span></a> </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="swiper-pagination d-md-none"> </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  );
};
export default PackageDetails;
