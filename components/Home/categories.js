"use client"
import React, { useState } from "react";

const Categories = () => {
    const [activeTab, setActiveTab] = useState('packages');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <div>

            <div className="placetop">
                <div className="container">
                    <div className="row">
                        <div className="places">
                            <h1>Book Now by Categories</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a suscipit quam, ut vestibulum lorem.</p>
                            <div className="border-margin">
                                <hr />
                            </div>
                            <ul className="nav nav-tabs list-inline justify-content-center" role="tablist">

                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === 'packages' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('packages')}
                                    >
                                        Packages
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className={`nav-link ${activeTab === 'flights' ? 'active' : ''}`}
                                        onClick={() => handleTabClick('flights')}
                                    >
                                        Flights
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content tour">

                            {activeTab === 'packages' && (
                                <div className={activeTab === "packages" ? "tab-pane fade show active" : "tab-pane fade  active"} role="tabpanel">
                                    {/* Packages content here */}
                                    <div class="row">
                                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <a href="#"><img src="images/t1.jpg" alt="t1" title="t1" class="img-responsive" /></a>
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                    <div class="matter">
                                                        <p>grand switerland  <span>$575.00</span></p>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <div class="inner">
                                                        <h4>Grand Switerland</h4>
                                                        <div class="rate">
                                                            <div class="pull-left">
                                                                <span>HOT DEALS</span>
                                                            </div>
                                                            <div class="pull-right">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                                    </div>
                                                    <div class="text-left">
                                                        <button type="button" onclick="location.href='tour-booking-form.html'">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                        <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <a href="#"><img src="images/t2.jpg" alt="t2" title="t2" class="img-responsive" /></a>
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                    <div class="matter">
                                                        <p>discover japan  <span>$575.00</span></p>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <div class="inner">
                                                        <h4>Discover Japan</h4>
                                                        <div class="rate">
                                                            <div class="pull-left">
                                                                <span>HOT DEALS</span>
                                                            </div>
                                                            <div class="pull-right">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                                    </div>
                                                    <div class="text-left">
                                                        <button type="button" onclick="location.href='tour-booking-form.html'">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                        <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <a href="#"><img src="images/t3.jpg" alt="t3" title="t3" class="img-responsive" /></a>
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                    <div class="matter">
                                                        <p>Niko Trip  <span>$575.00</span></p>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <div class="inner">
                                                        <h4>Niko Trip</h4>
                                                        <div class="rate">
                                                            <div class="pull-left">
                                                                <span>HOT DEALS</span>
                                                            </div>
                                                            <div class="pull-right">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                                    </div>
                                                    <div class="text-left">
                                                        <button type="button" onclick="location.href='tour-booking-form.html'">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                        <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {activeTab === 'flights' && (
                                <div className={activeTab === "flights" ? "tab-pane fade show active" : "tab-pane fade  active"} role="tabpanel">
                                    {/* Flights content here */}
                                    <div class="row">
                                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <a href="#"><img src="images/t4.jpg" alt="t4" title="t4" class="img-responsive" /></a>
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                    <div class="matter">
                                                        <p>Singapore Trip  <span>$575.00</span></p>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <div class="inner">
                                                        <h4>Singapore Trip</h4>
                                                        <div class="rate">
                                                            <div class="pull-left">
                                                                <span>HOT DEALS</span>
                                                            </div>
                                                            <div class="pull-right">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                                    </div>
                                                    <div class="text-left">
                                                        <button type="button" onclick="location.href='tour-booking-form.html'">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                        <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <a href="#"><img src="images/t5.jpg" alt="t5" title="t5" class="img-responsive" /></a>
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                    <div class="matter">
                                                        <p>The New California  <span>$575.00</span></p>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <div class="inner">
                                                        <h4>The New California</h4>
                                                        <div class="rate">
                                                            <div class="pull-left">
                                                                <span>HOT DEALS</span>
                                                            </div>
                                                            <div class="pull-right">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                                    </div>
                                                    <div class="text-left">
                                                        <button type="button" onclick="location.href='tour-booking-form.html'">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                        <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <a href="#"><img src="images/t6.jpg" alt="t6" title="t6" class="img-responsive" /></a>
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                    <div class="matter">
                                                        <p>greece, santormi  <span>$575.00</span></p>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <div class="inner">
                                                        <h4>Astro Place Hotels</h4>
                                                        <div class="rate">
                                                            <div class="pull-left">
                                                                <span>HOT DEALS</span>
                                                            </div>
                                                            <div class="pull-right">
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                                <i class="fa fa-star" aria-hidden="true"></i>
                                                            </div>
                                                        </div>
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                                    </div>
                                                    <div class="text-left">
                                                        <button type="button" onclick="location.href='tour-booking-form.html'">Book Now <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                        <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div class="text-center">
                            <button class="btn-primary" type="button">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Categories;