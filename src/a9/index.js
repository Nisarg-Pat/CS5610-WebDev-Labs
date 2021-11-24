import React from "react";
import {Link} from "react-router-dom";

const A8 = () => {
    return (
        <>
            <h2>Assignment 8</h2>
            <Link to="/">
                Hello
            </Link> | &nbsp;
            <Link to="/a8/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a8/twitter">
                Build(Twitter Home)
            </Link> | &nbsp;
            <Link to="/a8/twitter/profile">
                Challenge(Twitter Profile)
            </Link>
        </>
    )
};

export default A8;