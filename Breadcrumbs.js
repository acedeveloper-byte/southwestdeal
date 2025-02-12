import React from 'react'

const Breadcrumbs = ({ title, mainlink, pagelink, main, page }) => {
    return (
        <>
            <div class="bread-crumb">
                <div class="container">
                    <h2>{title}</h2>
                    <ul class="d-flex justify-content-center list-group-horizontal p-0">
                        <li class="list-group-item"><a href={mainlink}>{main}</a></li>
                        <li class="list-group-item"><a href={pagelink}>{page}</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Breadcrumbs
