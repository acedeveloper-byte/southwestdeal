import Packageslist from '@/components/Packages/List'
import React from 'react'
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/Breadcrumbs';
const page = () => {
    return (
        <>

            <Header />
            <Breadcrumbs main={"Home"} page={"Packages"} mainlink={"/"} pagelink={"/packages"} title={"Packages"} />
            <Packageslist />
            <Footer />
        </>
    )
}

export default page
