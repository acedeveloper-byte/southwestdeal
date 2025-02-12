import Breadcrumbs from '@/Breadcrumbs'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Testimonial from '@/components/Home/testimonial'
import React from 'react'
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const about = () => {
    return (
        <>
            <Header />
            <div class="about" >
                <Breadcrumbs main="Home" page="About US" mainlink={"/"} pagelink={"/about"} title={"About Us"} />
                <section>
                    <div class="bg">
                        <img src="images/about/bg.jpg" class="img-responsive" alt="bg" title="bg" />
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12">
                                    <div class="places m-auto">
                                        <h1>we are the best travel agency</h1>
                                        <div class="border-margin">
                                            <hr />
                                        </div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet velit a elit bibendum, congue gravida dui vulputate. Duis ex erat, malesuada eget turpis eget, placerat scelerisque nulla. Curabitur interdum facilisis arcu eget porta. In hac habitasse platea dictumst. Vestibulum nulla massa, pharetra quis metus eu, viverra faucibus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet velit a elit bibendum, congue gravida dui vulputate. Duis ex erat, malesuada eget turpis eget, placerat scelerisque nulla. Curabitur interdum facilisis arcu eget porta. In hac habitasse platea dictumst. Vestibulum nulla massa, pharetra quis metus eu, viverra faucibus enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet velit a elit bibendum, congue gravida dui vulputate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="placetop">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-3">
                                    <div class="matter">
                                        <div class="imgs">
                                            <img src="images/about/icon1.png" alt="icon1" title="icon1" class="img-responsive" />
                                        </div>
                                        <h1>Easy to book tickets</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex erat, malesuada eget turpis eget.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="matter">
                                        <div class="imgs">
                                            <img src="images/about/icon2.png" alt="icon2" title="icon2" class="img-responsive" />
                                        </div>
                                        <h1>Business tour packages</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex erat, malesuada eget turpis eget.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="matter">
                                        <div class="imgs">
                                            <img src="images/about/icon3.png" alt="icon3" title="icon3" class="img-responsive" />
                                        </div>
                                        <h1>Adventure tour packages</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex erat, malesuada eget turpis eget.</p>
                                    </div>
                                </div>
                                <div class="col-sm-3">
                                    <div class="matter">
                                        <div class="imgs">
                                            <img src="images/about/icon4.png" alt="icon4" title="icon4" class="img-responsive" />
                                        </div>
                                        <h1>Holiday fun tour packages</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ex erat, malesuada eget turpis eget.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="expert">
                        <div class="container">
                            <div class="row">
                                <div class="places">
                                    <h1>our experts tour guides</h1>
                                    <div class="border-margin">
                                        <hr />
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <img src="images/about/image1.jpg" alt="image1" title="image1" class="img-responsive w-100" />
                                            <div class="hoverbox"></div>
                                            <div class="sidebar">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <button type="button" class="facebook"><i class="fa-brands fa-facebook-f"></i></button>
                                                        <div class="fb">
                                                            <a href="https://www.facebook.com/" target="_blank">Facebook</a><i class="fa-brands fa-facebook-f"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="twitter"><i class="fa-brands fa-twitter" aria-hidden="true"></i></button>
                                                        <div class="tw">
                                                            <a href="https://twitter.com/" target="_blank">Twitter</a><i class="fa-brands fa-twitter" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="google"><i class="social_googleplus" aria-hidden="true"></i></button>
                                                        <div class="go">
                                                            <a href="https://plus.google.com/" target="_blank">Google +</a><i class="social_googleplus" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></button>
                                                        <div class="inst">
                                                            <a href="https://www.instagram.com/" target="_blank">Instagram</a><i class="fa-brands fa-instagram" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="pinterest"><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i></button>
                                                        <div class="pint">
                                                            <a href="https://in.pinterest.com/" target="_blank">Pinterest</a><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <h4>JOhn Doe</h4>
                                            <p>Winter Guide</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <img src="images/about/image2.jpg" alt="image2" title="image2" class="img-responsive w-100" />
                                            <div class="hoverbox"></div>
                                            <div class="sidebar">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <button type="button" class="facebook"><i class="fa-brands fa-facebook-f"></i></button>
                                                        <div class="fb">
                                                            <a href="https://www.facebook.com/" target="_blank">Facebook</a><i class="fa-brands fa-facebook-f"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="twitter"><i class="fa-brands fa-twitter" aria-hidden="true"></i></button>
                                                        <div class="tw">
                                                            <a href="https://twitter.com/" target="_blank">Twitter</a><i class="fa-brands fa-twitter" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="google"><i class="social_googleplus" aria-hidden="true"></i></button>
                                                        <div class="go">
                                                            <a href="https://plus.google.com/" target="_blank">Google +</a><i class="social_googleplus" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></button>
                                                        <div class="inst">
                                                            <a href="https://www.instagram.com/" target="_blank">Instagram</a><i class="fa-brands fa-instagram" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="pinterest"><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i></button>
                                                        <div class="pint">
                                                            <a href="https://in.pinterest.com/" target="_blank">Pinterest</a><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <h4>sara lora </h4>
                                            <p>Summer Guide</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="product-thumb">
                                        <div class="image">
                                            <img src="images/about/image3.jpg" alt="image3" title="image3" class="img-responsive w-100" />
                                            <div class="hoverbox"></div>
                                            <div class="sidebar">
                                                <ul class="list-unstyled">
                                                    <li>
                                                        <button type="button" class="facebook"><i class="fa-brands fa-facebook-f"></i></button>
                                                        <div class="fb">
                                                            <a href="https://www.facebook.com/" target="_blank">Facebook</a><i class="fa-brands fa-facebook-f"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="twitter"><i class="fa-brands fa-twitter" aria-hidden="true"></i></button>
                                                        <div class="tw">
                                                            <a href="https://twitter.com/" target="_blank">Twitter</a><i class="fa-brands fa-twitter" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="google"><i class="social_googleplus" aria-hidden="true"></i></button>
                                                        <div class="go">
                                                            <a href="https://plus.google.com/" target="_blank">Google +</a><i class="social_googleplus" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="instagram"><i class="fa-brands fa-instagram" aria-hidden="true"></i></button>
                                                        <div class="inst">
                                                            <a href="https://www.instagram.com/" target="_blank">Instagram</a><i class="fa-brands fa-instagram" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <button type="button" class="pinterest"><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i></button>
                                                        <div class="pint">
                                                            <a href="https://in.pinterest.com/" target="_blank">Pinterest</a><i class="fa-brands fa-pinterest-p" aria-hidden="true"></i>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="caption">
                                            <h4>JOhn william</h4>
                                            <p>Ocean Guide</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Testimonial />
                </section>
                <section>
                    <div class="logo">
                        <div class="container">
                            <div class="row">
                                <div class="col-sm-12 col-xs-12">
                                    <ul class="d-md-flex justify-content-between list-group-horizontal align-items-center p-0">
                                        <li class="list-group-item text-center "><img src="images/header4/logo1.png" class="img-responsive" alt="logo" title="logo" /></li>
                                        <li class="list-group-item text-center"><img src="images/header4/logo2.png" class="img-responsive" alt="logo" title="logo" /></li>
                                        <li class="list-group-item text-center"><img src="images/header4/logo3.png" class="img-responsive" alt="logo" title="logo" /></li>
                                        <li class="list-group-item text-center"><img src="images/header4/logo4.png" class="img-responsive" alt="logo" title="logo" /></li>
                                        <li class="list-group-item text-center"><img src="images/header4/logo5.png" class="img-responsive" alt="logo" title="logo" /></li>
                                        <li class="list-group-item text-center"><img src="images/header4/logo6.png" class="img-responsive" alt="logo" title="logo" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="news">
                        <img src="images/subscribe-bg.jpg" class="img-responsive sub" alt="subscribe-bg" title="subscribe-bg" />
                        <div class="newsinner">
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/foot-banner1.png" alt="foot-banner1" title="foot-banner1" class="img-responsive w-100" /></a>
                                                <div class="hoverbox"></div>
                                                <div class="matter">
                                                    <p class="des"><span class="icon_building_alt"></span> Hotel</p>
                                                    <button type="button"> Booking Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/foot-banner2.png" alt="foot-banner2" title="foot-banner2" class="img-responsive w-100" /></a>
                                                <div class="hoverbox"></div>
                                                <div class="off">
                                                    <span>Best Packages</span>
                                                </div>
                                                <div class="matter">
                                                    <p class="des1">$1000 <span>Package</span> to <small>Dubai</small></p>
                                                    <button type="button"> Booking Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-4 col-xs-12">
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="images/foot-banner3.png" alt="foot-banner3" title="foot-banner3" class="img-responsive w-100" /></a>
                                                <div class="hoverbox"></div>
                                                <div class="matter">
                                                    <p class="des2"><i class="icon_percent_alt"></i> 25% off<br /> to <span>Island</span></p>
                                                    <button type="button"> Booking Now</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-xs-12">
                                        <form class="subscribe">
                                            <div class="form-group">
                                                <div class="input-group align-items-center input-group">
                                                    <label>Subscribe to our newsletter</label>
                                                    <input placeholder="Enter your email" name="subscribe_email" value="" type="text" />
                                                    <button class="btn btn-default btn-lg" type="submit">Subscribe Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>

    )
}

export default about
