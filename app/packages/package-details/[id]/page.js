import Breadcrumbs from '@/Breadcrumbs'
import Header from '@/components/Header'
import Packagesdetails from '@/components/Packages/Packagesdetails'
import React from 'react'
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const page = () => {
    return (
        <>
            <Header />
            <Breadcrumbs />
            <Packagesdetails />
        </>
    )
}

export default page
