import React from "react";
import ReduxExamples from "./ReduxExamples/components";
import APIExamples from "./APIExamples";

const Practice = () => {
    return(
        <div>
            <h1>Practice</h1>
            <APIExamples/>
            <ReduxExamples/>
        </div>
    );
};

export default Practice;