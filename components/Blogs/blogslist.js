
'use client'
import React, { useState } from 'react'


const Blogslist = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const [current, setCurrent] = useState(currentPage);
    const totalPages = 10; // Change this dynamically as per your data

    const handlePageChange = (page) => {
        if (page < 1 || page > totalPages) return;
        setCurrent(page);
    };

    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }
    return (
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
                                                <img src="images/header4/thb1.jpg" class="img-responsive w-100" alt="thb1" title="thb1" />
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
                                                <img src="images/header4/thb2.jpg" class="img-responsive  w-100" alt="thb2" title="thb2" />
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
                                                <img src="images/header4/thb3.jpg" class="img-responsive" alt="thb3" title="thb3" />
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
                        <div class="product-thumb">
                            <a href="/blog/blog-details/1"><img src="images/b1.png" class="img-responsive w-100" alt="b1" title="b1" /></a>
                            <div class="caption">
                                <div class="admin">
                                    <p>ADMIN - <span>JOHN DOE</span></p>
                                    <ul class="list-inline float-md-end">
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
                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum.</p>
                            </div>
                        </div>
                        <div class="product-thumb">
                            <a href="/blog/blog-details/2"><img src="images/b2.png" class="img-responsive w-100" alt="b2" title="b2" /></a>
                            <div class="caption">
                                <div class="admin">
                                    <p>ADMIN - <span>JOHN DOE</span></p>
                                    <ul class="list-inline float-md-end">
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
                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum.</p>
                            </div>
                        </div>
                        <div class="product-thumb">
                            <a href="/blog/blog-details/3"><img src="images/b3.png" class="img-responsive w-100" alt="b3" title="b3" /></a>
                            <div class="caption">
                                <div class="admin">
                                    <p>ADMIN - <span>JOHN DOE</span></p>
                                    <ul class="list-inline float-md-end">
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
                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum.</p>
                            </div>
                        </div>
                        <div class="product-thumb">
                            <a href="/blog/blog-details/4"><img src="images/b1.png" class="img-responsive w-100" alt="b1" title="b1" /></a>
                            <div class="caption">
                                <div class="admin">
                                    <p>ADMIN - <span>JOHN DOE</span></p>
                                    <ul class="list-inline  float-end">
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
                                <p class="des">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elementum, dolor sit amet luctus phare-tra, turpis lacus rhoncus ipsum.</p>
                            </div>
                        </div>

                        <ul className="pagination pt-md-4 d-block">
                            <li>
                                <a
                                    href="#"
                                    aria-label="Previous"
                                    onClick={() => handlePageChange(current - 1)}
                                    className={current === 1 ? 'disabled' : ''}
                                >
                                    Prev
                                </a>
                            </li>
                            {pageNumbers.map((number) => (
                                <li key={number} className={current === number ? 'active' : ''}>
                                    <a
                                        href="#"
                                        onClick={() => handlePageChange(number)}
                                    >
                                        {number}
                                    </a>
                                </li>
                            ))}
                            {totalPages > 5 && current < totalPages - 2 && (
                                <>
                                    <li>
                                        <a href="#">...</a>
                                    </li>
                                    <li>
                                        <a href="#" onClick={() => handlePageChange(totalPages)}>
                                            {totalPages}
                                        </a>
                                    </li>
                                </>
                            )}
                            <li>
                                <a
                                    href="#"
                                    aria-label="Next"
                                    onClick={() => handlePageChange(current + 1)}
                                    className={current === totalPages ? 'disabled' : ''}
                                >
                                    Next
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogslist
