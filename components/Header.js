'use client'
import React from "react";

const Header = () => {
    return (
        <div>
            <div id="header">


                <header>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4 col-md-4 col-xs-12">
                                <div class="social-icon">
                                    <ul class="d-flex justify-content-md-start list-group-horizontal p-0">
                                        <li class="list-group-item">
                                            <a href="https://www.facebook.com/" target="_blank">
                                                <i class="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="https://twitter.com/" target="_blank">
                                                <i class="fa-brands fa-twitter"></i></a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="https://plus.google.com/" target="_blank"><i class="social_googleplus" aria-hidden="true"></i></a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="https://www.instagram.com/" target="_blank">
                                                <i class="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li class="list-group-item">
                                            <a href="https://in.pinterest.com/" target="_blank">
                                                <i class="fa-brands fa-pinterest-p"></i></a>
                                        </li>
                                        <li class="list-group-item"><a href="https://photos.google.com/" target="_blank"><i class="social_picassa"></i></a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="col-sm-4 col-md-4 col-xs-12">
                                <div id="logo" class=" w-50 m-auto">
                                    <a href="index.html"><img class="img-responsive" src="images/logo.png" alt="logo" title="logo" /></a>
                                </div>
                            </div>
                            <div class="col-sm-4 col-md-4 col-xs-12">
                                <div class="button-login float-end text-md-end w-100">
                                    <button type="button" class="btn btn-default btn-lg" onclick="location.href='tour-booking-form.html'">Booking Now</button>
                                    <button type="button" class="btn btn-primary btn-lg" onclick="location.href='tour-grid-view.html'">Take a tour
                                        <i class="fa-regular fa-thumbs-up"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <nav id="menu" class="navbar navbar-expand-lg p-0">
                    <div class="container">
                        <span class="menutext visible-xs">Menu</span>
                        <button class="border-0 fs-6 m-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars text-white" aria-hidden="true"></i>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        HOME
                                    </a>
                                </li>
                                <li class="dropdown nav-item"><a href="/blog" class="nav-link">Blog</a></li>
                                <li class="dropdown nav-item"><a href="#" class="nav-link">Packages</a></li>
                                <li class="dropdown nav-item"><a href="#" class="nav-link">Contact US</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}


export default Header;