import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [Data, setData] = useState([]);
  const fetchData = () => {
    const params = { random: 3 };

    var url = "http://localhost:3000/api/v1/packages/get-package";
    axios
      .post(url, params)
      .then((response) => {
        if (response.data) {
          setData((e) => response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <section className="p-0 height-700 parallax-bg home-banner-img">
        <div className="container h-100">
          <div className="row justify-content-between align-items-center h-100">
            <div className="col-md-8 mb-7">
              <h4>-Saint Augustine</h4>
              <h1 className="display-4 font-weight-bold">
                The world is a book, and those who do not travel read only one
                page.
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-lg-n9 mt-sm-0 pb-0 z-index-9 booking-search">
        <div className="container ">
          <div className="row shadow border-radius-3">
            <div className="col-md-12 np">
              <div className="feature-box h-100">
                <div className="tab_container">
                  <input id="tab1" type="radio" name="tabs" /* checked */ />
                  <label htmlFor="tab1">
                    <i className="fas fa-utensils"></i>
                    <span>Hotels</span>
                  </label>
                  <input id="tab2" type="radio" name="tabs" />
                  <label htmlFor="tab2">
                    <i className="fas fa-helicopter"></i>
                    <span>Flights</span>
                  </label>
                  <input id="tab3" type="radio" name="tabs" />
                  <label htmlFor="tab3">
                    <i className="fas fa-car-side"></i>
                    <span>Cars</span>
                  </label>
                  <input id="tab4" type="radio" name="tabs" />
                  <label htmlFor="tab4">
                    <i className="fas fa-ship"></i>
                    <span>Cruises</span>
                  </label>
                  <input id="tab5" type="radio" name="tabs" />
                  <label htmlFor="tab5">
                    <i className="fas fa-route"></i>
                    <span>Tours</span>
                  </label>
                  <section id="content1" className="tab-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="City, Point of Interest or U.S. Zip Code"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker"
                            autoComplete="off"
                            placeholder="Check-in"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-out"
                            autoComplete="off"
                            placeholder="Check-out"
                          />
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Rooms</option>
                            <option value="location1">01</option>
                            <option value="location2">02</option>
                            <option value="location3">03</option>
                            <option value="location4">04</option>
                            <option value="location5">05</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-1 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Guests</option>
                            <option value="location1">01</option>
                            <option value="location2">02</option>
                            <option value="location3">03</option>
                            <option value="location4">04</option>
                            <option value="location5">05</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content2" className="tab-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="From : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="To : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-1"
                            autoComplete="off"
                            placeholder="Departing"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-2"
                            autoComplete="off"
                            placeholder="Returning"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content3" className="tab-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Pick-up Location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Drop-off Location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-3"
                            autoComplete="off"
                            placeholder="Pick-up Date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-4"
                            autoComplete="off"
                            placeholder="Drop-ff Date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content4" className="tab-content">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="enter a destination or hotel name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-5"
                            autoComplete="off"
                            placeholder="Departure Date"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Cruise Length</option>
                            <option value="location1">1-2 Night</option>
                            <option value="location2">2-3 Night</option>
                            <option value="location3">3-4 Night</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <select className="custom-select select-big">
                            <option /* selected="" */>Cruise Line</option>
                            <option value="location1">
                              Azamara Club Cruises
                            </option>
                            <option value="location2">Celebrity Cruises</option>
                            <option value="location3">Cruise & Maritime</option>
                            <option value="location4">Oceania Cruises</option>
                            <option value="location5">
                              Peter Deilmann Cruises
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section id="content5" className="tab-content">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="From : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="fas fa-map-marker-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="To : City, Airport, U.S. Zip"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-6"
                            autoComplete="off"
                            placeholder="Departing"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          {" "}
                          <span className="far fa-calendar-alt"></span>
                          <input
                            className="form-control"
                            type="text"
                            id="datepicker-7"
                            autoComplete="off"
                            placeholder="Returning"
                          />
                        </div>
                      </div>
                      <div className="col-lg-2 col-md-6 col-sm-6 col-xs-12 padding8">
                        <div className="form-group">
                          <button
                            className="btn btn-primary btn-lg btn-grad"
                            type="submit"
                          >
                            Search
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Categories pt80 pb60 ">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-secondary nopadding">
                Stay and eat like a local
              </p>
              <h1 className="paddtop1 font-weight lspace-sm">Popular Hotels</h1>
            </div>
            <div className="col-md-4 d-lg-flex align-items-center justify-content-end">
              <a href="#" className="blist text-sm ml-2">
                {" "}
                See all Hotels<i className="fas fa-angle-double-right ml-2"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="listroBox">
                <figure>
                  {" "}
                  <a
                    href="assets/hotel-detailed.html"
                    className="wishlist_bt"
                  ></a>{" "}
                  <a href="assets/hotel-detailed.html">
                    <img
                      src="assets/images/hotels/room5.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>{" "}
                </figure>
                <div className="listroBoxmain">
                  <h3>
                    <a href="assets/hotel-detailed.html">
                      Modern, Well-Appointed Room
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a className="address" href="#">
                    Get directions
                  </a>{" "}
                </div>
                <ul>
                  <li>
                    <p className="card-text text-muted">
                      <span className="h4 text-primary">$80</span> / night
                    </p>
                  </li>
                  <li>
                    <div className="R_retings">
                      <div className="list-rat-ch list-room-rati">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="listroBox">
                <figure>
                  {" "}
                  <a
                    href="assets/hotel-detailed.html"
                    className="wishlist_bt"
                  ></a>{" "}
                  <a href="assets/hotel-detailed.html">
                    <img
                      src="assets/images/hotels/room1.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>{" "}
                </figure>
                <div className="listroBoxmain">
                  <h3>
                    <a href="assets/hotel-detailed.html">
                      Modern, Well-Appointed Room
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a className="address" href="#">
                    Get directions
                  </a>{" "}
                </div>
                <ul>
                  <li>
                    <p className="card-text text-muted">
                      <span className="h4 text-primary">$80</span> / night
                    </p>
                  </li>
                  <li>
                    <div className="R_retings">
                      <div className="list-rat-ch list-room-rati">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="listroBox">
                <figure>
                  {" "}
                  <a
                    href="assets/hotel-detailed.html"
                    className="wishlist_bt"
                  ></a>{" "}
                  <a href="assets/hotel-detailed.html">
                    <img
                      src="assets/images/hotels/room2.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>{" "}
                </figure>
                <div className="listroBoxmain">
                  <h3>
                    <a href="assets/hotel-detailed.html">
                      Modern, Well-Appointed Room
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a className="address" href="#">
                    Get directions
                  </a>{" "}
                </div>
                <ul>
                  <li>
                    <p className="card-text text-muted">
                      <span className="h4 text-primary">$80</span> / night
                    </p>
                  </li>
                  <li>
                    <div className="R_retings">
                      <div className="list-rat-ch list-room-rati">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="listroBox">
                <figure>
                  {" "}
                  <a
                    href="assets/hotel-detailed.html"
                    className="wishlist_bt"
                  ></a>{" "}
                  <a href="assets/hotel-detailed.html">
                    <img
                      src="assets/images/hotels/room7.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>{" "}
                </figure>
                <div className="listroBoxmain">
                  <h3>
                    <a href="assets/hotel-detailed.html">
                      Modern, Well-Appointed Room
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a className="address" href="#">
                    Get directions
                  </a>{" "}
                </div>
                <ul>
                  <li>
                    <p className="card-text text-muted">
                      <span className="h4 text-primary">$80</span> / night
                    </p>
                  </li>
                  <li>
                    <div className="R_retings">
                      <div className="list-rat-ch list-room-rati">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="listroBox">
                <figure>
                  {" "}
                  <a
                    href="assets/hotel-detailed.html"
                    className="wishlist_bt"
                  ></a>{" "}
                  <a href="assets/hotel-detailed.html">
                    <img
                      src="assets/images/hotels/room8.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>{" "}
                </figure>
                <div className="listroBoxmain">
                  <h3>
                    <a href="assets/hotel-detailed.html">
                      Modern, Well-Appointed Room
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a className="address" href="#">
                    Get directions
                  </a>{" "}
                </div>
                <ul>
                  <li>
                    <p className="card-text text-muted">
                      <span className="h4 text-primary">$80</span> / night
                    </p>
                  </li>
                  <li>
                    <div className="R_retings">
                      <div className="list-rat-ch list-room-rati">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="listroBox">
                <figure>
                  {" "}
                  <a
                    href="assets/hotel-detailed.html"
                    className="wishlist_bt"
                  ></a>{" "}
                  <a href="assets/hotel-detailed.html">
                    <img
                      src="assets/images/hotels/room6.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    <div className="read_more">
                      <span>Read more</span>
                    </div>
                  </a>{" "}
                </figure>
                <div className="listroBoxmain">
                  <h3>
                    <a href="assets/hotel-detailed.html">
                      Modern, Well-Appointed Room
                    </a>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do
                  </p>
                  <a className="address" href="#">
                    Get directions
                  </a>{" "}
                </div>
                <ul>
                  <li>
                    <p className="card-text text-muted">
                      <span className="h4 text-primary">$80</span> / night
                    </p>
                  </li>
                  <li>
                    <div className="R_retings">
                      <div className="list-rat-ch list-room-rati">
                        {" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                        <i className="fa fa-star" aria-hidden="true"></i>{" "}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service pt80 pb80 service-home">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 mx-auto">
              <div className="title text-center">
                <h2>Did you know?</h2>
                <p className="mb-0">
                  Mauris ullamcorper nibh quis leo ultrices in hendrerit velit
                  tristiqueut augue in nulla lacinia bibendum liberoras rutrum
                  ac purus ut tristique. Nullam placerat lacinia dolor quis
                  pretium. Phasellus vitae lacinia quam
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mt-30">
              <div className="featureBox icon-grad h-100">
                <div className="feature-box-icon">
                  <i className="fas fa-route"></i>
                </div>
                <h3 className="feature-box-title">Best Travel Agent</h3>
                <p className="feature-box-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="mt-3" href="#">
                  See more!
                </a>{" "}
              </div>
            </div>
            <div className="col-md-4 mt-30">
              <div className="featureBox icon-grad h-100">
                <div className="feature-box-icon">
                  <i className="fab fa-avianex"></i>
                </div>
                <h3 className="feature-box-title">Trust & Safety</h3>
                <p className="feature-box-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="mt-3" href="#">
                  See more!
                </a>{" "}
              </div>
            </div>
            <div className="col-md-4 mt-30">
              <div className="featureBox icon-grad h-100">
                <div className="feature-box-icon">
                  <i className="fas fa-bullhorn"></i>
                </div>
                <h3 className="feature-box-title">Best Price Guarantee</h3>
                <p className="feature-box-desc">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="mt-3" href="#">
                  See more!
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Categories pt80 pb60 Categories-home">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8">
              <p className="subtitle text-secondary nopadding">
                Packages recommended for you.
              </p>
              <h1 className="paddtop1 font-weight lspace-sm">Most selling</h1>
            </div>
            <div className="col-md-4 d-lg-flex align-items-center justify-content-end">
              <a href="#" className="blist text-sm ml-2">
                {" "}
                View all
                <i className="fas fa-angle-double-right ml-2"></i>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="swiper-container guides-slider-home-cruises">
              <div className="swiper-wrapper">
                {Data && Data.message
                  ? Data.message.map(function (arr, i) {
                      return (
                        <div className="swiper-slide h-auto px-2">
                          <div className="listing-item ">
                            <article className="TravelGo-category-listing fl-wrap">
                              <div className="TravelGo-category-img">
                                {" "}
                                <a href="assets/hotel-detailed.html">
                                  <img
                                    src="assets/images/cruises/1.jpg"
                                    alt=""
                                  />
                                </a>
                                <div className="TravelGo-category-opt">
                                  <div
                                    className="listing-rating card-popup-rainingvis"
                                    data-starrating2="5"
                                  >
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                    <i className="fa fa-star"></i>
                                  </div>
                                  <div className="rate-class-name">
                                    <div className="score">
                                      <strong>Very Good</strong>27 Reviews{" "}
                                    </div>
                                    <span>5.0</span>{" "}
                                  </div>
                                </div>
                              </div>
                              <div className="TravelGo-category-content fl-wrap title-sin_item">
                                <div className="TravelGo-category-content-title fl-wrap">
                                  <div className="TravelGo-category-content-title-item">
                                    <h3 className="title-sin_map">
                                      <a href="assets/hotel-detailed.html">
                                        {arr.package_title}
                                      </a>
                                    </h3>
                                    <div className="TravelGo-category-location fl-wrap">
                                      <a href="#" className="map-item">
                                        <i className="fas fa-map-marker-alt"></i>{" "}
                                        {arr.country[0].country_name}
                                      </a>{" "}
                                      <span> {arr.price}/-</span>{" "}
                                    </div>
                                  </div>
                                </div>
                                <p>Ammenities</p>
                                <ul className="facilities-list fl-wrap">
                                  {arr && arr.amenities
                                    ? arr.amenities.map(function (arr1, i) {
                                      {console.log(arr1)}
                                        return (
                                          <li>
                                            <i className=""></i>
                                            <span>{JSON.stringify(arr1)}</span>
                                          </li>
                                        );
                                      })
                                    : null}
                                </ul>
                                <div className="TravelGo-category-footer fl-wrap">
                                  <div className="TravelGo-category-price btn-grad">
                                    <span>2 days 3 nights</span>
                                  </div>
                                  <div className="TravelGo-opt-list">
                                    {" "}
                                    <a href="#" className="single-map-item">
                                      <i className="fas fa-map-marker-alt"></i>
                                      <span className="TravelGo-opt-tooltip">
                                        On the map
                                      </span>
                                    </a>{" "}
                                    <a
                                      href="#"
                                      className="TravelGo-js-favorite"
                                    >
                                      <i className="fas fa-heart"></i>
                                      <span className="TravelGo-opt-tooltip">
                                        Save
                                      </span>
                                    </a>{" "}
                                    <a href="#" className="TravelGo-js-booking">
                                      <i className="fas fa-retweet"></i>
                                      <span className="TravelGo-opt-tooltip">
                                        Find Directions
                                      </span>
                                    </a>{" "}
                                  </div>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                      );
                    })
                  : null}
              </div>
              <div className="swiper-pagination d-md-none"> </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;
