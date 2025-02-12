'use client'
import React from "react";

const Header = () => {
    return (
        <div>
            <div id="header">	<div id="top">
                <div class="container">
                    <div id="top-links" class="d-md-flex justify-content-between">
                        <ul class="list-group-horizontal d-flex top-right">
                            <li class="list-group-item">
                                <a href="javascript:void(0);">Welcome to TMD travel agency </a>
                            </li>
                            <li class="list-group-item">
                                <form method="post" enctype="multipart/form-data" id="form-language">
                                    <div class="btn-group">
                                        <button class="btn btn-link dropdown-toggle rounded-0" data-bs-toggle="dropdown">
                                            Language : <span class="name"><span class="visible-xs me-1">English</span><i class="fa fa-caret-down"></i></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="javascript:void(0);">English</a></li>
                                        </ul>
                                    </div>
                                </form>
                            </li>

                        </ul>
                        <ul class="list-group-horizonta d-flex top-left">
                            <li class="list-group-item"><a href="login.html" class="border-0">Login</a>
                                <a href="register.html">Register</a>
                            </li>
                            <li class="list-group-item"><a href="my_account_wishlist.html"><i class="icon_heart"></i>Wishlist</a></li>
                            <li class="list-group-item"><a href="shoppingcart.html"><i class="icon_cart"></i>Cart</a></li>
                        </ul>
                    </div>
                </div>
            </div>

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
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        home
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="index.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Homepage 1</a></li>
                                        <li><a href="header2.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Homepage 2</a></li>
                                        <li><a href="header3.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Homepage 3</a></li>
                                        <li><a href="header4.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Homepage 4</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Travel
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li class="dropdown-submenu">
                                            <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Tour</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="tour-grid-view.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Tour</a></li>
                                                <li><a href="tour-detail-view.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Tour Detail</a></li>
                                                <li><a href="tour-booking-form.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Tour Booking Form</a></li>
                                                <li><a href="thank-you.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Thank You</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Places</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="place.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Places</a></li>
                                                <li><a href="place-detail-view.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Places Detail</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Flight</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="flights.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Flight</a></li>
                                                <li><a href="flight-detail-view.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Flight Detail</a></li>
                                                <li><a href="flight-booking-form.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Flight Booking Form</a></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu">
                                            <a href="#"><i class="fa fa-angle-right" aria-hidden="true"></i>Hotel</a>
                                            <ul class="dropdown-menu">
                                                <li><a href="hotel.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Hotel</a></li>
                                                <li><a href="hotel-detail-view.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Hotel Detail</a></li>
                                                <li><a href="hotel-booking-form.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Hotel Booking Form</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Packages
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="packages.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Packages</a></li>
                                        <li><a href="package-detail-view.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Packages Detail</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">
                                        GUIDES
                                    </a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Shop
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="shop.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Shop</a></li>
                                        <li><a href="shopdetail.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Product Detail</a></li>
                                        <li><a href="shoppingcart.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Shopping Cart</a></li>
                                        <li><a href="checkout.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Checkout</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item  dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        user
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="login.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Login</a></li>
                                        <li><a href="register.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Register</a></li>
                                        <li><a href="my_account_dashboard.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Dashboard</a></li>
                                        <li><a href="my_account_profile.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Profile</a></li>
                                        <li><a href="my_account_profile_edit.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Profile Edit</a></li>
                                        <li><a href="my_account_booking.html"><i class="fa fa-angle-right" aria-hidden="true"></i>My Boooking List</a></li>
                                        <li><a href="my_account_wishlist.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Wishlist</a></li>
                                        <li><a href="my_account_setting.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Setting</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown nav-item"><a href="#" class="nav-link" data-bs-toggle="dropdown">BLOG</a>
                                    <ul class="dropdown-menu">
                                        <li><a href="blog.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Blog</a></li>
                                        <li><a href="blog-detail.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Post Page</a></li>
                                    </ul>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        pages
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a href="gallery.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Gallery</a></li>
                                        <li><a href="error-404.html"><i class="fa fa-angle-right" aria-hidden="true"></i>404 error Page</a></li>
                                        <li><a href="faq.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Faq</a></li>
                                        <li><a href="about.html"><i class="fa fa-angle-right" aria-hidden="true"></i>About</a></li>
                                        <li><a href="contact.html"><i class="fa fa-angle-right" aria-hidden="true"></i>Contact</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>

    )
}


export default Header;