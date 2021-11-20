import React from "react";
import {Link} from "react-router-dom";

const A7 = () => {
    return (
        <>
            <h2>Assignment 7</h2>
            <Link to="/">
                Hello
            </Link> | &nbsp;
            <Link to="/a7/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a7/twitter">
                Build(Twitter Home)
            </Link> | &nbsp;
            <Link to="/a7/twitter/profile">
                Challenge(Twitter Profile)
            </Link>
        </>
    )
};

export default A7;