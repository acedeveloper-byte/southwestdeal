import React from 'react'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Engine from "@/components/SearchEngine";
import PopularPlaces from "@/components/Home/popular-places";
import Categories from "@/components/Home/categories";
import Testimonial from "@/components/Home/testimonial";
import MiniBlogs from "@/components/Blogs/miniblogsection";


const App = () => {
    return (
        <div>
            <Header />
            <section >
                <Engine />
            </section>

            <section id="popular-places">
                <PopularPlaces />
            </section>
            <section id="categories">
                <Categories />
            </section>
            <section id="testimonials">
                <Testimonial />
            </section>
            <section id="mini-blogs">
                <MiniBlogs />
            </section>

            <Footer />
        </div>
    );
}

export default App