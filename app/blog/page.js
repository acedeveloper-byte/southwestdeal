import Breadcrumbs from '@/Breadcrumbs'
import Blogslist from '@/components/Blogs/blogslist'
import React from 'react'
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';


const Blog = () => {
    return (
        <div>
            <Header />
            <Breadcrumbs main={"Home"} page={"blogs"} title="Blogs" mainlink={"/"} pagelink={"/blog"} />
            <div class="blog">
                <Blogslist />
            </div>
            <Footer />
        </div>
    )
}

export default Blog
