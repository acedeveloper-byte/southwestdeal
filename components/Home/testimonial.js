'use client'
import React from 'react'

const Testimonial = () => {
    const settings = {
        dots: true, // Show dots for navigation
        infinite: true, // Loop the carousel
        speed: 500, // Speed of transition
        slidesToShow: 1, // Number of slides to show at once
        slidesToScroll: 1, // Number of slides to scroll at once
    };

    return (
        <div>

            <div class="testimonail">
                <div class="container">
                    <div class="row">
                        <div class="places">
                            <h1>what travelers are saying</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a suscipit quam, ut vestibulum lorem.</p>
                            <div class="border-margin">
                                <hr />
                            </div>
                        </div>
                        <div class="testimonails">
                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="box">
                                        <img src="images/pic1.png" alt="pic1" title="pic1" class="img-responsive" />
                                        <div class="caption">
                                            <h4>John William</h4>
                                            <div class="rate">
                                                <div class="pull-right">
                                                    <span>FROM CANADA</span>
                                                </div>
                                                <div class="pull-left">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus suscipit malesuada. Cras nec hendrerit lacus. Curabitur nec elementum justo. Sed vitae dapibus augue."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="box">
                                        <img src="images/pic2.png" alt="pic2" title="pic2" class="img-responsive" />
                                        <div class="caption">
                                            <h4>John William</h4>
                                            <div class="rate">
                                                <div class="pull-right">
                                                    <span>FROM CANADA</span>
                                                </div>
                                                <div class="pull-left">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus suscipit malesuada. Cras nec hendrerit lacus. Curabitur nec elementum justo. Sed vitae dapibus augue."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="box">
                                        <img src="images/pic1.png" alt="pic1" title="pic1" class="img-responsive" />
                                        <div class="caption">
                                            <h4>John William</h4>
                                            <div class="rate">
                                                <div class="pull-right">
                                                    <span>FROM CANADA</span>
                                                </div>
                                                <div class="pull-left">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus suscipit malesuada. Cras nec hendrerit lacus. Curabitur nec elementum justo. Sed vitae dapibus augue."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div class="box">
                                        <img src="images/pic2.png" alt="pic2" title="pic2" class="img-responsive" />
                                        <div class="caption">
                                            <h4>John William</h4>
                                            <div class="rate">
                                                <div class="pull-right">
                                                    <span>FROM CANADA</span>
                                                </div>
                                                <div class="pull-left">
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                    <i class="fa fa-star" aria-hidden="true"></i>
                                                </div>
                                            </div>
                                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut cursus suscipit malesuada. Cras nec hendrerit lacus. Curabitur nec elementum justo. Sed vitae dapibus augue."</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Testimonial;