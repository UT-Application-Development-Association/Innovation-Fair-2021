import React from "react";
import bannerImg from "../assets/images/banner.jpg";

export default function Intro(props) {
    return (
        <div className="intro-container container">
            <img className="banner-image mr-auto" src={bannerImg} alt='Innovation Fair'/>
            <div className="description mr-auto">
                <h2 className="title">What Is IF2021?</h2>
                {/* <hr className="seperation-line"/> */}
                <p className="description-text">
                    As UTADA’s annual celebration of humanistic aesthetics and technical brilliance, the
                    Innovation Fair is a computer-programming based application design competition aiming to
                    provide University of Toronto’s students with cutting-edge insight and hands-on experience
                    within some of the most popular technological innovation areas.
                    <br /><br />
                    Innovation Fair 2021 is returning with a theme of Post-Pandemic Era. United by our
                    identity as UofT students, Innovation Fair 2021 seeks to expand the boundary of personal
                    well-being, enhance the experience of communal living, and initiate a dialogue between
                    individual students and the campus we live in.
                </p>
            </div>
        </div>
    );
}