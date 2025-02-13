'use client'
import React from "react"

const PopularPlaces = () => {
    return (
        <div>
            <div class="placetop">
                <div class="container">
                    <div class="row">
                        <div class="places ">
                            <h1>MOst popular places</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a suscipit quam, ut vestibulum lorem.</p>
                            <div class="border-margin">
                                <hr />
                            </div>
                            <ul class="nav nav-tabs justify-content-between" role="tablist">
                                <li class="active">
                                    <a class="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" role="tab">all</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-usa-tab" data-bs-toggle="tab" data-bs-target="#nav-usa" role="tab">usa</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-canada-tab" data-bs-toggle="tab" data-bs-target="#nav-canada" role="tab">canada</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-europe-tab" data-bs-toggle="tab" data-bs-target="#nav-europe" role="tab">europe</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-india-tab" data-bs-toggle="tab" data-bs-target="#nav-india" role="tab">india</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-china-tab" data-bs-toggle="tab" data-bs-target="#nav-china" role="tab">china</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-singapore-tab" data-bs-toggle="tab" data-bs-target="#nav-singapore" role="tab">singapore</a>
                                </li>
                                <li class="">
                                    <a class="nav-link" id="nav-two-tab" data-bs-toggle="tab" data-bs-target="#nav-two" role="tab">usa & canada</a>
                                </li>
                            </ul>
                        </div>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="nav-all" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p1.jpg" alt="p1" title="p1" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>New York city</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Central Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Metropolitan Museum of Art</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p2.jpg" alt="p2" title="p2" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>las vegas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Las Vegas Strip</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>The Mirage</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p3.jpg" alt="p3" title="p3" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>Los angelas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Universal Studios Hollywood</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Griffith Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p4.jpg" alt="p4" title="p4" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>san francisco</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Golden Gate Bridge</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Alcatraz Island</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p5.jpg" alt="p5" title="p5" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>boston</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Freedom Trail</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Faneuil Hall Marketplace</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p6.jpg" alt="p6" title="p6" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>washington, d.c.</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Lincoln Memorial</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>National Museum of Natural..</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="nav-usa" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p1.jpg" alt="p1" title="p1" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>New York city</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Central Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Metropolitan Museum of Art</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p2.jpg" alt="p2" title="p2" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>las vegas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Las Vegas Strip</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>The Mirage</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p6.jpg" alt="p6" title="p6" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>washington, d.c.</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Lincoln Memorial</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>National Museum of Natural..</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="nav-canada" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p4.jpg" alt="p4" title="p4" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>san francisco</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Golden Gate Bridge</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Alcatraz Island</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p5.jpg" alt="p5" title="p5" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>boston</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Freedom Trail</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Faneuil Hall Marketplace</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p6.jpg" alt="p6" title="p6" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>washington, d.c.</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Lincoln Memorial</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>National Museum of Natural..</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="nav-europe" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p1.jpg" alt="p1" title="p1" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>New York city</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Central Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Metropolitan Museum of Art</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p2.jpg" alt="p2" title="p2" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>las vegas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Las Vegas Strip</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>The Mirage</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p3.jpg" alt="p3" title="p3" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>Los angelas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Universal Studios Hollywood</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Griffith Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="nav-india" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p3.jpg" alt="p3" title="p3" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>Los angelas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Universal Studios Hollywood</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Griffith Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p5.jpg" alt="p5" title="p5" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>boston</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Freedom Trail</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Faneuil Hall Marketplace</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p6.jpg" alt="p6" title="p6" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>washington, d.c.</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Lincoln Memorial</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>National Museum of Natural..</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="nav-china" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p1.jpg" alt="p1" title="p1" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>New York city</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Central Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Metropolitan Museum of Art</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p2.jpg" alt="p2" title="p2" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>las vegas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Las Vegas Strip</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>The Mirage</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p3.jpg" alt="p3" title="p3" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>Los angelas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Universal Studios Hollywood</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Griffith Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p4.jpg" alt="p4" title="p4" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>san francisco</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Golden Gate Bridge</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Alcatraz Island</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p5.jpg" alt="p5" title="p5" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>boston</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Freedom Trail</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Faneuil Hall Marketplace</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p6.jpg" alt="p6" title="p6" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>washington, d.c.</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Lincoln Memorial</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>National Museum of Natural..</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane " id="nav-singapore" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p4.jpg" alt="p4" title="p4" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>san francisco</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Golden Gate Bridge</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Alcatraz Island</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p5.jpg" alt="p5" title="p5" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>boston</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Freedom Trail</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Faneuil Hall Marketplace</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p6.jpg" alt="p6" title="p6" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>washington, d.c.</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Lincoln Memorial</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>National Museum of Natural..</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="nav-two" role="tabpanel">
                                <div class="row">
                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p1.jpg" alt="p1" title="p1" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>New York city</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Central Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Metropolitan Museum of Art</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p2.jpg" alt="p2" title="p2" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>las vegas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Las Vegas Strip</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>The Mirage</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-4 col-sm-6 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/p3.jpg" alt="p3" title="p3" class="img-responsive" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                                <div class="matter">
                                                    <h2>Los angelas</h2>
                                                    <p>start from $375.00</p>
                                                    <ul class="list-inline">
                                                        <li><a href="#">top rates</a></li>
                                                        <li><a href="#">hotels deals </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Universal Studios Hollywood</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="inner">
                                                    <img src="images/icon-map.png" class="img-responsive" title="map" alt="map" />
                                                    <h4>Griffith Park</h4>
                                                    <div class="rate">
                                                        <span>1270 Reviews</span>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                        <i class="fa fa-star" aria-hidden="true"></i>
                                                    </div>
                                                </div>
                                                <div class="text-center">
                                                    <button type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center">
                                <button class="btn-primary" type="button" onclick="location.href='tour-grid-view.html'">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default PopularPlaces;