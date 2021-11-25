import React from "react";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";
import Movies from "./Movies";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <Movies/>
            <APIExamples/>
            <ReduxExamples/>
        </div>
    );
};

export default Practice;