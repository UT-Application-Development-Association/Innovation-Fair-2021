import React from "react";
import bannerImg from "../assets/images/banner.jpg";

export default function Intro(props) {
    return (
        <div className="intro-container container">
            <img className="banner-image mr-auto" src={bannerImg} alt='Innovation Fair'/>
            <div className="description mr-auto px-3">
                <h2 className="title">What Is IF2021?</h2>
                {/* <hr className="seperation-line"/> */}
                <p className="description-text">
                    As UTADA’s annual celebration of humanistic aesthetics and technical brilliance, the
                    Innovation Fair is a computer-programming-based <strong>application design competition</strong> aiming to
                    provide students with cutting-edge insight and hands-on experience
                    within some of the most popular technological innovation areas.
                    <br /><br />
                    This event is open to all undergraduate and master students regardless of their
                    technical background, hoping to gain some incredible prototype-developing experience through this
                    event. It is recommended that the participants have an interest in computer programming or
                    a preliminary understanding of software development.
                </p>
            </div>
        </div>
    );
}