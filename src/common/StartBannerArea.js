import React from 'react';
import { Link } from "react-router-dom";

const StartBannerArea = (props) => {
    return (
        <section class="banner_area">
            <div class="banner_inner d-flex align-items-center">
                <div class="container">
                    <div class="banner_content text-center">
                        <h2>{props.pageName}</h2>
                        <div class="page_link">
                            <a href="index.html">Home</a>
                            <a href="contact.html">Contact</a>
                            {/* <Link className="nav-link" to="/">Home</Link>
                            <Link className="nav-link" to={props.linkTo}>
                                {props.linkName}
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StartBannerArea;