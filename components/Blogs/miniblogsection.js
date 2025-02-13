'use client'
import React from "react"


const MiniBlogs = () => {
    return (
        <div>
            <div class="blog">
                <div class="container">
                    <div class="row">
                        <div class="places">
                            <h1>our blog</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a suscipit quam, ut vestibulum lorem.</p>
                            <div class="border-margin">
                                <hr />
                            </div>
                        </div>
                        <div class="col-sm-4 col-xs-12">
                            <div class="product-thumb">
                                <div class="image">
                                    <a href="#"><img src="images/blog1.jpg" alt="blog1" title="blog1" class="img-responsive" /></a>
                                    <div class="hoverbox">
                                        <div class="icon_plus" aria-hidden="true"></div>
                                    </div>
                                    <div class="matter">
                                        <ul class="list-inline">
                                            <li><a href="#">26 Dec 2016</a></li>
                                            <li><a href="#">by john doe </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="caption">
                                    <div class="inner">
                                        <h4>Awesome Blog Post Title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                    </div>
                                    <div class="text-center">
                                        <button type="button" onclick="location.href='/blog/blog-details/5'">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4 col-xs-12">
                            <div class="product-thumb">
                                <div class="image">
                                    <a href="#"><img src="images/blog2.jpg" alt="blog2" title="blog2" class="img-responsive" /></a>
                                    <div class="hoverbox">
                                        <div class="icon_plus" aria-hidden="true"></div>
                                    </div>
                                    <div class="matter">
                                        <ul class="list-inline">
                                            <li><a href="#">26 Dec 2016</a></li>
                                            <li><a href="#">by john doe </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="caption">
                                    <div class="inner">
                                        <h4>Awesome Blog Post Title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                    </div>
                                    <div class="text-center">
                                        <button type="button" onclick="location.href='/blog/blog-details/5'">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-sm-4 col-xs-12">
                            <div class="product-thumb">
                                <div class="image">
                                    <a href="#"><img src="images/blog3.jpg" alt="blog3" title="blog3" class="img-responsive" /></a>
                                    <div class="hoverbox">
                                        <div class="icon_plus" aria-hidden="true"></div>
                                    </div>
                                    <div class="matter">
                                        <ul class="list-inline">
                                            <li><a href="#">26 Dec 2016</a></li>
                                            <li><a href="#">by john doe </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="caption">
                                    <div class="inner">
                                        <h4>Awesome Blog Post Title</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum...</p>
                                    </div>
                                    <div class="text-center">
                                        <button type="button" onclick="location.href='/blog/blog-details/5'">Read More <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
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

export default MiniBlogs;