import React from "react";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";

const Build = () => {
    return(
        <div>
            <Route path={["/a7/twitter/", "/a7/twitter/home"]} exact={true} component={HomeScreen}/>
            <Route path={["/a7/twitter/explore"]} exact={true} component={ExploreScreen}/>
        </div>
    );
};
export default Build;
