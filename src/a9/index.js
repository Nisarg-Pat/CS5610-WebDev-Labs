import React from "react";
import {Link} from "react-router-dom";

const A9 = () => {
    return (
        <>
            <h2>Assignment 9</h2>
            <Link to="/">
                Hello
            </Link> | &nbsp;
            <Link to="/a9/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a9/twitter">
                Build(Twitter Home)
            </Link> | &nbsp;
            <Link to="/a9/twitter/profile">
                Challenge(Twitter Profile)
            </Link>
        </>
    )
};

export default A9;