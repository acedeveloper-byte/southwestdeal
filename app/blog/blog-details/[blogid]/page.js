import BlogsDetails from '@/components/Blogs/BlogDetails'
import React from 'react'
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const page = () => {
    return (
        <>
            <Header />
            <BlogsDetails />
            <Footer />
        </>
    )
}

export default page
