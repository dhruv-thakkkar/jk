import React from "react";
const Footer = () => {
    return (
        <footer className="footer footer-dark pt-6 position-relative">
            <div className="footer-content">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 order-sm-1">
                            <div className="widget address"> <a href="assets/index.html" className="footer-logo mb-3 d-block">
                                <img src="assets/images/logo-footer.png" />
                            </a>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 order-sm-3">
                            <div className="widget">
                                <h6>Quick LInks</h6>
                                <ul className="nav flex-column">
                                    <li className="nav-item"><a className="nav-link" href="assets/#">About</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Contact</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/index.html">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Blog</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Portfolio</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 order-sm-4">
                            <div className="widget">
                                <h6>Company</h6>
                                <ul className="nav flex-column primary-hover">
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Help</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Careers</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/index.html">Terms & Conditions</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Privacy & Policy</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">FAQs</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-4 order-sm-5">
                            <div className="widget">
                                <h6>Support</h6>
                                <ul className="nav flex-column primary-hover">
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Documentation</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Knowledge Base</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/index.html">Forum</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Contact</a></li>
                                    <li className="nav-item"><a className="nav-link" href="assets/#">Terms of Use</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 order-sm-2">
                            <div className="widget address">
                                <ul className="list-unstyled">
                                    <li className="media mb-3"><i className="fas fa-map-marked-alt mr-3 display-8"></i>216 Coburn Shahi Road Mumbai, Near Center Road, IL 54785. </li>
                                    <li className="media mb-3"><i className="mr-3 display-8 fas fa-headphones-alt"></i> {process.env.REACT_APP_PHONE_NUMBER}</li>
                                    <li className="media mb-3"><i className="mr-3 display-8 far fa-envelope"></i> {process.env.REACT_APP_EMAIL}</li>
                                    <li className="media mb-3"><i className="mr-3 display-8 far fa-clock"></i>
                                        <p>Mon - Fri: <strong>09:00 - 21:00</strong> <br />
                                            Sat & Sun: <strong>Closed</strong></p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider mt-3"></div>
            <div className="footer-copyright py-3">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">
                        <div className="copyright-text">©2019 All Rights Reserved by <a href="assets/#!"> TravelGo.</a></div>

                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

