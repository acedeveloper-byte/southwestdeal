import React from 'react'

const BlogDetails = () => {
    return (
        <div>
            <div class="placetop">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-3">
                            <div class="left-box">
                                <h6>SEARCH</h6>
                                <div class="search">
                                    <form class="form-horizontal" method="post">
                                        <fieldset>
                                            <div class="form-group">
                                                <input name="s" value="" class="form-control" placeholder="Search Keywords" type="text" />
                                            </div>
                                            <div>
                                                <button type="submit" value="submit" class="btn"><i class="fa fa-search" aria-hidden="true"></i></button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                            <div class="left-box">
                                <h6>ABOUT</h6>
                                <div class="about">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mattis tincidunt orci a bibendum. Nulla pellentesque nisi vitae metus ultricies[...] <a href="about.html">Read More</a></p>
                                </div>
                            </div>
                            <div class="left-box">
                                <h6>LAST MINUTE DEALS</h6>
                                <div class="last">
                                    <ul class="list-unstyled">
                                        <li>
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <img src="/images/header4/thb1.jpg" class="img-responsive w-100" alt="thb1" title="thb1" />
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <h4>ISLAND TOUR</h4>
                                                    <p>Family Pack <span>$45</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <img src="/images/header4/thb2.jpg" class="img-responsive w-100" alt="thb2" title="thb2" />
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <h4>CENTRAL PARK TOUR</h4>
                                                    <p>Single Person <span>$45</span></p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="product-thumb">
                                                <div class="image">
                                                    <img src="/images/header4/thb3.jpg" class="img-responsive w-100" alt="thb3" title="thb3" />
                                                    <div class="hoverbox">
                                                        <div class="icon_plus" aria-hidden="true"></div>
                                                    </div>
                                                </div>
                                                <div class="caption">
                                                    <h4>PARIS TOUR</h4>
                                                    <p>Couple Pack <span>$950</span></p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="left-box">
                                <h6>TALK TO EXPERT</h6>
                                <div class="talk">
                                    <ul class="list-unstyled">
                                        <li>
                                            <i class="fa-brands fa-skype"></i>
                                            <h4>CONTACT SKYPE</h4>
                                            <p>John Doe</p>
                                        </li>
                                        <li>
                                            <i class="fa fa-phone" aria-hidden="true"></i>
                                            <h4>PHONE</h4>
                                            <p>+1 (123) 123 12345</p>
                                        </li>
                                        <li>
                                            <i class="fa fa-envelope" aria-hidden="true"></i>
                                            <h4>EMAIL</h4>
                                            <p>Johndoe01@gmail.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-9 ourblog">
                            <div id="blog-carousel" class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="product-thumb">
                                            <img src="/images/b1.png" class="img-responsive" alt="b1" title="b1" />
                                            <div class="caption">
                                                <div class="admin">
                                                    <p>ADMIN - <span>JOHN DOE</span></p>
                                                    <ul class="list-inline float-md-end ">
                                                        <li>
                                                            <a href="#"><i class="fa fa-comments" aria-hidden="true"></i>15 COMMENTS</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i>44 LIKES</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="icon_clock" aria-hidden="true"></i>22 DEC 2016</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4>Simple Image Blog Post</h4>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum.</p>

                                                <p class="des1"><i class="fa fa-quote-left" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. <i class="fa fa-quote-right" aria-hidden="true"></i></p>

                                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <div class="tag d-md-flex justify-content-between">
                                                    <ul class="list-inline">
                                                        <li><span>TAGS :</span> Summer tour, Winter tour, Ocean tour.</li>
                                                    </ul>
                                                    <ul class="list-inline d-flex">
                                                        <li><span>SHARE :</span></li>
                                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                        <li><a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                                                        <li><a href="https://plus.google.com/" target="_blank"><i class="social_googleplus" aria-hidden="true"></i></a></li>
                                                        <li><a href="https://www.instagram.com/" target="_blank">
                                                            <i class="fa-brands fa-instagram"></i>
                                                        </a></li>
                                                        <li><a href="https://in.pinterest.com/" target="_blank">
                                                            <i class="fa-brands fa-pinterest-p"></i>
                                                        </a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="carousel-item">
                                        <div class="product-thumb">
                                            <img src="/images/b1.png" class="img-responsive" alt="b1" title="b1" />
                                            <div class="caption">
                                                <div class="admin">
                                                    <p>ADMIN - <span>JOHN DOE</span></p>
                                                    <ul class="list-inline float-md-end ">
                                                        <li>
                                                            <a href="#"><i class="fa fa-comments" aria-hidden="true"></i>15 COMMENTS</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="fa fa-heart" aria-hidden="true"></i>44 LIKES</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"><i class="icon_clock" aria-hidden="true"></i>22 DEC 2016</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <h4>Simple Image Blog Post</h4>
                                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum.</p>

                                                <p class="des1"><i class="fa fa-quote-left" aria-hidden="true"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. <i class="fa fa-quote-right" aria-hidden="true"></i></p>

                                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                                <div class="tag d-md-flex justify-content-between">
                                                    <ul class="list-inline">
                                                        <li><span>TAGS :</span> Summer tour, Winter tour, Ocean tour.</li>
                                                    </ul>
                                                    <ul class="list-inline d-flex">
                                                        <li><span>SHARE :</span></li>
                                                        <li><a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                                                        <li><a href="https://twitter.com/" target="_blank">
                                                            <i class="fa-brands fa-twitter"></i>
                                                        </a></li>
                                                        <li><a href="https://plus.google.com/" target="_blank"><i class="social_googleplus" aria-hidden="true"></i></a></li>
                                                        <li><a href="https://www.instagram.com/" target="_blank">
                                                            <i class="fa-brands fa-instagram"></i>
                                                        </a></li>
                                                        <li><a href="https://in.pinterest.com/" target="_blank"><i class="fa-brands fa-pinterest-p"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#blog-carousel" data-bs-slide="prev">
                                    <span>Prev</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#blog-carousel" data-bs-slide="next">
                                    <span>Next</span>
                                </button>
                                <div class="clearfix"></div>
                            </div>
                            <div class="post">
                                <h1>YOU MIGHT ALSO LIKE THIS POSTS</h1>
                                <ul class="list-inline d-md-flex justify-content-between">
                                    <li>
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="/images/blog/img1.jpg" alt="img1" title="img1" class="img-responsive w-100" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <h4>Holidays</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="/images/blog/img2.jpg" alt="img2" title="img2" class="img-responsive w-100" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <h4>Winter</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="/images/blog/img3.jpg" alt="img3" title="img3" class="img-responsive w-100" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <h4>Adventure</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="/images/blog/img4.jpg" alt="img4" title="img4" class="img-responsive w-100" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <h4>Beaches</h4>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="product-thumb">
                                            <div class="image">
                                                <a href="#"><img src="/images/blog/img5.jpg" alt="img5" title="img5" class="img-responsive w-100" /></a>
                                                <div class="hoverbox">
                                                    <div class="icon_plus" aria-hidden="true"></div>
                                                </div>
                                            </div>
                                            <div class="caption">
                                                <h4>Family Fun</h4>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div class="clearfix"></div>

                            <div class="comment">
                                <h3>COMMENTS</h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <div class="img text-center">
                                            <img src="/images/blog/pic1.png" alt="pic1" title="pic1" class="img-responsive" />
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusrty's standard dummy text ever since the 1500s. <a href="javascript:void(0);">Reply <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></p>
                                    </li>
                                    <li>
                                        <div class="img text-center">
                                            <img src="/images/blog/pic2.png" alt="pic2" title="pic2" class="img-responsive" />
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusrty's standard dummy text ever since the 1500s. <a href="javascript:void(0);">Reply <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></p>
                                    </li>
                                    <li>
                                        <div class="img text-center">
                                            <img src="/images/blog/pic1.png" alt="pic1" title="pic1" class="img-responsive" />
                                        </div>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the indusrty's standard dummy text ever since the 1500s. <a href="javascript:void(0);">Reply <i class="fa fa-angle-double-right" aria-hidden="true"></i></a></p>
                                    </li>
                                </ul>
                                <hr />
                                <h1>LEAVE A COMMENT</h1>
                                <p>Your email address will not be published.</p>
                                <form class="form-horizontal" method="post">
                                    <fieldset>
                                        <div class="form-group d-md-flex">
                                            <div class="col-sm-6">
                                                <input class="form-control" placeholder="Name (Required)" id="input-name" value="" name="jobname" required="" type="text" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input class="form-control float-end" id="input-email" placeholder="E-mail (Required)" value="" name="email" required="" type="text" />
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="col-sm-12">
                                                <textarea class="form-control" id="input-enquiry" rows="10" name="enquiry" placeholder="Write your comment here" required=""></textarea>
                                            </div>
                                        </div>
                                        <button type="submit" value="Submit" class="btn btn-primary btnus">View More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                    </fieldset>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogDetails
